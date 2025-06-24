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
import DashboardLayout from "./Admin/DashboardLayout";
import Dashboard from "./Admin/Dashboard";
import AdminDeliveries from "./Admin/AdminDeliveries";
import AdminSettings from "./Admin/AdminSettings";
import AdminReport from "./Admin/AdminReport";
import AdminResult from "./Admin/AdminResult";
import AdminHelp from "./Admin/AdminHelp";
import NotFound from "./pages/NotFound";
import AdminPayment from "./Admin/AdminPayment";
import DashUsers from "./Admin/DashUsers";
import SupplierDash from "./Supplier/SupplierDash";
import App from "./App";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePasswordForm from "./pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/deliveries",
        element: <AdminDeliveries />,
      },
      {
        path: "/admin/settings",
        element: <AdminSettings />,
      },
      {
        path: "/admin/report",
        element: <AdminReport />,
      },
      {
        path: "/admin/result",
        element: <AdminResult />,
      },
      {
        path: "/admin/users",
        element: <DashUsers />,
      },
      {
        path: "/admin/help",
        element: <AdminHelp />,
      },
      {
        path: "/admin/payment",
        element: <AdminPayment />,
      },
    ],
  },

  {
    path: "/supplier",
    element: <SupplierLayout />,
    children: [
      {
        path: "/supplier/dashboard",
        element: <SupplierDashboard />,
      },

      {
        path: "/supplier/delivery",
        element: <DeliveryTracking />,
      },
      {
        path: "/supplier/result",
        element: <Result />,
      },
      {
        path: "/supplier/report",
        element: <Report />,
      },
      {
        path: "/supplier/help",
        element: <Help />,
      },
      {
        path: "/supplier/payment",
        element: <Payment />,
      },
      {
        path: "/supplier/settings",
        element: <Setting />,
      },
    ],
  },

  {
    path: "/supplier/dash",
    element: <SupplierDash />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
path:"/reset-password",
element:<ResetPassword/>
  },
    {
path:"/change-password",
element:<ChangePasswordForm/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
