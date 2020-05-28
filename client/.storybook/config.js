import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';
import StoryRouter from 'storybook-react-router';

addDecorator(themeDecorator);
addDecorator(StoryRouter());
