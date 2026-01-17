import preview from '../../.storybook/preview';

import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = preview.meta({
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
});

export const Primary = meta.story({
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: 'red',
  },
});

export const Secondary = meta.story({
  args: {
    label: 'Button',
  },
});

export const Large = meta.story({
  args: {
    size: 'large',
    label: 'Button',
  },
});

export const Small = meta.story({
  args: {
    size: 'small',
    label: 'Button',
  },
});
