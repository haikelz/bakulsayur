import { useEffect, useState } from "react";

/**
 * A custom hook to set document title dynamically
 * @param title
 */
export function useTitle(title: string) {
  const [documentTitle] = useState<string>(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
}
