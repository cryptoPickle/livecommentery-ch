import React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import KeyMoments from ".";
import {Text, Image, TouchableOpacity, View} from "react-native";


describe("KeyMoments", ()=> {
  let wrapper: ShallowWrapper;
  let onPressEvent = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<KeyMoments
      data={[{keyMoment: "KeyM", id:"1", avatar: "https://api.adorable.io/avatars/285/2"}]}
    />)});

  it("should have initial state of {show:false}", () => {
    expect(wrapper.state()).toEqual({show: false})
  });
  it("should change state to true when clicking", () => {
    const comp: any = wrapper;
    comp.find(TouchableOpacity).props().onPress();
    expect(wrapper.state()).toEqual({show: true})
  })
})
