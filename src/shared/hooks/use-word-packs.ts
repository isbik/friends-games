import { useState, useEffect } from "react";

export const useWordPacks = () => {
  const [wordPacks, setWordPacks] = useState([]);
  useEffect(() => {
    fetch("/assets/words.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setWordPacks(data);
      });
  }, []);

  return wordPacks;
};
