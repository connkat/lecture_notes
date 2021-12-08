
function Title(props) {
  const { titleText, titleColor } = props;
  return (
    <div className="Title">
      <h1 style={{ color: titleColor }}>{titleText}</h1>
    </div>
  );
}

export default Title;
