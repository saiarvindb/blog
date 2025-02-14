import { CSSProperties, FC, ReactNode } from "react"
import { useNavigate } from "react-router-dom";

const NavigationBar : FC<{}> = ({}) =>
{	
	const styles : Record<string, CSSProperties> =
	{
		navigationBar :
		{
			display: "flex",
			flexDirection: "row",
			justifyContent: "center"
		},
		button :
		{
			padding : "1%",
			border: "0",
			color: "green",
			backgroundColor: "inherit",
			cursor: "pointer"
		},
		navButton :
		{
			padding : "1%",
			border: "0",
			backgroundColor: "inherit",
		}
	};

	const NavButton : FC<{value : string, display : string}> = ({value, display}) => 
	{
		const navigate = useNavigate();
		const navButton : ReactNode =
		<div style={styles.navButton}>
			<button style={styles.button} value={value} onClick={(event) => navigate(event.currentTarget.value)}><h2>{display}</h2></button>
		</div>;
		return navButton;
	}
	

	const navigationBar : ReactNode = 
	<div style={styles.navigationBar}>
		<NavButton value="/" display="Home"/>
		<NavButton value="/socials" display="Socials"/>
		<NavButton value="/posts" display="Posts"/>
	</div>;
	return navigationBar;
}

export { NavigationBar }
