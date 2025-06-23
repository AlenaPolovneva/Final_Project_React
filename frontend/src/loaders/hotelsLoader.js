import { store } from "../store/index.jsx";
import { getDestinations } from "../store/thunks/destinationsThunks.jsx";

const API_URL = "http://localhost:4000";

export async function hotelsLoader () {
    await store.dispatch(getDestinations());
    return null;
}
export async function hotelLoader ({ params }){
    try {
        const res = await fetch (`${API_URL}/hotels/${params.id}`);
        if (!res.ok) {
            throw new Error ("Cannot get hotel!")
        }
        return res.json();
    } catch (e) {
        return e.message;
    }
}