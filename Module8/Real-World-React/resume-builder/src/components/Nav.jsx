import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: grey;
`;

const StyledLi = styled.li`
color: ${props => props.color ? props.color : "blue"}
`

function Nav() {
  return (
    <StyledDiv>
      <ul>
        <StyledLi>
          <Link to="/">Home</Link>
        </StyledLi>
        <StyledLi color="red">
          <Link to="/contact">Contact</Link>
        </StyledLi>
        <StyledLi color="green">
          <Link to="/projects">Projects</Link>
        </StyledLi>
        <StyledLi color="purple">
          <Link to="/projects-with-input">Projects With Input</Link>
        </StyledLi>
      </ul>
    </StyledDiv>
  );
}

export default Nav;
