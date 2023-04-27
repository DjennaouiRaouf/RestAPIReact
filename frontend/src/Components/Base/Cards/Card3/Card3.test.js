import React from "react";
import { shallow } from "enzyme";
import Card3 from "./Card3";

describe("Card3", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Card3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
