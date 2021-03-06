import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { FooterButtonContainer, CheckButton } from '../components/FooterButton';

export default {
  title: 'Button',
  component: 'Button',
};

export const LoginButton = () => (
  <Button onClick={action('clicked')}>Login</Button>
);
export const SignUpButton = () => (
  <Button onClick={action('clicked')}>Sign Up</Button>
);
export const Safe = () => (
  <FooterButtonContainer>
    <CheckButton onClick={action('clicked')}></CheckButton>
  </FooterButtonContainer>
);
