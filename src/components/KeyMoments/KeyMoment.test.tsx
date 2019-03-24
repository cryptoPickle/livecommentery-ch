import React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import KeyMoments from ".";
import {TouchableOpacity} from "react-native";


describe("KeyMoments", ()=> {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<KeyMoments
      data={[{keyMoment: "KeyM", id:3, avatar: "https://api.adorable.io/avatars/285/2"}]}
      selectedId={() => {}}
    />)});

  it("should have initial state of {show:false}", () => {
    expect(wrapper.state()).toEqual({show: false})
  });
  it("should change state to true when clicking", () => {
    const comp: any = wrapper;
    comp.find(TouchableOpacity).props().onPress();
    expect(wrapper.state()).toEqual({show: true})
  })
});
