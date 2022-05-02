import { server } from './mocks/server';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// https://github.com/testing-library/react-testing-library/issues/509#issuecomment-917989936
// globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that added during the tests so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
