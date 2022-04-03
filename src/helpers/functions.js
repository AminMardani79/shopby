export const changeSlide = (slideCarousel, setEndIndex) => {
  let containerWidth = slideCarousel.current.sliderContainer.offsetWidth;
  if (containerWidth > 780) {
    setEndIndex(3);
  } else if (containerWidth > 600) {
    setEndIndex(4);
  } else if (containerWidth > 400) {
    setEndIndex(5);
  } else if (containerWidth > 1) {
    setEndIndex(6);
  }
};

export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
  return newTitle;
};
