import React from 'react';
import {action} from '@storybook/addon-actions';
import Button from "../components/Button";

export default {
    title: 'Button',
    component: Button,
};

export const Text = () => <Button>I'm A Button</Button>;

export const onClick = () => (
    <Button onClick={() => {
        alert("clicked! open 'Actions' view to see the event ")
        action('clicked')
    }}>Click on Me 👆</Button>
);

export const disabled = () => (
    <Button disabled={true}>Disabled</Button>
);

