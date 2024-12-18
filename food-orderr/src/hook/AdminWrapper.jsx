/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";


const AdminWrapper = () => {
    return <div className="flex"><Outlet /></div>;
};

export default AdminWrapper;
