import { CSSProperties, FC, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CourseRoutes } from "./pages/notes/notes.tsx";
import { NavigationBar } from "./components/navigationBar.tsx";
import { About } from "./pages/about/about.tsx";
import { Socials } from "./pages/socials/socials.tsx";
import { ArticleRoutes } from "./pages/posts/routes.tsx";

const Blog : FC<{}> = ({}) =>
{
	const styles : Record<string, CSSProperties> = 
	{
		blog :
		{
			width : "100%",
			height : "100%",
			backgroundColor : "#1e1e1e",
			fontFamily : "Noto Sans Mono, monospace",
			display : "flex",
			flexDirection : "column",
			overflowY : "auto"
		},
	}

	const blog : ReactNode = 
	<div style={styles.blog}>
		<BrowserRouter>
			<NavigationBar/>
			<Routes>
				<Route path="" element={<About/>}/>
				<Route path="socials" element={<Socials/>}/>
				<Route path="posts/*" element={<ArticleRoutes/>}/>
				<Route path="notes/*" element={<CourseRoutes/>} />
			</Routes>
		</BrowserRouter>
	</div>
	return blog;
}

export { Blog }
