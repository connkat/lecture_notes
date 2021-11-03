function SubCard(props) {
  const { subtitle } = props;

  return (
  <>
  <p>This is a subtitle: {subtitle}</p>;
  {/* <SuperSub title={subtitle} /> */}
  </>
  )
}

export default SubCard;
