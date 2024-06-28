import bike from "./imgs/preshow/bike1.jpg";
import speaker from "./imgs/preshow/speaker.jpeg";
import fridge from "./imgs/preshow/fridge.jpeg";


// Products
import lgFridge from "./imgs/products/lg-fridge.jpeg";
import samsungFridge from "./imgs/products/samsungFridge.jpeg";
import whirlpoolFridge from "./imgs/products/whirlpoolFridge.jpeg";

import hondaBike from "./imgs/products/hondaBike.jpeg";
import suzukiBike from "./imgs/products/suzukiBike.jpeg";
import yamahaBike from "./imgs/products/yamahaBike.jpeg";

import lgDry from "./imgs/products/lgDry.jpeg";
import samsungDry from "./imgs/products/samsungDry.jpeg";
import whirlpoolDry from "./imgs/products/whirlpoolDry.jpeg";

import yamahaGenerator from "./imgs/products/yamahaGenerator.jpeg";
import hondaGenerator from "./imgs/products/hondaGenerator.jpeg";
import generacGenerator from "./imgs/products/generacGenerator.jpeg";

import lgTV from "./imgs/products/lgTV.jpeg";
import samsungTV from "./imgs/products/samsungTV.jpeg";
import sonyTV from "./imgs/products/sonyTV.jpeg";

import dellPC from "./imgs/products/dellPC.jpeg";
import macPC from "./imgs/products/macPC.jpeg";
import hpPC from "./imgs/products/hpPC.jpeg";

import lgAir from "./imgs/products/lgAir.jpeg";
import samsungAir from "./imgs/products/samsung air conditioner.jpeg";
import daikinAir from "./imgs/products/daikinAir.jpeg";

const slides = [
  { id: 1, name: "Fridge", img: fridge, desc: "Get this and more for less!" },
  {
    id: 2,
    name: "Bike",
    img: bike,
    desc: "Ride home to your family in Style!",
  },
  { id: 3, name: "Speakers", img: speaker, desc: "Feel the tunes!" },
];

const data = [
  // Fridges
  {
    id: 1,
    name: "Samsung Refrigerator",
    category: "Fridge",
    description:
      "A high-efficiency refrigerator with smart cooling technology.",
    price: 999.99,
    img: samsungFridge,
  },
  {
    id: 2,
    name: "LG Refrigerator",
    category: "Fridge",
    description:
      "A stylish fridge with advanced cooling and energy efficiency.",
    price: 899.99,
    img: lgFridge,
  },
  {
    id: 3,
    name: "Whirlpool Refrigerator",
    category: "Fridge",
    description:
      "A spacious refrigerator with smart features and great design.",
    price: 1099.99,
    img: whirlpoolFridge,
  },

  // Motorbikes
  {
    id: 7,
    name: "Honda Motorbike",
    category: "Motorbike",
    description:
      "A powerful motorbike with a 500cc engine, perfect for long rides.",
    price: 6999.99,
    img: hondaBike,
  },
  {
    id: 8,
    name: "Yamaha Motorbike",
    category: "Motorbike",
    description:
      "A reliable motorbike with a 300cc engine, ideal for daily commutes.",
    price: 5499.99,
    img: yamahaBike,
  },
  {
    id: 9,
    name: "Suzuki Motorbike",
    category: "Motorbike",
    description:
      "A stylish motorbike with a 250cc engine and great fuel efficiency.",
    price: 4999.99,
    img: suzukiBike,
  },

  // Laundry Machines
  {
    id: 13,
    name: "LG Laundry Machine",
    category: "Laundry Machine",
    description:
      "A front-loading laundry machine with multiple wash cycles and smart technology.",
    price: 499.99,
    img: lgDry,
  },
  {
    id: 14,
    name: "Samsung Laundry Machine",
    category: "Laundry Machine",
    description:
      "A top-loading laundry machine with a large capacity and efficient wash cycles.",
    price: 549.99,
    img: samsungDry,
  },
  {
    id: 15,
    name: "Whirlpool Laundry Machine",
    category: "Laundry Machine",
    description:
      "An energy-efficient laundry machine with multiple settings and quiet operation.",
    price: 599.99,
    img: whirlpoolDry,
  },

  // Generators
  {
    id: 19,
    name: "Yamaha Generator",
    category: "Generator",
    description:
      "A reliable and fuel-efficient generator with a power output of 2000W.",
    price: 799.99,
    img: yamahaGenerator,
  },
  {
    id: 20,
    name: "Honda Generator",
    category: "Generator",
    description:
      "A portable generator with a power output of 3000W, ideal for outdoor use.",
    price: 999.99,
    img: hondaGenerator,
  },
  {
    id: 21,
    name: "Generac Generator",
    category: "Generator",
    description:
      "A heavy-duty generator with a power output of 5000W, perfect for home backup.",
    price: 1199.99,
    img: generacGenerator,
  },

  // Televisions
  {
    id: 25,
    name: "Samsung QLED TV",
    category: "Television",
    description:
      "A 55-inch QLED TV with stunning 4K resolution and smart features.",
    price: 799.99,
    img: samsungTV,
  },
  {
    id: 26,
    name: "LG OLED TV",
    category: "Television",
    description: "A 55-inch OLED TV with deep blacks and vibrant colors.",
    price: 1399.99,
    img: lgTV,
  },
  {
    id: 27,
    name: "Sony Bravia TV",
    category: "Television",
    description:
      "A 65-inch 4K HDR TV with stunning picture quality and Android TV.",
    price: 1299.99,
    img: sonyTV,
  },

  // Laptops
  {
    id: 31,
    name: "Dell Inspiron Laptop",
    category: "Laptop",
    description:
      "A high-performance laptop with an Intel i7 processor and 16GB RAM.",
    price: 899.99,
    img: dellPC,
  },
  {
    id: 32,
    name: "MacBook Pro",
    category: "Laptop",
    description:
      "A sleek and powerful laptop with an M1 chip and Retina display.",
    price: 1299.99,
    img: macPC,
  },
  {
    id: 33,
    name: "HP Spectre x360",
    category: "Laptop",
    description:
      "A convertible laptop with a 4K touch display and long battery life.",
    price: 1199.99,
    img: hpPC,
  },

  // Air Conditioners
  {
    id: 49,
    name: "Daikin Air Conditioner",
    category: "Air Conditioner",
    description:
      "A high-efficiency air conditioner with smart cooling and low noise.",
    price: 399.99,
    img: daikinAir,
  },
  {
    id: 50,
    name: "LG Air Conditioner",
    category: "Air Conditioner",
    description:
      "A compact air conditioner with powerful cooling and energy efficiency.",
    price: 349.99,
    img: lgAir,
  },

  {
    id: 54,
    name: "Samsung Air Conditioner",
    category: "Air Conditioner",
    description:
      "An air conditioner with digital inverter technology and fast cooling.",
    price: 399.99,
    img:  samsungAir ,
  },
];

export default { data, slides };

// export default slides;
