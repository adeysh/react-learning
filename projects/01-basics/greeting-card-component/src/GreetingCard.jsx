import "./GreetingCard.css";

const GreetingCard = ({ greetingData }) => {
    return (
        <div className="greeting-card">
            <img
                src={greetingData.imageUrl}
                alt="Happy Birthday"
            />
            <h1>{greetingData.title}</h1>
            <p>{greetingData.message}</p>
            <div className="from">
                - <em>From {greetingData.from}</em>
            </div>
        </div>
    );
};

export default GreetingCard;
