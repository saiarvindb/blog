import { FC, ReactNode } from "react";
import { BlogPage } from "../../components/blogPage";
import MarkdownContent from "./socials.mdx";

const Socials : FC<{}> = ({}) => 
{
	const title : string = "$ socials";
	const markdownContent : ReactNode = <MarkdownContent/>;
	const socials : ReactNode = 
	<div><BlogPage title={title} markdownContent={markdownContent}/></div>
	
	return socials;
};

export { Socials };
