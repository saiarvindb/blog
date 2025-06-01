import { CSSProperties, FC, ReactNode } from "react";

const BlogPage : FC<{title : string, markdownContent : ReactNode}> = ({title, markdownContent}) =>
{
	const styles : Record<string, CSSProperties> =
	{
		h1 :
		{
			color: "yellow",
			padding: "1%"
		},
		div :
		{
			color : "cyan",
			padding: "0.5%"
		}
	}

	const blogPage : ReactNode = 
	<div>
		<h1 style={styles.h1}>{title}</h1>
		<div style={styles.div}>{markdownContent}</div>
	</div>
	return blogPage;
};

export { BlogPage };
