import { useEffect, useRef } from "react";

/**
 * @hook usePrevious
 * @description 이전 값을 반환합니다.
 * @param value 이전 값을 반환할 값
 * @returns 이전 값
 */
function usePrevious<T = any>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;

