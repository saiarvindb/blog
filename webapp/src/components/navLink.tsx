import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const NavLink : FC<{to: string, children: ReactNode}> = ({to, children}) =>
{
	const navLink : ReactNode = <Link to={to} style={{color: "inherit"}}>{children}</Link>;
	return navLink;
};

export {NavLink}
