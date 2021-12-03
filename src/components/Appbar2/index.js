import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { IconButton, Toolbar, AppBar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu } from "@mui/icons-material";
import { InsertLink } from "@mui/icons-material";

import Github from "./GithubIcon";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
	console.log("theme is appbar2", theme);

	return {
		appBar: {
			backgroundColor: theme.palette.type === "dark" ? "#1e1e1e" : "#ffffff",
			opacity: 0.85,
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginLeft: 12,
			marginRight: 36,
		},
		hide: {
			display: "none",
		},
		grow: {
			flexGrow: 1,
		},
		cardLink: {
			textDecoration: "none",
			color: theme.palette.type === "dark" ? "#fbfbfb" : "#1e1e1e",
		},
	};
});

/**
 * AppBarChild
 * @type {{toggle: Boolean, setToggle: Function}}
 */
AppBarChild.propTypes = {
	toggle: PropTypes.bool.isRequired,
	setToggle: PropTypes.func.isRequired,
};

function AppBarChild({ toggle, setToggle }) {
	const classes = useStyles();
	return (
		<AppBar
			position="absolute"
			className={classNames(classes.appBar, toggle && classes.appBarShift)}
		>
			<Toolbar disableGutters variant="dense">
				<IconButton
					aria-label="Open drawer"
					onClick={setToggle}
					className={classNames(classes.menuButton, toggle && classes.hide)}
				>
					<Menu />
				</IconButton>

				<Box sx={{ flexGrow: 1 }} />
				<IconButton aria-label="Blog">
					<a
						target="_blank"
						aria-label="Blog"
						rel="noopener noreferrer"
						// href={"https://valleyease.me"}
						className={classes.cardLink}
					>
						<InsertLink fontSize="small" />
					</a>
				</IconButton>
				<IconButton aria-label="Github">
					<a
						target="_blank"
						aria-label="Github"
						rel="noopener noreferrer"
						// href={"https://github.com/ValleyZw"}
						className={classes.cardLink}
					>
						<Github fontSize="small" />
					</a>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default AppBarChild;
