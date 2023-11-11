export type LoadingFieldProps = { isLoading: true };

export const loadingFieldProps: LoadingFieldProps = { isLoading: true };

const isLoadingProps = (props: object): props is object & { isLoading: boolean } => 'isLoading' in props;

export const isNotLoadingProps = <P extends object>(props: object): props is P =>
	(isLoadingProps(props) && !props.isLoading) || !('isLoading' in props);
