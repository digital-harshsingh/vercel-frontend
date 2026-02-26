import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((respone) => {
        setJokes(respone.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1 className="length-jokes">
        Hello Learning how to connect frontend backend
      </h1>
      <p className="length-jokes"> The length of Jokes : {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
};

export default App;
