import type {FC, PropsWithChildren, ReactNode} from "react";

type Props = PropsWithChildren<{
    isLoading?: boolean;
    isError?: boolean;
    loadingContent?: ReactNode;
    errorContent?: ReactNode;
}>;

export const AsyncContent: FC<Props> = ({isLoading, isError, children, loadingContent, errorContent}) => {
    if (isLoading) {
        return loadingContent ? <>{loadingContent}</> : <div className={'loading-content'}>loading</div>;
    }
    if (isError) {
        return errorContent ? <>{errorContent}</> : <div className={'error-content'}>Something went wrong</div>;
    }
    return <>{children}</>;
};
