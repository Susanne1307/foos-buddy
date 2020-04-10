import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
};

export const LoginButton = () => (
  <Button onClick={action('clicked')}>Login</Button>
);
export const SignUpButton = () => (
  <Button onClick={action('clicked')}>Sign Up</Button>
);
