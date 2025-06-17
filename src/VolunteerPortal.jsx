import { Outlet } from "react-router-dom";

const VolunteerPortal = () => {
  return (
    <div>
       <div className="min-h-screen flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default VolunteerPortal;