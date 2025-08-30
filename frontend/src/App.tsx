import {trpc} from "../trpc";

function App() {
    const helloQuery = trpc.hello.useQuery();

    if (helloQuery.isLoading) return <p>Loading...</p>;
    if (helloQuery.error) return <p>Error: {helloQuery.error.message}</p>;

    return (
        <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
            <h1>{helloQuery.data}</h1>
        </div>
    );
}

export default App;