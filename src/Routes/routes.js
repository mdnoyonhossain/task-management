import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import Comment from "../Pages/CompletedTask/Comment";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Login from "../Pages/Login/Login";
import Details from "../Pages/MyTask/Details";
import MyTask from "../Pages/MyTask/MyTask";
import Register from "../Pages/Register/Register";
import Update from "../Pages/Update/Update";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            },
            {
                path: '/add-task',
                element: <AddTask></AddTask>
            },
            {
                path: '/my-task',
                element: <MyTask></MyTask>
            },
            {
                path: '/completed-task',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/update/:id',
                loader: ({params}) => fetch(`http://localhost:5000/taskManagement/${params.id}`),
                element: <Update></Update>
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/taskManagement/${params.id}`),
                element: <PrivateRoutes><Details></Details></PrivateRoutes>
            },
            {
                path: '/comment/:id',
                loader: ({params}) => fetch(`http://localhost:5000/taskManagement/${params.id}`),
                element: <Comment></Comment>
            },
        ]
    }
]);

export default router;