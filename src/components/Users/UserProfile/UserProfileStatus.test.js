import React from "react";
import { create } from "react-test-renderer";
import UserProfileStatus from "./UserProfileStatus";


describe("UserProfileStatus component", () => {
    test("Status from the props should be in state", () => {
        const component = create(<UserProfileStatus status="SocialNetwork for runners" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SocialNetwork for runners");
    });
    test("Span should be display", () => {
        const component = create(<UserProfileStatus status="SocialNetwork for runners" />);
        const root = component.root;
         let span = root.findByType("span");
        expect(span.length).not.toBeNull();
    });
    test("Input should not be display", () => {
        const component = create(<UserProfileStatus status="SocialNetwork for runners" />);
        const root = component.root;
        expect(()=>{root.findByType("input")}).toThrow()
    });
    test("Span status should be correct", () => {
        const component = create(<UserProfileStatus status="SocialNetwork for runners" />);
        const root = component.root;
         let span = root.findByType("span");
        expect(span.children[0]).toBe("SocialNetwork for runners");
    });
    test("Input should not be display in edit mode", () => {
        const component = create(<UserProfileStatus status="SocialNetwork for runners"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick()
        let input = root.findByType("input");
        expect(input.props.value).toBe("SocialNetwork for runners");
    });
    test("callback should be called", () => {
        const mockCallBack=jest.fn()
        const component = create(<UserProfileStatus status="SocialNetwork for runners"
        updateProfileStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivatedEditNode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});