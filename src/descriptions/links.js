import { HEADADMIN, ADMIN } from "../constants/roleTypes";

export const ManClothesLinks = [
  {
    title: "Jumpers, Cardigans",
    path: "/man/clothes/sweaters",
    item: "sweaters",
  },
  {
    title: "Shirts",
    path: "/man/clothes/shirts",
    item: "shirts",
  },
  {
    title: "Hoodies, sweatshirts",
    path: "/man/clothes/sweatshirts",
    item: "sweatshirts",
  },
  {
    title: "Trousers",
    path: "/man/clothes/trousers",
    item: "trousers",
  },
  {
    title: "Polo shirts",
    path: "/man/clothes/polos",
    item: "polos",
  },
  {
    title: "T-shirts",
    path: "/man/clothes/t-shirts",
    item: "t-shirts",
  },
  {
    title: "Jeans",
    path: "/man/clothes/jeans",
    item: "jeans",
  },
  {
    title: "Blazers",
    path: "/man/clothes/blazers",
    item: "blazers",
  },
  {
    title: "Suits",
    path: "/man/clothes/suits",
    item: "suits",
  },
  {
    title: "Nightwear",
    path: "/man/clothes/nightwear",
    item: "nightwear",
  },
  {
    title: "Underwear",
    path: "/man/clothes/underwear",
    item: "underwear",
  },
];

export const ManAccessoriesLinks = [
  {
    title: "Bags, toiletry bags",
    path: "/man/accessories/bags",
    item: "bags",
  },
  {
    title: "Shoes",
    path: "/man/accessories/shoes",
    item: "shoes",
  },
  {
    title: "Hats",
    path: "/man/accessories/hats",
    item: "hats",
  },
  {
    title: "Scarves",
    path: "/man/accessories/scarves",
    item: "scarves",
  },
  {
    title: "Gloves",
    path: "/man/accessories/gloves",
    item: "gloves",
  },
  {
    title: "Socks",
    path: "/man/accessories/socks",
    item: "socks",
  },
];
export const WomanClothesLinks = [
  {
    title: "Jumpers, cardigans",
    path: "/woman/clothes/sweaters",
    item: "sweaters",
  },
  {
    title: "Dresses",
    path: "/woman/clothes/dresses",
    item: "dresses",
  },
  {
    title: "Skirts",
    path: "/woman/clothes/skirts",
    item: "skirts",
  },
  {
    title: "Blouses",
    path: "/woman/clothes/blouses",
    item: "blouses",
  },
  {
    title: "Shirts",
    path: "/woman/clothes/shirts",
    item: "shirts",
  },
  {
    title: "Hoodies, sweatshirts",
    path: "/woman/clothes/sweatshirts",
    item: "sweatshirts",
  },
  {
    title: "Trousers",
    path: "/woman/clothes/trousers",
    item: "trousers",
  },
  {
    title: "T-shirts",
    path: "/woman/clothes/t-shirts",
    item: "t-shirts",
  },
  {
    title: "Jeans",
    path: "/woman/clothes/jeans",
    item: "jeans",
  },
  {
    title: "Blazers",
    path: "/woman/clothes/blazers",
    item: "blazers",
  },
  {
    title: "Nightwear",
    path: "/woman/clothes/nightwear",
    item: "nightwear",
  },
  {
    title: "Lingerie",
    path: "/woman/clothes/lingerie",
    item: "lingerie",
  },
];

export const WomanAccessoriesLinks = [
  {
    title: "Bags, toiletry bags",
    path: "/woman/accessories/bags",
    item: "bags",
  },
  {
    title: "Hats",
    path: "/woman/accessories/hats",
    item: "hats",
  },
  {
    title: "Scarves",
    path: "/woman/accessories/scarves",
    item: "scarves",
  },
  {
    title: "Gloves",
    path: "/woman/accessories/gloves",
    item: "gloves",
  },
];
export const WomanShoesLinks = [
  {
    title: "Boots",
    path: "/woman/shoes/boots",
    item: "boots",
  },
  {
    title: "Heels",
    path: "/woman/shoes/heels",
    item: "heels",
  },
  {
    title: "Flats",
    path: "/woman/shoes/flats",
    item: "flats",
  },
  {
    title: "Leather",
    path: "/woman/shoes/leather",
    item: "leather",
  },
  {
    title: "Sneakers",
    path: "/woman/shoes/sneakers",
    item: "sneakers",
  },
];

export const adminLinks = [
  {
    path: "/admin/panel/orders",
    label: "Manage Orders",
    name: "orders",
    restriction: HEADADMIN || ADMIN,
  },
  {
    path: "/admin/panel/items",
    label: "Manage Items",
    name: "items",
    restriction: HEADADMIN || ADMIN,
  },
  {
    path: "/admin/panel/users",
    label: "Manage Users",
    name: "users",
    restriction: HEADADMIN,
  },
  {
    path: "/add-item",
    label: "Add Item",
    restriction: HEADADMIN || ADMIN,
  },
];
