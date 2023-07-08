import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`;

const Image = styled('img')({
    padding: '15%',

});

const StyleButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 2px;
`;

function ActionItems({ product }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate("/cart");
    }

    return (
        <LeftContainer>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid  #f0f0f0',
                width: '90%'
            }}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyleButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart />Add to cart</StyleButton>
            <StyleButton variant="contained" style={{ background: '#fb541b' }}><Flash />Buy now</StyleButton>
        </LeftContainer>
    )
}

export default ActionItems;