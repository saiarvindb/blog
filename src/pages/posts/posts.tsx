import { FC, ReactNode } from "react";
import { BlogPage } from "../../components/blogPage";
import MarkdownContent from "./posts.mdx";

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

export { Posts };
