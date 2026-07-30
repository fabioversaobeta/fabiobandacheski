import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "@fontsource-variable/inter";
import "./index.css";

export const createRoot = ViteReactSSG(
  { routes },
  ({ router }) => {
    if (import.meta.hot) {
      import.meta.hot.accept();
    }
    void router;
  }
);
