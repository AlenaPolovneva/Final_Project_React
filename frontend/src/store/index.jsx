import { configureStore } from "@reduxjs/toolkit";

import hotelsReducer from "./slices/hotelsSlice.jsx";
import authReducer from "./slices/authSlice.jsx"
import destinationsReducer from "./slices/destinationsSlice.jsx"

export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        auth: authReducer,
        destinations: destinationsReducer,

    }
})