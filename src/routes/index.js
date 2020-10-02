import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import About from "../pages/About";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// Routes to render.
const routes = {
  "/": Home,
  "/:id": Character,
  "/about": About,
  "/contact": "Contact",
};

// Render. Show elements according user actions.
const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
