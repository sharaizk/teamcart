import ShoeImage from "../assets/images/mock_products/shoe.png";
import chairImage from "../assets/images/mock_products/chair.png";

import watchImage from "../assets/images/mock_products/watch.png";
import bagImage from "../assets/images/mock_products/bag.png";

import ShoeImage1 from "../assets/images/mock_products/shoe_1.webp";
import ShoeImage2 from "../assets/images/mock_products/shoe_2.webp";
import ShoeImage3 from "../assets/images/mock_products/shoe_3.webp";
import ShoeImage4 from "../assets/images/mock_products/shoe_4.webp";
import ShoeImage5 from "../assets/images/mock_products/shoe_5.webp";
import Avatar from "../assets/images/mock_products/user.png";

export const products = [
  {
    id: 1,
    title: "Mens Flannel Shoe",
    discount: 60,
    realPrice: 2871,
    discountedPrice: 2380,
    delivered: 24,
    totalAvailable: 30,
    image: ShoeImage,
    time: "48:32:00",
    seller: {
      name: "Machsane Hashmal",
      is_online: 0,
      avatar: Avatar,
    },
    status: 1,
  },
  {
    id: 2,
    title: "Mens Flannel Shirt",
    discount: 60,
    realPrice: 2871,
    discountedPrice: 2380,
    delivered: 24,
    totalAvailable: 30,
    image: chairImage,
    time: "48:32:00",
    seller: {
      name: "Machsane Hashmal",
      is_online: 0,
      avatar: Avatar,
    },
    status: 0,
  },

  {
    id: 3,
    title: "Mens Flannel Shirt",
    discount: 60,
    realPrice: 2871,
    discountedPrice: 2380,
    delivered: 24,
    totalAvailable: 30,
    image: watchImage,
    seller: {
      name: "Machsane Hashmal",
      is_online: 0,
      avatar: Avatar,
    },
    time: "48:32:00",
    status: 2,
  },

  {
    id: 4,
    title: "Mens Flannel Shirt",
    discount: 60,
    realPrice: 2871,
    discountedPrice: 2380,
    delivered: 24,
    totalAvailable: 30,
    time: "48:32:00",
    image: bagImage,
    seller: {
      name: "Machsane Hashmal",
      is_online: 0,
      avatar: Avatar,
    },
    status: 3,
  },

  {
    id: 5,
    title: "Mens Flannel Shirt",
    discount: 60,
    realPrice: 2871,
    discountedPrice: 2380,
    delivered: 24,
    totalAvailable: 30,
    time: "48:32:00",
    image: bagImage,
    seller: {
      name: "Machsane Hashmal",
      is_online: 0,
      avatar: Avatar,
    },
    status: 4,
  },
];

export const product_detail = {
  title: "Dyson slim detect - V12",
  discount: 60,
  time: "48:32:00",
  realPrice: 2871,
  discountedPrice: 2380,
  images: [ShoeImage1, ShoeImage2, ShoeImage3, ShoeImage4, ShoeImage5],
  delivered: 50,
  totalAvailable: 100,
  colors: ["#D9CCCE", "#4D4A5D", "#222222", "#FFFFFF"],
  description:
    "תרמיל מרווח מהמומחים לתיקים יומיומיים ב-Herschel Supply Co., כולל בד קנבס עמיד וגוון כחול-בהיר שמרגיש בדיוק מתאים לקיץ.",

  seller: {
    name: "Machsane Hashmal",
    is_online: 0,
    avatar: Avatar,
  },

  similar_products: [
    {
      id: 1,
      title: "Mens Flannel Shirt",
      discount: 60,
      realPrice: 2871,
      discountedPrice: 2380,
      delivered: 24,
      totalAvailable: 30,
      image: ShoeImage,
      time: "48:32:00",
    },
    {
      id: 2,
      title: "Mens Flannel Shirt",
      discount: 60,
      realPrice: 2871,
      discountedPrice: 2380,
      delivered: 24,
      totalAvailable: 30,
      image: chairImage,
      time: "48:32:00",
    },
  ],
};
