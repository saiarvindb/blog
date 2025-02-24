import { FC, ReactNode } from "react";
import { BlogPage } from "../../components/blogPage.tsx";
import MarkdownContent from "./notes.mdx";
import { Route, Routes } from "react-router-dom";
import CO367 from "./courses/co/co367.mdx";
import CO487 from "./courses/co/co487.mdx";

const Notes : FC<{}> = ({}) =>
{
	const title : string = "$ notes";
	const markdownContent : ReactNode = <MarkdownContent/>;

	const notes : ReactNode =
	<div>
		<BlogPage title={title} markdownContent={markdownContent}/>
	</div>;
	return notes;
};

const CourseRoutes : FC<{}> = ({}) =>
{
	const courseRoutes : ReactNode =
	<Routes>
		<Route path="" element={<Notes/>}/>
		<Route path="co367" element={<BlogPage title={"Nonlinear Optimization"} markdownContent={<CO367/>}/>}/>
		<Route path="co487" element={<BlogPage title={"Applied Cryptography"} markdownContent={<CO487/>}/>}/>
	</Routes>;
	return courseRoutes;
};

export { Notes, CourseRoutes }
