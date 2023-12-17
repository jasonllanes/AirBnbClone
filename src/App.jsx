import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/Data";

export default function App() {
  const allData = Data.map((item, index) => {
    return <Card key={index} {...item} />;
  });
  return (
    <>
      <NavBar />
      <Hero />
      <div className="card">{allData}</div>

      {/* <Joke title="What is the churvalo?" punchline="Ambot sad" />
      <Joke title="What is the chervala?" punchline="Krenkeng sad" />
      <Joke title="What is the cherosvalo?" punchline="Karungkong sad" />
      <Joke title="What is the skeberdo?" punchline="Karambam sad" /> */}
    </>
  );
}
