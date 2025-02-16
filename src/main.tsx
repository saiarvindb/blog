import ReactDOM from "react-dom/client";
import { Blog } from "./blog";

const favicon : string = new URL("./face.webp", import.meta.url).href;
const link = document.createElement("link");
link.rel = "icon";
link.href = favicon;
document.head.appendChild(link)

ReactDOM.createRoot(document.body).render(<Blog/>);
