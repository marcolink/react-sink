import type { FC, PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
}>;

const ConditionalWrapper: FC<Props> = ({ condition, wrapper, children }) => {
  return <>{condition ? wrapper(children) : children}</>;
};

export { ConditionalWrapper };
