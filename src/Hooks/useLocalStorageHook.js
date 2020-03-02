import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      // if object key exists parse value
      value = JSON.parse(localStorage.getItem(key) || []);
    } catch (error) {
      value = defaultValue;
    }
    return value;
  });
  useEffect(() => {
    // watch for updates and set localStorage state
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage;
