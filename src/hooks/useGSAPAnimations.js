import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const elementRef = useRef(null);

  const animateText = (textRef, delay = 0) => {
    if (!textRef.current) return;

    const chars = textRef.current.textContent.split('');
    textRef.current.textContent = '';
    
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(50px)';
      span.style.display = 'inline-block';
      textRef.current.appendChild(span);
    });

    gsap.to(textRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      delay: delay,
      ease: "power2.out"
    });
  };

  const animateFromLeft = (ref, delay = 0) => {
    if (!ref.current) return;

    gsap.fromTo(ref.current, 
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  const animateFromRight = (ref, delay = 0) => {
    if (!ref.current) return;

    gsap.fromTo(ref.current, 
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  const animateFromBottom = (ref, delay = 0) => {
    if (!ref.current) return;

    gsap.fromTo(ref.current, 
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  const animateScale = (ref, delay = 0) => {
    if (!ref.current) return;

    gsap.fromTo(ref.current, 
      {
        scale: 0.5,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  const animateStagger = (refs, delay = 0) => {
    if (!refs || refs.length === 0) return;

    gsap.fromTo(refs, 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: refs[0],
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  const animateParallax = (ref, speed = 0.5) => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  };

  const animateRotation = (ref, delay = 0) => {
    if (!ref.current) return;

    gsap.fromTo(ref.current, 
      {
        rotation: -180,
        opacity: 0
      },
      {
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        delay: delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  return {
    elementRef,
    animateText,
    animateFromLeft,
    animateFromRight,
    animateFromBottom,
    animateScale,
    animateStagger,
    animateParallax,
    animateRotation
  };
}; 