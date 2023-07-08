import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import styled from "@emotion/styled";
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")({
  width: "100%",
  height: "280px",
})

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  return (
    <div>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
      >
        {bannerData.map((data) => (
          <Image key={data.id} src={data.url} alt="banner" />
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
