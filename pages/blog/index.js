import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

const Blog = () => {
  return (
    <div className={styles.container}>
      <h2>This is blog page</h2>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Blog;
