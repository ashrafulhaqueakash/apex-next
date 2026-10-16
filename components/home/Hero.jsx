"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { CTAButton } from "@/components/ui/Button";

const FRAME_COUNT = 97;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) => `/images/hero/frame-${String(i).padStart(2, "0")}.webp`);
const FRAME_PROGRESS_END = 0.72;
// Matches the old `object-[55%_50%]` focal point.
const FOCAL_X = 0.55;
const FOCAL_Y = 0.5;
const MAX_DPR = 2;

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

// Draws `img` into the canvas with object-fit: cover semantics.
function drawCover(ctx, img, width, height) {
  const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  ctx.drawImage(img, (width - w) * FOCAL_X, (height - h) * FOCAL_Y, w, h);
}

export function Hero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const indicatorRef = useRef(null);
  const contentRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedRef = useRef([]);
  const frameIndexRef = useRef(0);
  const drawnIndexRef = useRef(-1);
  const rafRef = useRef(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Paints the requested frame, or the nearest earlier decoded one so
  // scrubbing never flashes back to the base image mid-scroll.
  const draw = (force = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let index = frameIndexRef.current;
    while (index > 0 && !loadedRef.current[index]) index -= 1;
    const img = imagesRef.current[index];
    if (!img || !loadedRef.current[index]) return;
    if (!force && index === drawnIndexRef.current) return;
    drawCover(canvas.getContext("2d"), img, canvas.width, canvas.height);
    drawnIndexRef.current = index;
  };

  const scheduleDraw = () => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      draw();
    });
  };

  useEffect(() => {
    let cancelled = false;

    imagesRef.current = FRAMES.map((src, i) => {
      const img = new Image();
      img.src = src;

      // decode() forces the bitmap to be decoded ahead of time, not just
      // downloaded — without it a fast scroll can outrun decoding.
      const markLoaded = () => {
        if (cancelled) return;
        loadedRef.current[i] = true;
        if (i <= frameIndexRef.current) scheduleDraw();
      };
      if (img.decode) {
        img.decode().then(markLoaded).catch(markLoaded);
      } else {
        img.onload = markLoaded;
      }
      return img;
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = Math.round(canvas.clientWidth * dpr);
      const height = Math.round(canvas.clientHeight * dpr);
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      draw(true);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // Scroll updates touch the DOM directly instead of going through React
  // state, so scrolling never triggers a re-render.
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.round(Math.min(1, value / FRAME_PROGRESS_END) * (FRAME_COUNT - 1));
    if (nextIndex !== frameIndexRef.current) {
      frameIndexRef.current = nextIndex;
      scheduleDraw();
    }

    if (indicatorRef.current) {
      indicatorRef.current.style.opacity = clamp01(1 - value / 0.06);
    }

    const contentOpacity = clamp01((value - (FRAME_PROGRESS_END - 0.04)) / 0.12);
    const content = contentRef.current;
    if (content) {
      content.style.opacity = contentOpacity;
      content.style.transform = `translate3d(0, ${(1 - contentOpacity) * 30}px, 0)`;
      content.style.pointerEvents = contentOpacity > 0.6 ? "auto" : "none";
    }
  });

  return (
    // svh keeps the scroll distance fixed while the mobile URL bar shows/hides;
    // dvh here would change the page height mid-scroll.
    <section ref={sectionRef} className="relative h-[400svh] w-full bg-ink">
      {/* Safari 26 paints its status/tool bars from the first fixed or sticky
          ancestor of whatever sits at the screen edge, unless that box is
          smaller than the viewport on both axes. So the sticky element is 0x0
          and the visible layer hangs off it as an absolute child, sized to the
          track via cqw — the hero then shows through both bars.
          The track is one screen shorter than the section, so the 0-height
          pin releases exactly where an h-svh one would. */}
      <div className="@container absolute inset-x-0 top-0 h-[300svh]">
        <div className="sticky top-0 h-0 w-0">
          <div className="absolute left-0 top-0 h-svh w-[100cqw]">
            {/* On mobile the imagery extends 64px above the screen so Safari has
                hero pixels to show under the notch/status bar, instead of the
                section's dark background. */}
            <div className="absolute inset-x-0 bottom-0 top-[-64px] overflow-hidden lg:top-0">
              <img
                src={FRAMES[0]}
                alt=""
                draggable={false}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-[55%_50%]"
              />
              <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
              style={{ background: "linear-gradient(180deg, rgba(13,11,12,0) 0%, rgba(13,11,12,0.72) 100%)" }}
            />

            <div
              ref={indicatorRef}
              style={{ transition: "opacity 0.15s linear" }}
              className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ivory"
            >
              <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-ivory/70 p-1.5">
                <div className="scroll-dot h-2 w-1 rounded-full bg-ivory/90" />
              </div>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-ivory/80">Scroll down</span>
            </div>

            <div
              ref={contentRef}
              style={{
                opacity: 0,
                transform: "translate3d(0, 30px, 0)",
                pointerEvents: "none",
                transition: "opacity 0.15s linear, transform 0.15s linear",
              }}
              className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 pb-16 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:text-left"
            >
              <div className="flex max-w-[900px] flex-col gap-2 text-center lg:max-w-[820px] lg:items-start lg:text-left">
                <h1 className="font-sans text-lg font-light leading-snug tracking-[0.5px] text-ivory sm:text-xl lg:text-[26px]">
                  OWN A LANDMARK. NOT A PANEL.
                </h1>
                <p className="font-sans text-sm font-light leading-5 tracking-[0.2px] text-ivory/85 sm:text-base sm:leading-6">
                  The Apex Media Group transforms Dubai&rsquo;s architecture into extraordinary media opportunities for brands and property partners.
                </p>
                <p className="font-sans text-sm font-light leading-5 tracking-[0.2px] text-ivory/85 sm:text-base sm:leading-6">
                  Existing buildings. Developments under construction. Rooftops.
                </p>
                <p className="font-sans text-sm font-medium leading-5 tracking-[0.2px] text-ivory sm:text-base sm:leading-6">
                  BEAUTIFY THE SKYLINE.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <CTAButton href="/locations" className="!px-8">EXPLORE LOCATIONS</CTAButton>
                <CTAButton className="!px-8">PARTNER WITH APEX</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
