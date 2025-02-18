import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (Category) => {
  const [images, setImages] = useState([]);
  const [Loadind, setLoadind] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(Category);
    setImages(newImages);
    setLoadind(false);
  };

  useEffect(() => {
    getImages();
  }, [Category]); // ✅ El array de dependencias evita llamadas innecesarias

  return {
    images,
    isLoading: Loadind,
  };
};
