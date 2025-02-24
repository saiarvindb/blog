import { FC, ReactNode } from "react";
import { BlogPage } from "../../components/blogPage.tsx";
import MarkdownContent from "./about.mdx";

const About : FC<{}> = ({}) => 
{
	const title : string = "$ whoami";
	const markdownContent : ReactNode = <MarkdownContent/>;
	const about : ReactNode = <div><BlogPage title={title} markdownContent={markdownContent}/></div>
	
	return about;
};

export { About };
