import { useNavigate} from "react-router";
import { Card, Button } from "antd";

const HotelCard = ({ hot }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/hotels/${hot.id}`);
    }
    return (
       <Card
         title={hot.title}
         cover={<img alt={hot.title} src={hot?.imageUrl} />}
     >
           <p><strong>Hotel name:</strong>{hot.name}</p>
           <p><strong>Hotel rating:</strong>{hot?.rating}</p>
           <p><strong>Hotel address:</strong>{hot.address}</p>
           <p><strong>Hotel number:</strong>{hot.number}</p>

           <Button type="primery" onClick={handleNavigate}>More</Button>
     </Card>
    )
}
export default HotelCard;