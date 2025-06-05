// src/hooks/useSpecialChai.js
import { useEffect, useState } from "react";

export function useSpecialChai() {
  const [chai, setChai] = useState(null);  // camelCase for setter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/allchai")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setChai(data);       // Set data
        setLoading(false);   // Stop loading
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  return { chai, loading, error };
}
