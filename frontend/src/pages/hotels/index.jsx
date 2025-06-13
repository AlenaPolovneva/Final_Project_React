import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getHotels } from "../../store/thunks/hotelsThunks.jsx";

import HotelCard from "./components/HotelCard.jsx";

import { Select, Input } from "antd";
import styles from "./Hotels.module.css";
//import BonusesImg from "../../assets/icon/phone.svg";
const { Option } = Select;

const Hotels = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch ();

    const { destinations, error, loading } = useSelector(state => state.destinations);
    const { hotels, error: hotelsError, loading:hotelsLoading } = useSelector(state => state.hotels);

    useEffect(() => {
        if(selectedCity) {
            dispatch(getHotels ({destinationId: selectedCity, query: searchQuery}))
        }
    }, [selectedCity, searchQuery]);

    return (
        <div className={styles.wrapper}>
           <div className={styles.controls}>
               <Select
                   placeholder="Choose the city"
                   onChange={(value) => {setSelectedCity(value)}}
               >
                   {destinations?.map(city => (
                       <Option key={city.id} value={city.id}>
                           {city.label}
                       </Option>
                   ))}
               </Select>

               <Input
                   placeholder="Search hotel..."
                   value={searchQuery}
                   onChange={e => {setSearchQuery(e.target.value)}}
               />
           </div>

            {(loading && hotelsLoading) && <div>Loading...</div>}

            <div className={styles.hotelList}>
                {hotels?.map(hot => (
                   <HotelCard key={ hot.id} hot={hot}/>
                ))}
            </div>
        </div>
    )
}

export default Hotels;