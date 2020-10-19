import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const items = [
  {
    title: 'What React?',
    content: 'React is a front-end Javascript framework.',
  },
  {
    title: 'Why React',
    content: 'Why not?',
  },
  {
    title: 'How do you React?',
    content: 'Just create components',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Translate />
    </div>
  );
};
