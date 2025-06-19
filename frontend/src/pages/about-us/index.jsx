import styles from "./AboutUs.module.css";
const AboutUs = () => {
    return (
        <div className={styles.container}>
            <h1>About the Project</h1>
            <p className={styles.text}>
                <strong>Booking Travel App</strong> is a web application that allows users to conveniently search for and book hotels in various countries around the world. The main goal is to provide a fast and user-friendly interface for finding accommodations during travel.
            </p>

            <h2>Goal</h2>
            <p className={styles.text}>
                To create a convenient service that allows users to:
                <ul className={styles.list}>
                    <li>search for hotels by destination,</li>
                    <li>view key information about each hotel (price, rating, description),</li>
                    <li>quickly get results through optimized search functionality.</li>
                </ul>
            </p>

            <h2>Technologies Used</h2>
            <ul className={styles.list}>
                <li><strong>React.js</strong> — building the user interface (SPA);</li>
                <li><strong>Vite</strong> — fast project setup and bundling;</li>
                <li><strong>React Router</strong> — routing between pages ("Home", "Hotels", "About Us");</li>
                <li><strong>Redux</strong> — application state management;</li>
                <li><strong>Redux Toolkit</strong> — simplified Redux workflow: slices, reducers, and actions;</li>
                <li><strong>Redux Thunk</strong> — handling asynchronous requests to the backend API (e.g., for hotel search).</li>
            </ul>

            <h2>Team</h2>
            <p className={styles.text}>
                The project was developed as a diploma work with a focus on modern frontend development approaches. We aimed to create not only a functional but also a user-friendly service.
            </p>
        </div>
    );
};

export default AboutUs;