import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState<string>("Loading...");

    useEffect(() => {
        fetch("http://localhost:3000/hello")
            .then(res => res.text())
            .then(setMessage)
            .catch(() => setMessage("Error fetching message"));
    }, []);

    return (
        <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
