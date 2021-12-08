import styled from "styled-components";

import Nav from "../components/Nav";
import SimpleAccordion from "../components/SimpleAccordion";
import Title from "../components/Title";

const StyledP = styled.p`
  color: white;
`;

function Contact() {
  return (
    <div className="Contact">
      <Nav />
      <Title titleText="Contact" titleColor="purple" />
      {/* <StyledP>(555)555-5555</StyledP> */}
      <SimpleAccordion title="Call me!" contactInfo="Phone: 555-555-5555"/>
    </div>
  );
}

export default Contact;
