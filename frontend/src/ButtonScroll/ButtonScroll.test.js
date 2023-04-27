import React from "react";
import { shallow } from "enzyme";
import ButtonScroll from "./ButtonScroll";

describe("ButtonScroll", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ButtonScroll />);
    expect(wrapper).toMatchSnapshot();
  });
});
