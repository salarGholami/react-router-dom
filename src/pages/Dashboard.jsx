import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="payments">payments</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
