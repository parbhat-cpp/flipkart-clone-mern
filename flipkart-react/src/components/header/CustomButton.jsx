import { Badge, Box, Button, Link, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material/';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { useSelector } from 'react-redux';

// components
import LoginDialogue from '../login/LoginDialogue';
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	margin: '0 3% 0 auto',
	'& > *': {
		marginRight: '40px !important',
		fontSize: 16,
		alignItem: 'center',
	},
	[theme.breakpoints.down('md')]: {
		display: 'block',
	}
}));

const Container = styled(Link)(({ theme }) => ({
	display: 'flex',
	textDecoration: 'none',
	color: 'inherit',
	[theme.breakpoints.down('md')]: {
		display: 'block',
	}
}));

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

function CustomButton() {

	const [open, setOpen] = useState(false);
	const [acc, setAcc] = useContext(DataContext);

	const cartDetails = useSelector(state => state.cart);
	const { cartItems } = cartDetails;

	const openDialog = () => {
		setOpen(true);
	}

	return (
		<Wrapper>
			{
				acc ? <Profile acc={acc} setAcc={setAcc} />
					: <LoginButton variant="contained" onClick={() => { openDialog() }}>Login</LoginButton>
			}
			<Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
			<Typography style={{ marginTop: 3 }}>More</Typography>
			<Container to='/cart'>
				<Badge badgeContent={cartItems?.length} color='secondary'>
					<ShoppingCart />
				</Badge>
				<Typography style={{marginLeft: 10}}>cart</Typography>
			</Container>
			<LoginDialogue open={open} setOpen={setOpen} />
		</Wrapper>
	);
}

export default CustomButton;
