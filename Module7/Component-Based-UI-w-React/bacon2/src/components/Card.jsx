import SubCard from "./SubCard";

function Card(props) {
  console.log("Card Props", props);

  const { title, subtitle } = props;

  return (
    <>
      <h1>I am eating: {title}</h1>
      <SubCard subtitle={subtitle} />
      {/* <h2>{subtitle}</h2> */}
    </>
  );
}

export default Card;
