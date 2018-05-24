import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Modal from '../components/Modal';

const textParagraph = "some long and boring text nothing interesting here.";
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio tortor, iaculis vitae eros in, vestibulum posuere enim. Maecenas pulvinar pulvinar nibh, in porttitor odio tempus at.";

storiesOf('Button', module)
  .add('with text and click event', () => (
    <Button label="text" click={() => alert('you click on me')}/>
  ))
  .add('with some emoji', () => (
    <Button label="😀 😎 👍 💯"/>
  ));

storiesOf('Title', module)
  .add('title with span inside', () => (
    <Title text={() => <span>Hello from span</span>} />
  ));

storiesOf('Paragraph', module)
  .add('with text', () => (
    <Paragraph text={textParagraph} />
  ))
  .add('with some emoji', () => (
    <Paragraph text="😀 😎 👍 💯"/>
  ));

storiesOf('Modal window', module)
  .add('just modal window', () => (
    <Modal layout={() => 
      <div>
        <Title text={() => "Title for modal"}/>
        <Paragraph text={lorem}/>
        <Button label="cancel" click={() => alert('your click "cancel"')} /><Button label="continue" click={() => alert('your click "continue"')}/> 
      </div>} />
  ));

storiesOf('Modal window', module)
  .add('modal window with image title and three buttons', () => (
    <Modal layout={() => 
      <div>
        <Title text={() => <img src="./favicon.ico" />}/>
        <Button 
        label="cancel" click={() => alert('your click on "cancel"')} 
        /><Button 
        label="continue" click={() => alert('your click on "continue"')}
        /><Button 
        label="🐱‍💻🐱‍👤🐱‍👓" click={() => alert('your click on "cats"')}
        /> 
      </div>} />
  ));