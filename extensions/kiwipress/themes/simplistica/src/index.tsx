import { createRoot } from "react-dom/client"
import { NavLight } from "./parts/nav/light-nav";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <NavLight />
);



