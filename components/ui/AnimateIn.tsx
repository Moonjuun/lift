"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  /** 등장 지연(ms) — 연속 요소에 순차 적용 */
  delay?: number;
};

/** 화면에 들어올 때 부드럽게 나타나는 래퍼 */
export function AnimateIn({ children, className = "", delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "motion-safe:animate-fade-in-up" : "opacity-0"} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
