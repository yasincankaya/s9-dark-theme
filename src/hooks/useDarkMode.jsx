import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initialValue = false) {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialValue);

  return [geceModu, setGeceModu];
}