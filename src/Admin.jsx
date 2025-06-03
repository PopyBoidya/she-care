import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
    );
};

export default Admin;