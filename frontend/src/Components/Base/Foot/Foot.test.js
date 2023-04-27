import React from "react";
import { shallow } from "enzyme";
import Foot from "./Foot";

describe("Foot", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Foot />);
    expect(wrapper).toMatchSnapshot();
  });
});
