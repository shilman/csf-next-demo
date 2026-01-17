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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
});
