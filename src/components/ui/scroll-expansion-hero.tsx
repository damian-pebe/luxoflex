import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaSrc,
  bgImageSrc,
  title,
  subtitle,
  children,
}: ScrollExpandMediaProps) => {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);
  const mediaRef    = useRef<HTMLDivElement>(null);
  const bgRef       = useRef<HTMLImageElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const word1Ref    = useRef<HTMLHeadingElement>(null);
  const word2Ref    = useRef<HTMLHeadingElement>(null);
  const titleWrap   = useRef<HTMLDivElement>(null);
  const hintRef     = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const firstWord = title ? title.split(' ')[0] : '';
  const restWords = title ? title.split(' ').slice(1).join(' ') : '';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(mediaRef.current, {
        width: '340px',
        height: '440px',
        borderRadius: '20px',
      });
      gsap.set(contentRef.current, { opacity: 0, y: 40 });
      gsap.set(word1Ref.current, { opacity: 0 });
      gsap.set(word2Ref.current, { opacity: 0 });
      gsap.set(hintRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: stickyRef.current,
          pinSpacing: true,
          scrub: 1.2,
          start: 'top top',
          end: '+=180%',
          anticipatePin: 1,
        },
      });

      // 0–0.1: title + hint fade in
      tl.to(word1Ref.current, { opacity: 1, duration: 0.1 }, 0)
        .to(word2Ref.current, { opacity: 1, duration: 0.1 }, 0)
        .to(hintRef.current,  { opacity: 1, duration: 0.1 }, 0)

        // 0.1–0.5: image expands, bg fades, overlay fades
        .to(mediaRef.current, {
          width: '100vw',
          height: '100vh',
          borderRadius: 0,
          ease: 'power2.inOut',
          duration: 0.5,
        }, 0.1)
        .to(bgRef.current, { opacity: 0, duration: 0.4 }, 0.1)
        .to(overlayRef.current, { opacity: 0, duration: 0.4 }, 0.1)

        // words fly apart while image expands
        .to(word1Ref.current, { x: '-55vw', duration: 0.5, ease: 'power2.inOut' }, 0.1)
        .to(word2Ref.current, { x:  '55vw', duration: 0.5, ease: 'power2.inOut' }, 0.1)
        .to(hintRef.current,  { opacity: 0, duration: 0.1 }, 0.15)

        // title fades off as expansion nears complete
        .to(titleWrap.current, { opacity: 0, duration: 0.05 }, 0.56)
        .to(subtitleRef.current, { opacity: 0, duration: 0.05 }, 0.52)

        // content fades in after expansion
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: 'power2.out',
        }, 0.65);
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* The sticky viewport — GSAP will pin this */}
      <div
        ref={stickyRef}
        className="h-screen w-full overflow-hidden bg-[#09090B] flex flex-col items-center justify-center"
      >
        {/* Fading parallax background */}
        <img
          ref={bgRef}
          src={bgImageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#09090B] pointer-events-none" />

        {/* Expanding image card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={mediaRef}
            className="relative overflow-hidden"
            style={{ width: '340px', height: '440px', borderRadius: '20px' }}
          >
            <img
              src={mediaSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay that fades as card expands */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-black pointer-events-none"
              style={{ opacity: 0.5 }}
            />
            {/* Persistent bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />

            {subtitle && (
              <p
                ref={subtitleRef}
                className="absolute bottom-6 left-0 right-0 text-center text-yellow-400/80 font-poppins text-xs font-semibold tracking-widest uppercase"
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Flying title words */}
        <div
          ref={titleWrap}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none z-10"
        >
          <h2
            ref={word1Ref}
            className="font-audiowide text-5xl md:text-7xl text-white font-extralight tracking-tight"
            style={{ opacity: 0 }}
          >
            {firstWord}
          </h2>
          <h2
            ref={word2Ref}
            className="font-zilla text-5xl md:text-7xl font-bold italic"
            style={{
              opacity: 0,
              background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {restWords}
          </h2>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-8 flex flex-col items-center gap-2 pointer-events-none z-10"
          style={{ opacity: 0 }}
        >
          <span className="text-zinc-500 font-poppins text-xs tracking-widest uppercase">
            Scroll para expandir
          </span>
          <div className="w-0.5 h-6 bg-yellow-500/40 rounded-full animate-pulse" />
        </div>

        {/* Milestone content — revealed after full expansion */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-end z-20"
          style={{ opacity: 0 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
