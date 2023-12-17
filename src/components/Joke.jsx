import React from "react";

export default function Joke(props) {
  console.log(props);
  return (
    <>
      <h3>{props.title}</h3>
      <h3>{props.punchline}</h3>
      <hr />
    </>
  );
}
