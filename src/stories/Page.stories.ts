import preview from '../../.storybook/preview';

import { expect, userEvent, within } from 'storybook/test';

import { Page } from './Page';

const meta = preview.meta({
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
});

export const LoggedOut = meta.story();

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn = meta.story({
  play: async ({ canvas }) => {
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
  },
});

LoggedIn.test('it should be logged in', async ({ canvas }) => {
  const logoutButton = canvas.getByRole('button', { name: /Log out/i });
  await expect(logoutButton).toBeInTheDocument();
});

LoggedIn.test('it should log out', async ({ canvas }) => {
  const logoutButton = await canvas.findByRole('button', { name: /Log out/i });
  await expect(logoutButton).toBeInTheDocument();

  await userEvent.click(logoutButton);

  const loginButton = canvas.getByRole('button', { name: /Log in/i });
  await expect(loginButton).toBeInTheDocument();
});
