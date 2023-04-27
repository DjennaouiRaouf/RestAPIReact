import React from "react";
import { shallow } from "enzyme";
import Card1 from "./Card1";

describe("Card1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Card1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
