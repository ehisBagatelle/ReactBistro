import React from "react";
import renderer from "react-test-renderer";
import { Title } from "../../../src/components/Title";

describe("Title", () => {
  it("render title with only name", () => {
    const tree = renderer.create(<Title name="title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("render title with name and icon", () => {
    const tree = renderer
      .create(
        <Title name="title" iconSource={require("../../../assets/icon.png")} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
