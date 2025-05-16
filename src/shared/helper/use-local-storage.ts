import { useState } from "react";

/**
 * @hook useLocalStorage
 * @description 로컬 스토리지에 값을 저장하고 가져옵니다.
 * @param key 로컬 스토리지에 저장할 키
 * @param initialValue 로컬 스토리지에 저장할 초기값
 * @returns 로컬 스토리지에 저장된 값과 설정 함수
 */
function useLocalStorage<T = any>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
