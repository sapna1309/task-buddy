import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const routes: { path: string; page: React.FC }[] = [
  { path: "/", page: Home },
  { path: "/login", page: Login },
];

const AllRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, page: Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
};

export default AllRoutes;
