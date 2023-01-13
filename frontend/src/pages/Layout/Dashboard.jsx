import { Outlet } from "react-router-dom";
import NavP from "../../components/Navp";

function Dashboard() {
  return (
    <div className="flex">
      <NavP />
      <Outlet />
    </div>
  );
}

export default Dashboard;
