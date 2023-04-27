import React from "react";
import { shallow } from "enzyme";
import TimeLine from "./TimeLine";

describe("TimeLine", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TimeLine />);
    expect(wrapper).toMatchSnapshot();
  });
});
