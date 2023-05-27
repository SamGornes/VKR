import Admin from "./pages/Admin";
import {ADMIN_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, GPS_FILE_ROUTE} from "./utils/consts"
import Auth from "./pages/Auth";
import Gps_filePage from "./pages/Gps_filePage";
import Main from "./pages/Main";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
     
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

]

export const publicRoutes = [

    {
        path: MAIN_ROUTE,
        Component: Main
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: GPS_FILE_ROUTE +'/:id',
        Component: Gps_filePage
    },

]