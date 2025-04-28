import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SupplierDashboard from "./Supplier/SupplierDashboard";
import SupplierLayout from "./Supplier/SupplierLayout";
import DeliveryTracking from "./Supplier/DeliveryTracking";
import Result from "./Supplier/Result";
import Report from "./Supplier/Report";
import Help from "./Supplier/Help";
import Payment from "./Supplier/Payment";
import Setting from "./Supplier/Setting";

const router = createBrowserRouter([
    {
        path:"/supplier",
        element:<SupplierLayout/>,
        children:[
            {
                path:"/supplier/dashboard",
                element:<SupplierDashboard/>
            },
            {
                path:"/supplier/delivery",
                element:<DeliveryTracking/>
            },
            {
                path:"/supplier/result",
                element:<Result/>
            },
            {
                path:"/supplier/report",
                element:<Report/>
            },
            {
                path:"/supplier/help",
                element:<Help/>
            },
            {
                path:"/supplier/payment",
                element:<Payment/>
            },
            {
                path:"/supplier/settings",
                element:<Setting/>
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