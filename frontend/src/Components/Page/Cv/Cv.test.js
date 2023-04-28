import React from "react";
import { shallow } from "enzyme";
import Cv from "./Cv";

describe("Cv", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cv />);
    expect(wrapper).toMatchSnapshot();
  });
});
