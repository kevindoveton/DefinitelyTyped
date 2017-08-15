// Type definitions for @storybook/react 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type Renderable = React.ComponentType<any> | JSX.Element;
export type RenderFunction = () => Renderable;

export type StoryDecorator = (story: RenderFunction, context: { kind: string, story: string }) => Renderable | null;

export interface Story {
    readonly kind: string;
    add(storyName: string, callback: RenderFunction): this;
    addDecorator(decorator: StoryDecorator): this;
}

export function addDecorator(decorator: StoryDecorator): void;
export function configure(fn: () => void, module: any): void;
export function setAddon(addon: object): void;
export function storiesOf(name: string, module: any): Story;
export function storiesOf<T>(name: string, module: any): Story & T;

export interface StoryObject {
    name: string;
    render: RenderFunction;
}

export interface StoryBucket {
    kind: string;
    stories: StoryObject[];
}

export function getStorybook(): StoryBucket[];
