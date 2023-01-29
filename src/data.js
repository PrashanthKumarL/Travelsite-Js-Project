import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#Home", text: "home" },

  { id: 2, href: "#about", text: "about" },

  { id: 3, href: "#services", text: "services" },

  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },

  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },

  { id: 1, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const serviceInfo = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tourList = [
  {
    id: 1,
    img: img1,
    date: "august 26th, 2023",
    title: "Tibest Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "China",
    days: "6 Days",
    price: "from 21000",
  },
  {
    id: 2,
    img: img2,
    date: "October 2th, 2023",
    title: "Best Of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "Indonesia",
    days: "11 Days",
    price: "From 40000",
  },
  {
    id: 3,
    img: img3,
    date: "June 6th, 2023",
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "Hong Kong",
    days: "8 Days",
    price: "from 100000",
  },
  {
    id: 4,
    img: img4,
    date: "September 16th, 2023",
    title: "kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "kenya",
    days: "20 Days",
    price: "from 80000",
  },
];
