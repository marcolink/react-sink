import { render, screen } from '@testing-library/react';
import { Conditional } from './Conditional';

describe('A Conditional component', () => {
  describe('with truthy condition', () => {
    it('renders children', () => {
      render(
        <Conditional condition={true}>
          <h1>rendered</h1>
        </Conditional>
      );
      expect(screen.queryByRole('heading')).toBeInTheDocument();
    });
  });
  describe('with false condition', () => {
    it("doesn't render children", () => {
      render(
        <Conditional condition={false}>
          <h1>rendered</h1>
        </Conditional>
      );
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });
  });
});
