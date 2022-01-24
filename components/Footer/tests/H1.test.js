import H1 from "../H1";
import React from "react";
import { mount } from "enzyme";

test("Footer H1 Component", () => {
  const wrapper = mount(<H1>Hello</H1>);
  expect(wrapper.find("h1").exists()).toBeTruthy();
});
