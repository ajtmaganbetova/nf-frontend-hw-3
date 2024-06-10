import React from 'react'
import styles from './hero.module.css'
import Blog from '@/app/blog/page';
import Home from '@/app/page'

interface WrapperProps {
  fileName: string;
}

const WrapperComponent: React.FC<WrapperProps> = ({ fileName }) => {
  switch (fileName) {
    case 'home':
      return <Home />;
    case 'blog':
      return <Blog />;
    default:
      return null;
  }
};

export default WrapperComponent;