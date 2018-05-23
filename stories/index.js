import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Img from '../components/Img';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')} label="text" />
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} label="😀 😎 👍 💯"/>
  ));

storiesOf('Img', module)
  .add('just image', () => (
    <Img />
  ));