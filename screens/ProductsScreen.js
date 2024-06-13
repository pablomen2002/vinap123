import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import styles from '../styles/ProductsScreenStyles';

const ProductsScreen = ({ route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://vinappteria2-backend.vercel.app/api/products?category=${category}`); // Actualiza la URL para apuntar a tu servidor en Vercel
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const renderItem = ({ item }) => <ProductItem item={item} />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

export default ProductsScreen;
