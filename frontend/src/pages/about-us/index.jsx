import { useLoaderData } from "react-router";

const AboutUs = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            About Us
        </div>
    )
}

export default AboutUs;