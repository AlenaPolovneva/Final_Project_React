import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, Button } from "antd";

import styles from "./Travel.module.css";
import HotelCard from "../hotels/components/HotelCard.jsx";
import { getDestinations } from "../../store/thunks/destinationsThunks.jsx";
import { getHotels } from "../../store/thunks/hotelsThunks.jsx";

const { Option } = Select;

const Travel = () => {
    const dispatch = useDispatch();
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [shouldSearch, setShouldSearch] = useState(false);

    const { destinations, loading: destLoading } = useSelector(state => state.destinations);
    const { hotels, loading: hotelsLoading } = useSelector(state => state.hotels);

    useEffect(() => {
        dispatch(getDestinations());
    }, [dispatch]);

    useEffect(() => {
        if (shouldSearch && selectedDestination) {
            dispatch(getHotels({ destinationId: selectedDestination }));
            setShouldSearch(false);
        }
    }, [shouldSearch, selectedDestination, dispatch]);

    return (
        <div className={styles.travelPage}>
            <div className={styles.controls}>
                <Select
                    placeholder="Select a destination"
                    value={selectedDestination}
                    onChange={value => setSelectedDestination(value)}
                    style={{ width: 200 }}
                    loading={destLoading}
                    allowClear
                >
                    {destinations?.map(dest => (
                        <Option key={dest.id} value={dest.id}>
                            {dest.label}
                        </Option>
                    ))}
                </Select>

                <Button
                    type="primary"
                    onClick={() => {
                        if (selectedDestination) {
                            setShouldSearch(true);
                        }
                    }}
                >
                    Search
                </Button>
            </div>

            {hotelsLoading && <div>Loading hotels...</div>}

            <div className={styles.hotelList}>
                {hotels?.map(hotel => (
                    <HotelCard key={hotel.id} hot={hotel} />
                ))}
            </div>
        </div>
    );
};

export default Travel;