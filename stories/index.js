import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Modal from '../components/Modal';

import Img from '../components/Img';

const textParagraph = "some long and boring text nothing interesting here.";

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')} label="text" />
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} label="😀 😎 👍 💯"/>
  ));

storiesOf('Title', module)
  .add('with img', () => (
    <Title onClick={action('clicked')} Text={Img} />
  ));

storiesOf('Paragraph', module)
  .add('with text', () => (
    <Paragraph onClick={action('clicked')} text={textParagraph} />
  ))
  .add('with some emoji', () => (
    <Paragraph onClick={action('clicked')} text="😀 😎 👍 💯"/>
  ));

storiesOf('Modal window', module)
  .add('just modal window', () => (
    <Modal />
  ));



// storiesOf('Img', module)
//   .add('just image', () => (
//     <Img />
//   ));