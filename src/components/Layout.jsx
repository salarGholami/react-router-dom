import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function Layout() {
  return (
    <div>
      <AppNav />
      <Outlet />
      <footer style={{ marginTop: "5rem" }}>this is footer page</footer>
    </div>
  );
}

export default Layout;
