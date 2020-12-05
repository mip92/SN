import React from 'react';
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe ('ProfileStatus component', ()=>{
    test('status from props should be in the state', ()=>{
        const component=create (<ProfileStatus status ="я крокодил, крокожу и буду крокодить"/>);
        const instance = component.getInstance();
        expect (instance.state.status).toBe('я крокодил, крокожу и буду крокодить');
    });

    test('after creation span should be displayed', ()=>{
        const component=create (<ProfileStatus status ="я крокодил, крокожу и буду крокодить"/>);
        const root=component.root;
        let span = root.findByType('span');
        expect (span).not.toBeNull();
    });

    test('after creation span should contains correct status', ()=>{
        const component=create (<ProfileStatus status ="я крокодил, крокожу и буду крокодить"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect (span.props.children).toBe("я крокодил, крокожу и буду крокодить");
    });

    test('after creation input shouldn`t be displayed', ()=>{
        const component=create (<ProfileStatus status ="я крокодил, крокожу и буду крокодить"/>);
        const root=component.root;

        expect (()=>{
            let input = root.findByType('input');
        }).toThrow();
    });

    test('input should be displayed in editMode instead of spam', ()=>{
        const component=create (<ProfileStatus status ="я крокодил, крокожу и буду крокодить"/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick()
        let input = root.findByType('input');
        expect (input.props.children).toBe("я крокодил, крокожу и буду крокодить");
    });

    test('callback should be called', ()=>{
        const mockCallback=jest.fn();
        const component=create (<ProfileStatus status ="я крокодил, крокожу и буду крокодить" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect (mockCallback.mock.calls.length).toBe(1);
    });
});
