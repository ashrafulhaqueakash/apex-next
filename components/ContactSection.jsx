import { Reveal } from "./ui/Reveal";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink p-4 py-6 lg:bg-white lg:p-16">
      <div
        className="relative mx-auto w-full overflow-hidden rounded-xl px-4 py-6 lg:h-[705px] lg:w-[1152px] lg:px-16 lg:py-12"
        style={{ background: "linear-gradient(135deg, #4c0606 0%, #350b03 100%)" }}
      >
        <img
          src="/images/decor/burst-small.svg"
          alt=""
          className="pointer-events-none absolute left-[-143px] top-[-159px] h-[473px] w-[455px]"
        />
        <img
          src="/images/decor/burst-large.svg"
          alt=""
          className="pointer-events-none absolute bottom-[-210px] right-[-172px] h-[531px] w-[510px] lg:bottom-auto lg:left-[804px] lg:right-auto lg:top-[382px]"
        />
        <div className="relative flex h-full flex-col items-center justify-center gap-6 lg:gap-10">
          <Reveal className="flex flex-col items-center gap-4 lg:gap-6 max-w-2xl">
            <h2 className="text-center font-display text-[28px] font-light leading-7 text-white lg:text-[54px] lg:leading-[54px]">
              LET&rsquo;S CREATE SOMETHING IMPOSSIBLE TO IGNORE.
            </h2>
            <p className="text-center font-display text-xl font-light leading-5 text-white lg:text-2xl lg:leading-6">
              Tell us what you are looking for.
            </p>
          </Reveal>

          <Reveal as="div" delay={0.08} className="flex w-full flex-col items-center lg:w-[751px]">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
