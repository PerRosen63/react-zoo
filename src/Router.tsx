import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Animal } from "./pages/Animal";
import { Animals } from "./pages/Animals";
import { Layout } from "./pages/Layout";
import { animalLoader, animalsLoader } from "./loaders/animalLoader";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/animals',
                element: <Animals></Animals>,
                loader: animalsLoader,
            },
            {
                path: '/animal/:id',
                element: <Animal></Animal>,
                loader: animalLoader,
            }
        ]
    }
])