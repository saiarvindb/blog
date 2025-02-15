import { FC, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "../posts";
import { BlogPage } from "../../../components/blogPage";
import TinyTex from "./tinytex.mdx";

const ArticleRoutes : FC<{}> = ({}) =>
{
	const articleRoutes : ReactNode =
	<Routes>
		<Route path="" element={<Posts/>}/>
		<Route path="tinytex" element={<BlogPage title={"TinyTex"} markdownContent={<TinyTex/>}/>}/>
	</Routes>;
	return articleRoutes;
}

export {ArticleRoutes}
