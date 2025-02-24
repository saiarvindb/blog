import ReactDOM from "react-dom/client";
import { Blog } from "./blog.tsx";

const favicon : string = new URL("./face.webp", import.meta.url).href;
const link = document.createElement("link");
link.rel = "icon";
link.href = favicon;
document.head.appendChild(link)

const root = document.createElement("div");
root.id = "blog";
root.style.width = "100%";
root.style.height = "100%";
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<Blog/>);
