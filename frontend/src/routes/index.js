import Home from "../pages/Home";
import Story from "../pages/Story"
import Read from "../pages/Read";
import Information from "../pages/Information";

import { ReadLayout } from "../components/Layout";

// Routes will be used in public environment
const publicRoutes = [
  { path: "/", component: Home,},
  { path: "/stories/:domain/:name", component: Story},
  { path: "/read/:name/:id", component: Read, layout: ReadLayout },
  { path: "/information", component: Information, layout: null },
];

// Routes will be used in private environment
const privateRoutes = [];
export { publicRoutes, privateRoutes };
