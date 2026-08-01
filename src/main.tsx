import { createRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/sono";
import "@fontsource/im-fell-great-primer";
import "@fontsource/im-fell-great-primer/400-italic.css";
import "@fontsource/great-vibes";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
