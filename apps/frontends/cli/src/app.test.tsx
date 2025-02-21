import chalk from 'chalk';
import { render } from 'ink-testing-library';
import App from './app';

it('greet unknown user', () => {
  const { lastFrame } = render(<App name={undefined} />);

  expect(lastFrame()).toBe(`Hello, ${chalk.green('Stranger')}`);
});

it('greet user with a name', () => {
  const { lastFrame } = render(<App name='Jane' />);

  expect(lastFrame()).toBe(`Hello, ${chalk.green('Jane')}`);
});
