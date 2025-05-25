import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    let timer;
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      setDebounceValue(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
