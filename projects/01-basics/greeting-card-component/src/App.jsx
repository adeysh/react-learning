import "./App.css";
import GreetingCard from "./GreetingCard";

function App() {
    const greetingData = {
        title: "🎉 Happy Birthday! 🎂",
        message:
            "May you be gifted with life's biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.",
        from: "John",
        imageUrl: "/happy-birthday.jpg",
    };
    return <GreetingCard greetingData={greetingData} />;
}

export default App;
