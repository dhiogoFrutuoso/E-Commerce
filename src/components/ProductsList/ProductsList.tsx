import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { ProductCard } from "../ProductCard/ProductCard";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function LoadProducts() {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=10",
      );
      const ProductsData = response.data;

      setProducts(ProductsData);
    }

    LoadProducts();
  }, []);

  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={ product }
        />
      ))}
    </S.Container>
  );
};
