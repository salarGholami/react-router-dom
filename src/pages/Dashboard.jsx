import { NavLink, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  // const loction = useLocation();
  // console.log(loction.state);
  
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
