import preview from "../../.storybook/preview";

import { fn } from 'storybook/test';

import { Header } from './Header';

const meta = preview.meta({
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
});

export const LoggedIn = meta.story({
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
});

export const LoggedOut = meta.story();
