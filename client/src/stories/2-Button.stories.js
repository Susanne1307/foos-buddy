import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
};

export const Default = () => (
  <Button width="280px" height="66px" onClick={action('clicked')}>
    Login
  </Button>
);
