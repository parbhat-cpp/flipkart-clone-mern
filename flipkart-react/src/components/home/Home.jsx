import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

function Home() {

  const dispatch = useDispatch();

  const { products } = useSelector(state => state.getProducts);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <MidSlide products={products} title="Deal of the day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggesting items" timer={false} />
        <Slide products={products} title="Top selection" timer={false} />
        <Slide products={products} title="Accessories" timer={false} />
        <Slide products={products} title="Recommended items" timer={false} />
        <Slide products={products} title="trending items" timer={false} />
        <Slide products={products} title="Season's top" timer={false} />
        <Slide products={products} title="Top deal on accessories" timer={false} />
      </Container>
    </>
  );
}

export default Home;
