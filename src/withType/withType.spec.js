import withType from "./withType";
import React from 'react';
import { mount } from 'enzyme';

const mockedComponent = ({type}) => <div>Test component</div>;

describe("withType", () => {
  const TypedComponent = withType(mockedComponent);
  const withTypeComponent = mount(<TypedComponent/>);
  it("should add a type to the wrapped component", () => {
    expect(withTypeComponent.find(mockedComponent).props().type).toBe("blue");
  });
});
