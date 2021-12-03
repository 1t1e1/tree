import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

import PageTemp from "./PageTemp";
import { AppBar, AppBar2 } from "../components";
import Drawer from "../components/Drawer";
import { useToggle } from "../utils";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		position: "relative",
		display: "flex",
	},
	content: {
		flexGrow: 1,
		overflowY: "auto",
		backgroundColor: theme.palette.type === "dark" ? "#191919" : "#fafafa",
		padding: theme.spacing(3),
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		height: 48,
	},
}));

const routes = [
	{
		path: "/",
		component: <PageTemp name="/home" />,
		// component: lazy(() => import("./home")),
	},
	{
		path: "statistics",
		component: <PageTemp name="statistics" />,
	},
	{
		path: "comment",
		component: <PageTemp name="comment" />,
		// component: lazy(() => import("./comment")),
	},
	{
		path: "*",
		component: <PageTemp name="/joker_page" />,
		// component: lazy(() => import("./error")),
	},
];

export default function Hook() {
	const classes = useStyles();
	const _useToggle = useToggle();

	return (
		<Router>
			<AppBar {..._useToggle} />
			<Drawer {..._useToggle} />
			<h2> home page content is under appbar</h2>
			<hr />
			<div>
				NavLink:{" "}
				{routes.map((route, index) => {
					return (
						<Box key={index}>
							<span> | </span>
							<Link key={index} to={route.path}>
								Path:"{route.path}"
							</Link>
						</Box>
					);
				})}
			</div>
			<ol>
				<Routes>
					{routes.map((route, index) => {
						return <Route path={route.path} element={route.component} />;
					})}
				</Routes>
			</ol>
		</Router>
	);
}
