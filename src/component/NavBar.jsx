import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {AppBar, IconButton, Button, Toolbar, Link, Box} from "@mui/material";

const NavBar = () => {
	return (
		<Box sx={{display: {xs: "none", sm: "block"}}}>
			<AppBar position="absolute">
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu">
						<header>
							<Button color="inherit" Component={Link} href="/">
								Inicio
							</Button>
							<Button color="inherit" Component={Link} href="/">
								Productos
							</Button>
							<Button color="inherit" Component={Link} href="/">
								Blog
							</Button>
							<Button color="inherit" Component={Link} href="/">
								Contacto
							</Button>

							<Button position="end" color="inherit" Component={Link} href="/">
								<ShoppingCartIcon></ShoppingCartIcon>1
							</Button>
						</header>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
