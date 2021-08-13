import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
const Products = ({ productId = 100 }) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${productId}`}>
        <a>
          <h2>Product {productId}</h2>
        </a>
      </Link>
      <Link href="/products/2">
        <a>
          <h2>Product 2</h2>
        </a>
      </Link>
      <Link href="/products/3">
        <a>
          <h2>Product 3</h2>
        </a>
      </Link>

      <Link href="/" replace>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Products;
