document.addEventListener("DOMContentLoaded", async () => {
  await CreateSliderElements();
  AddSliderEvents();
});

async function CreateSliderElements() {
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");
  const loadingItem = document.querySelector(".loader-container");

  const { products } = await GetProducts();
  loadingItem.style.display = "none";
  document.querySelector(".slider-right-arrow").style.visibility = "visible";

  products?.forEach((product) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("content-slider-card");

    const imgItem = document.createElement("div");
    imgItem.classList.add("content-slider-card-img");
    const img = document.createElement("img");
    img.src = product.imgSrc;
    imgItem.appendChild(img);

    const cardDescItem = document.createElement("div");
    cardDescItem.classList.add("content-slider-card-desc");
    const name = document.createElement("div");
    name.classList.add("content-slider-card-desc-name");
    name.innerText = product.name;
    const price = document.createElement("div");
    price.classList.add("content-slider-card-desc-price");
    price.innerText = product.price;
    const colorOptionsItem = document.createElement("div");
    colorOptionsItem.classList.add("circle-container");
    product.colorOptions.forEach((color) => {
      if (product.color === color.value) {
        const outerCircle = document.createElement("div");
        outerCircle.classList.add("outer-circle");
        const innerCircle = document.createElement("div");
        innerCircle.classList.add(`${color.value}`, "selected-circle");

        outerCircle.appendChild(innerCircle);
        colorOptionsItem.appendChild(outerCircle);
      } else {
        const colorOption = document.createElement("div");
        colorOption.classList.add(color.value, "circle");
        colorOptionsItem.appendChild(colorOption);
      }
    });

    price.appendChild(colorOptionsItem);
    cardDescItem.appendChild(name);
    cardDescItem.appendChild(price);

    cardItem.appendChild(imgItem);
    cardItem.appendChild(cardDescItem);

    cardsContainer.appendChild(cardItem);
  });

  const container = document.querySelector(".content-slider");
  container.appendChild(cardsContainer);
}

function AddSliderEvents() {
  const sliderCardsContainer = document.querySelector(".cards-container");
  const btnPrev = document.querySelector(".slider-left-arrow");
  const btnNext = document.querySelector(".slider-right-arrow");

  let slideIndex = 0;
  const sliderChildrenLength = sliderCardsContainer.children.length;
  const slideCount = parseInt(sliderChildrenLength / 2);

  function toggleSliderBtnDisplay(index) {
    if (index === slideCount) {
      document.querySelector(".slider-right-arrow").style.visibility = "hidden";
    } else {
      document.querySelector(".slider-right-arrow").style.visibility =
        "visible";
    }
    if (index === 0) {
      document.querySelector(".slider-left-arrow").style.visibility = "hidden";
    } else {
      document.querySelector(".slider-left-arrow").style.visibility = "visible";
    }
  }

  function slideTo(index) {
    toggleSliderBtnDisplay(index);
    sliderCardsContainer.style.transform = `translateX(-${index * 30}%)`;
    slideIndex = index;
  }

  btnPrev.addEventListener("click", () => {
    if (slideIndex > 0) {
      slideTo(slideIndex - 1);
    }
  });

  btnNext.addEventListener("click", () => {
    if (slideIndex <= sliderChildrenLength + 1) {
      btnPrev.style.visibility = "visible";
      slideTo(slideIndex + 1);
    }
  });
}
