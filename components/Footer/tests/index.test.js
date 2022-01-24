import Footer from "../index";
import React from "react";
import { mount } from "enzyme";

test("Footer Component", () => {
  const wrapper = mount(<Footer />);
  expect(wrapper.find("h1").exists()).toBeTruthy();
});
