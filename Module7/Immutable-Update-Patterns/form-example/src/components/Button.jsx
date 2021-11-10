// import React from 'react';

function Button(props) {

  const {title, onClick, subtext } = props

  return (
    <div className="Button">
      <h3>{title}</h3>
      <button onClick={onClick}>BUTTON</button>
      <p>{subtext}</p>
    </div>
  );
}

export default Button;
