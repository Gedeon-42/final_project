import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SupplierDashboard from "./Supplier/SupplierDashboard";
import SupplierLayout from "./Supplier/SupplierLayout";

const router = createBrowserRouter([
    {
        path:"/supplier",
        element:<SupplierLayout/>,
        children:[
            {
                path:"/supplier/dashboard",
                element:<SupplierDashboard/>
            }
        ]
    },
    {
path:"/",
element:<Login/>

    },
    {
        path:"/register",
        element:<Register/>
    }
])

export default router