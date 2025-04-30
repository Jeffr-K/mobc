import { useEffect, useState } from "react";

/**
 * @hook useDebounce
 * @description 디바운스 훅
 * @param value 디바운스 할 값
 * @param delay 디바운스 지연 시간
 * @returns 디바운스 된 값
 */
function useDebounce<T = any>(value: T, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;