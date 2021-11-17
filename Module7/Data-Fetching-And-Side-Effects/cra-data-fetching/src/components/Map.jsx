// import React from 'react';
const content = [
  { id: 1, title: "one", position: "first" },
  { id: 2, title: "two", position: "second" },
  { id: 3, title: "three", position: "third" },
];

function MapComponent(props) {
  return (
    <div className="MapComponent">
      <h1>Map </h1>
      <h2>These are our items: </h2>
      {content.map((item) => (
        <ul>
          <li>ID: {item.id}</li>
          <li>Title: {item.title}</li>
          <li>Position: {item.position}</li>
        </ul>
      ))}

      {/* <ul>
        <li>ID: {content[0].id}</li>
        <li>Title: {content[0].title}</li>
        <li>Position: {content[0].position}</li> 
      </ul>
      <br /> */}
    </div>
  );
}

export default MapComponent;
