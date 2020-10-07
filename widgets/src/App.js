import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What React?',
    content: 'React is a front-end Javascript framework.'
  },
  {
    title: 'Why React',
    content: 'Why not?'
  },
  {
    title: 'How do you React?',
    content: 'Just create components'
  }
]

export default () => {
  return (
  <div>
    {/* <Accordion items={items} /> */}
    <Search />
  </div>
  );
};