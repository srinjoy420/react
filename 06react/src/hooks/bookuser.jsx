import { useState, useEffect } from "react";

export function JokeGenerator() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setJokes(Array.isArray(data.data) ? data.data : []); // Defensive fallback
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Could not fetch jokes");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading jokes...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Science Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.content}</li>
        ))}
      </ul>
    </div>
  );
}
