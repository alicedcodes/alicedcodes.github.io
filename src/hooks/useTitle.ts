import { useEffect } from "react";

export function useTitle(subtitle?: string | null) {
  useEffect(() => {
    document.title = "alicedcodes" + (subtitle ? ` - ${subtitle}` : "");
  }, [subtitle]);
}
