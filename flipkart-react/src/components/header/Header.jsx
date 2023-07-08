import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material/'

// components
import Search from './Search';
import CustomButton from './CustomButton';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
	background: #2874f0;
	height: 55px;
`;

const Component = styled(Link)`
	margin-left: 12%;
	line-height: 0;
	text-decoration: none;
	color: inherit;
`;

const SubHeading = styled(Typography)`
	font-size: 10px;
	font-style: italic;
`;

const PlusImg = styled('img')({
	width: 10,
	height: 10,
	marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
	margin: '0 5px 0 auto',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.down('md')]: {
		display: 'block',
	}
}))


function Header() {

	const [open, setOpen] = useState(false);

	const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
	const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const list = () => {
		return (
			<Box style={{ width: 200 }} onClick={handleClose}>
				<List>
					<ListItem>
						<CustomButton />
					</ListItem>
				</List>
			</Box>
		)
	}

	return (
		<StyledHeader>
			<Toolbar style={{ minHeight: 55 }}>
				<MenuButton style={{ color: "inherit" }} onClick={handleOpen}>
					<Menu />
				</MenuButton>

				<Drawer open={open} onClose={handleClose}>
					{list()}
				</Drawer>

				<Component to='/'>
					<img src={logoURL} style={{ width: 75 }} alt="logo" />
					<Box style={{ display: 'flex' }}>
						<SubHeading>
							Explore&nbsp;
							<Box component="span" style={{ color: 'yellow' }}>
								Plus
							</Box>
						</SubHeading>
						<PlusImg src={subURL} alt="sub-logo" />
					</Box>
				</Component>
				<Search />
				<CustomButtonWrapper>
					<CustomButton />
				</CustomButtonWrapper>
			</Toolbar>
		</StyledHeader>
	);
}

export default Header;
