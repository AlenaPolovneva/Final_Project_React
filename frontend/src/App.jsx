import { createBrowserRouter,RouterProvider } from "react-router";

import AboutUs from "./pages/about-us/index.jsx";
import Hotels from "./pages/hotels/index.jsx";
import Travel from "./pages/travel/index.jsx";

import Layout from "./components/Layout/index.jsx";
import HotelCard from "./pages/hotels/components/HotelCard.jsx";
import {hotelLoader, hotelsLoader} from "./loaders/hotelsLoader.js";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <AboutUs />
            },
            {
                path: "about-us",
                element: <AboutUs />,
                loader: () => {console.log("Loading data"); return "My data"}
            },
            {
                path: "hotels",
                element: <Hotels />,
                loader: hotelsLoader,
            },
            {
                 path: "hotel/:id",
                 element: <HotelCard />,
                 loader: hotelLoader,
            },
            {
                path: "travel",
                element: <Travel />,
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