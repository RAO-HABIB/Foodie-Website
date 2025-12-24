'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './images-slideshow.module.css';

const images = [
  { src: burgerImg, alt: 'A delicious, juicy burger' },
  { src: curryImg, alt: 'A delicious, spicy curry' },
  { src: dumplingsImg, alt: 'Steamed dumplings' },
  { src: macncheeseImg, alt: 'Mac and cheese' },
  { src: pizzaImg, alt: 'A delicious pizza' },
  { src: schnitzelImg, alt: 'A delicious schnitzel' },
  { src: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow} aria-live="polite">
      <Image
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        width={500} // Adjust dimensions as needed
        height={300}
        className={classes.active}
      />
    </div>
  );
}
