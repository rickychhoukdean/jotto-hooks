import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

const setup = () => {
  return shallow(<App />);
};

test("renders learn react link", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
