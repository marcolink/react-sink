import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { ConditionalWrapper } from './ConditionalWrapper';

describe('A ConditionalWrapper component', () => {
  describe('with truthy condition', () => {
    it('renders the wrapper', () => {
      render(
        <ConditionalWrapper condition={true} wrapper={(children: ReactNode) => <h1>{children}</h1>}>
          Message
        </ConditionalWrapper>
      );
      expect(screen.getByText(/Message/).closest('h1')).toBeInTheDocument();
    });
  });
  describe('with falsy condition', () => {
    it("doesn't render the wrapper", () => {
      render(
        <ConditionalWrapper
          condition={false}
          wrapper={(children: ReactNode) => <h1>{children}</h1>}
        >
          Message
        </ConditionalWrapper>
      );
      expect(screen.getByText(/Message/).closest('h1')).not.toBeInTheDocument();
    });
  });
});
