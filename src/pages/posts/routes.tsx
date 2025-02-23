import { FC, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "./posts.tsx";
import { BlogPage } from "../../components/blogPage.tsx";
import TinyTex from "./articles/tinytex.mdx";

const ArticleRoutes : FC<{}> = ({}) =>
{
	const articleRoutes : ReactNode =
	<Routes>
		<Route path="" element={<Posts/>}/>
		{/* <Route path="tinytex" element={<BlogPage title={"TinyTex"} markdownContent={<TinyTex/>}/>}/> */}
		<Route path="tinytex" element={<div>Tinytex</div>}/>
	</Routes>;
	return articleRoutes;
}

export {ArticleRoutes}
