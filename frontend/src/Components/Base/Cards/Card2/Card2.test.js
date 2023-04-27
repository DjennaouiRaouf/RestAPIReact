import React from "react";
import { shallow } from "enzyme";
import Card2 from "./Card2";

describe("Card2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Card2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
