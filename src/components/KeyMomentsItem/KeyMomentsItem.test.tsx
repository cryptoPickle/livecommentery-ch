import React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import KeyMomentsItem from ".";
import {Text, Image, TouchableOpacity, View} from "react-native";




describe("KeyMomentsItem", () => {
  let wrapper: ShallowWrapper;
  let onPressEvent = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<KeyMomentsItem
      avatar="https://api.adorable.io/avatars/285/2"
      keyMoment="Key Moment"
      id="1"
      callback={onPressEvent}
    />)});
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have View, Image, TouchableOpacity and Text, ", () => {
    expect(wrapper.find(View)).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
    expect(wrapper.find(Text)).toHaveLength(1);

  });
  it("should match Avatar link", () => {
    expect(wrapper.find(Image).props().source).toEqual( { uri: 'https://api.adorable.io/avatars/285/2' })
  });
  it("should match Key Moment", () => {
    const comp: any = wrapper;
    expect(comp.find(Text).props().children).toEqual("Key Moment")
  });
  it("should call callback once", () => {
    const comp: any = wrapper;
    comp.find(TouchableOpacity).props().onPress();
    expect(onPressEvent.mock.calls.length).toEqual(1)

  })
});
