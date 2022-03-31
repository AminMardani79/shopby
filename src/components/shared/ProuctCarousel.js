import React, { createRef } from "react";
import Carousel from "react-elastic-carousel";
const ProuctCarousel = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ];
  const carousel = createRef();
  let setTime;
  return (
    <Carousel
      ref={carousel}
      itemsToShow={3}
      breakPoints={breakPoints}
      enableAutoPlay
      autoPlaySpeed={4000}
      onNextEnd={(currentItem) => {
        clearTimeout(setTime);
        if (currentItem.index + 2 === 5) {
          setTime = setTimeout(() => {
            carousel.current.goTo(0);
          }, 4000);
        }
      }}
    >
      {props.children}
    </Carousel>
  );
};

export default ProuctCarousel;
