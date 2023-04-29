const products = [
  {
    imgSrc: "assets/product1.svg",
    name: "365 Signature Hoodie",
    price: "€ 33.95",
    color: "blue",
    colorOptions: [
      { value: "blue" },
      { value: "pink" },
      { value: "purple" },
      { value: "green" },
    ],
  },
  {
    imgSrc: "assets/product2.svg",
    name: "Organic Skinny High Waist Jeans",
    price: "€33.95",
    color: "pink",
    colorOptions: [{ value: "blue" }, { value: "pink" }],
  },
  {
    imgSrc: "assets/product3.svg",
    name: "365 Signature Hoodie",
    price: "€33.95",
    color: "green",
    colorOptions: [
      { value: "blue" },
      { value: "pink" },
      { value: "purple" },
      { value: "green" },
    ],
  },
  {
    imgSrc: "assets/product1.svg",
    name: "365 Signature Hoodie",
    price: "Â€ 33.95",
    color: "blue",
    colorOptions: [
      { value: "blue" },
      { value: "pink" },
      { value: "purple" },
      { value: "green" },
    ],
  },
  {
    imgSrc: "assets/product2.svg",
    name: "Organic Skinny High Waist Jeans",
    price: "€33.95",
    color: "pink",
    colorOptions: [{ value: "blue" }, { value: "pink" }],
  },
  {
    imgSrc: "assets/product3.svg",
    name: "365 Signature Hoodie",
    price: "€33.95",
    color: "green",
    colorOptions: [
      { value: "blue" },
      { value: "pink" },
      { value: "purple" },
      { value: "green" },
    ],
  },

  {
    imgSrc: "assets/product2.svg",
    name: "Organic Skinny High Waist Jeans",
    price: "€33.95",
    color: "pink",
    colorOptions: [{ value: "blue" }, { value: "pink" }],
  },
];
function GetProducts() {
  //simulateAPICall
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ products });
    }, 1000);
  });
}
