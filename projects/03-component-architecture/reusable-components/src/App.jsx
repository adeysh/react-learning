import "./App.css";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>
            <h1>Reusable Button, Card and Input Components</h1>
            <div className="btn-container">
                <Button onClick={() => alert("Clicked!")}>Click Me</Button>
                <Button variant="secondary">Secondary Button</Button>
            </div>
            <Card>
                <h2>Card Title</h2>
                <p>Some content within the card.</p>
            </Card>
            <form>
                <Input
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
        </>
    );
}

export default App;
