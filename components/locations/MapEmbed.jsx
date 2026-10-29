"use client";

import { useEffect, useState } from "react";

export function MapEmbed({ src, title }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let timeoutId;
    const loadMap = () => {
      timeoutId = window.setTimeout(() => setIsLoaded(true), 0);
    };

    if (document.readyState === "complete") {
      loadMap();
    } else {
      window.addEventListener("load", loadMap, { once: true });
    }

    return () => {
      window.removeEventListener("load", loadMap);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#171515] lg:h-[440px]">
      {isLoaded ? (
        <iframe
          title={title}
          src={src}
          className="h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="font-sans text-sm leading-6 text-white/65">
            The interactive map will load after the page finishes loading.
          </p>
        </div>
      )}
    </div>
  );
}
