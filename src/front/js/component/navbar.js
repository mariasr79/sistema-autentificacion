import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const logout = () => {
		localStorage.removeItem("token");
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Inicio</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-primary m-1 ">Signup</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary m-1">Login</button>
					</Link>
					<Link to="/">
						<button className="btn btn-primary m-1" onClick={() => logout()}>Logout</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
