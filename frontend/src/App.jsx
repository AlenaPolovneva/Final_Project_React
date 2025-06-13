import { createBrowserRouter,RouterProvider } from "react-router";

import AboutUs from "./pages/about-us/index.jsx";
import Hotels from "./pages/hotels/index.jsx";

import Layout from "./components/Layout/index.jsx";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <div>Home</div>
            },
            {
                path: "about-us",
                element: <AboutUs />,
                loader: () => {console.log("Loading data"); return "My data"}
            },
            {
                path: "hotels",
                element: <Hotels />,
                loader: () => {console.log("Loading data"); return "My data"}
            },
            {
                path: "*",
                element: <div> 404 Page</div>
            }
        ]
    }
]);
function App() {

    return (<RouterProvider router={router} />)
}

export default App;