import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>details about products {productId}</h1>

      <Link href="/products">
        <a>Products</a>
      </Link>
    </div>
  );
};

export default ProductDetail;
