import React from "react";
import {AppBar, Button, Toolbar, Link, Typography} from "@mui/material";
import CartWidget from "./CartWidget";
import '../App.css';

const NavBar = () => {
	return (
		<header>
			<AppBar position="static">
				<Toolbar size="large" edge="start">
					<Typography variant="h5" noWrap>
						TOMarket
					</Typography>

					<Button color="inherit" component={Link} href="/">
						Inicio
					</Button>
					<Button color="inherit" component={Link} href="/">
						Productos
					</Button>
					<Button color="inherit" component={Link} href="/">
						Blog
					</Button>
					<Button color="inherit" component={Link} href="/">
						Contacto
					</Button>
					<CartWidget />
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default NavBar;
