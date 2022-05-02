import { render, screen } from '@testing-library/react';

import { Users } from './Users';

const delay = (ms: number) => 
  new Promise( resolve => setTimeout(resolve, ms) );

describe('users page', async () => {
  test('can show users', async () => {
    render(<Users/>);

    // Wait for the component to load data (using Mock Service Worker) and display the users in a list.
    await delay(100);

    const items = await screen.findAllByRole('listitem');

    expect(items.length).toBe(3);
  });
});
