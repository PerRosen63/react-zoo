import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Animal } from "./pages/Animal";
import { Animals } from "./pages/Animals";

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/animals',
                element: <Animals></Animals>,
            },
            {
                path: '/animal/:id',
                element: <Animal></Animal>,
            }
        ]
    }
])