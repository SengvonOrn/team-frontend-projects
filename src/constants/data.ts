export interface Component {
  title: string;
  href: string;
  description: string;
}

// Define the Deal and Props interfaces
// types.ts
export interface Deal {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string; // added category
}

// data/topDealsData.ts

export const topDealsData: Deal[] = [
  {
    id: 1,
    name: "Smart Watch",
    price: 120,
    image: "/images/watch.png",
    description: "Track your fitness and notifications.",
    rating: 4.5,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 80,
    image: "/images/headphones.png",
    description: "High quality sound and comfort.",
    rating: 4.2,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 95,
    image: "/images/shoes.png",
    description: "Lightweight shoes for daily running.",
    rating: 4.7,
    category: "Sports",
  },
  {
    id: 4,
    name: "Yoga Mat",
    price: 25,
    image: "/images/yoga-mat.png",
    description: "Comfortable and non-slip mat.",
    rating: 4.3,
    category: "Fitness",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 60,
    image: "/images/speaker.png",
    description: "Portable speaker with deep bass.",
    rating: 4.6,
    category: "Electronics",
  },
];
















import { deals } from "@/types/deals";
import Shoe from "../../public/slider/Shoe.jpg";
import Three from "../../public/slider/Three.jpg";
import Two from "../../public/slider/Two.jpg";

export const slides2 = [
  {
    title: "Black",
    subtitle: "FRIDAY",
    discount: "50% off",
    images: Shoe,
  },
  {
    title: "Cyber",
    subtitle: "MONDAY",
    discount: "70% off",
    images: Three,
  },
  {
    title: "Holiday",
    subtitle: "SALE",
    discount: "40% off",
    images: Two,
  },
];
