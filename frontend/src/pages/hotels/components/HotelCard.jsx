import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { Card, Button, Rate } from "antd";
import Hotels from "../index.jsx";

const HotelCard = ({ hot }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/hotels/${hot.id}`);
    };

    return (
        <div>
        <Card
            title={hot.name}
            cover={
                <img
                    alt={hot.name}
                    src={hot?.imageUrl}
                    style={{ height: 200, objectFit: "cover" }}
                />
            }
        >
            <p><strong>Hotel name:</strong> {hot.name}</p>
            <p><strong>City:</strong> {hot.city}</p>
            <p><strong>Address:</strong> {hot.address}</p>
            <p><strong>Phone:</strong> {hot.phone_number ?? "None"}</p>
            <p><strong>Rating:</strong> <Rate disabled defaultValue={hot.hotel_rating} /></p>

            <Button type="primary" onClick={handleNavigate}>
                More
            </Button>
        </Card>
        </div>
    );
};

HotelCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.number,
    rating: PropTypes.string
}
export default HotelCard;
