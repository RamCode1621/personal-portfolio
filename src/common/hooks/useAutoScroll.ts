import { useRef } from "react";

const useAutoScroll = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { elementRef, handleScroll };
};

export default useAutoScroll;
