import "./app.css";
import 'virtual:uno.css'
import { mount } from "svelte";
import App from "./App.svelte";

const app = mount(App, {
  target: (() => {
    const app = document.createElement("div");

    document.body.append(app);
    return app;
  })(),
});

export default app;
