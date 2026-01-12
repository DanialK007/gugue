"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollerProps = {
  children: React.ReactNode;
  className?: string;

  // movement
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;

  // effects
  fade?: boolean;
  blur?: boolean;
  scaleFrom?: number;
  fromRotate?: number;
  toRotate?: number;

  fromOpacity?: number;
  toOpacity?: number;

  // scroll trigger
  start?: string;
  end?: string;
  scrub?: boolean | number;
  duration?: number;
  markers?: boolean;

  startPx?: number;
  endPx?: number;

  startPercent?: number;
  endPercent?: number;
};

const Scroller: React.FC<ScrollerProps> = ({
  children,
  className = "",

  fromX = 0,
  toX = 0,
  fromY = 0,
  toY = 0,

  fade = false,
  blur = false,
  scaleFrom = 1,
  fromRotate = 0,
  toRotate = 0,

  fromOpacity = 1,
  toOpacity = 1,

  start = "0px 80%",
  end = "0px 0%",
  scrub = true,
  duration = 1,
  markers = false,
  startPx = 0,
  endPx = 100,
  startPercent = 80,
  endPercent = 0,
}) => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const computedStart = `${startPx}px ${startPercent}%`;
  const computedEnd = `${endPx}px ${endPercent}%`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!boxRef.current) return;

    const fromVars: gsap.TweenVars = {
      ...(fromX !== undefined && { x: fromX }),
      ...(fromY !== undefined && { y: fromY }),
      ...(fromOpacity !== undefined && { opacity: fromOpacity }),
      ...(blur && { filter: "blur(20px)" }),
      ...(scaleFrom !== 1 && { scale: scaleFrom }),
      ...(fromRotate !== 0 && { rotate: fromRotate }),
    };

    const toVars: gsap.TweenVars = {
      ...(toX !== undefined && { x: toX }),
      ...(toY !== undefined && { y: toY }),
      ...(toOpacity !== undefined && { opacity: toOpacity }),
      scale: 1,
      filter: "blur(0px)",
      rotate: toRotate,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: computedStart,
        end: computedEnd,
        scrub,
        markers,
      },
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(boxRef.current, fromVars, toVars);
    }, boxRef);

    return () => ctx.revert();
  }, [
    fromX,
    toX,
    fromY,
    toY,
    fromRotate,
    toRotate,
    fromOpacity,
    toOpacity,
    blur,
    scaleFrom,
    computedStart,
    computedEnd,
    scrub,
    duration,
    markers,
  ]);

  return (
    <div ref={boxRef} className={className}>
      {children}
    </div>
  );
};

export default Scroller;
