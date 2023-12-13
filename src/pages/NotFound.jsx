import React from 'react';
import jpg from '../../src/assets/404.jpg';
import webp from '../../src/assets/404.webp';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <picture>
        <source srcset={webp} type="image/webp" />
        <img src={jpg} alt="page not found" />
      </picture>
      <Link to="/" className="absolute top-1/5 left-1/5">
        <Button text="메인 페이지로 이동" />
      </Link>
      <div className="content-{''} clear-left block"></div>
    </div>
  );
}
