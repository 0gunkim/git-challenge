import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  callback: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => void,
  options: { threshold: number },
) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};
