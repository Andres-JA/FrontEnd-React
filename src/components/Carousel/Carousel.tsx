import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const sliderItems = [
  { id: 1, img: "https://via.placeholder.com/1200x400?text=Slide+1", url: "/shop" },
  { id: 2, img: "https://via.placeholder.com/1200x400?text=Slide+2", url: "/shop" },
  { id: 3, img: "https://via.placeholder.com/1200x400?text=Slide+3", url: "/shop" },
];

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<{ direction: string }>`
  width: 50px;
  height: 50px;
  background: rgba(0,0,0,0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  color: white;
  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
`;

const Wrapper = styled.div<{ slideIndex: number }>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {"<"}
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} onClick={() => navigate(item.url)}>
            <Image src={item.img} alt={`slide-${item.id}`} />
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        {">"}
      </Arrow>
    </Container>
  );
};

export default Carousel;