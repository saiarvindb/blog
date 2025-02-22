import { FC, ReactNode } from "react";
import { BlogPage } from "../../components/blogPage";
import MarkdownContent from "./posts.mdx";
import { Route, Routes } from "react-router-dom";
import TinyTex from "./articles/tinytex.mdx";

const Posts : FC<{}> = ({}) => 
{
	const title : string = "$ posts";
	const markdownContent : ReactNode = <MarkdownContent/>;
	const posts : ReactNode = 
	<div>
		<BlogPage title={title} markdownContent={markdownContent}/>
	</div>
	return posts;
};

const ArticleRoutes : FC<{}> = ({}) =>
{
	const articleRoutes : ReactNode =
	<Routes>
		<Route path="" element={<Posts/>}/>
		<Route path="tinytex" element={<BlogPage title={"TinyTex"} markdownContent={<TinyTex/>}/>}/>
	</Routes>;
	return articleRoutes;
};


export { Posts, ArticleRoutes };
