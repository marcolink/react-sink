import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  condition: boolean;
}>;

const Conditional: FC<Props> = ({ condition, children }) => {
  return <>{condition ? children : null}</>;
};

export { Conditional };
