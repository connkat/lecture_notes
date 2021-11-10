import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Other from "../components/Button";
import MainBody from "../components/MainBody";


storiesOf("Simple Example").add("Random Example", () => <h1>Hello</h1>);

storiesOf("Clickable Example").add("Action Example", () => (
  <button onClick={action("button-clicked")}>Clickable </button>
));

storiesOf("Button Example").add("Button Component", () => (
  <Other title="This is a button" onClick={action("button-clicked")} subtext="hi" />
));

storiesOf("Component Example").add("Component", () => (
    <MainBody />
  ));
