import { connect } from 'react-redux';
import { StateType } from '../types/state';
import { orEmptyRedux, orLoadingField } from '@utils/react/withAlternate';
import { emptyProps, EmptyProps } from '@utils/react/Empty';
import { LoadingFieldProps } from '@utils/react/LoadingField';
import { isNotNullable } from '@utils/nullable';
import { RequestsWidget, RequestsWidgetProps } from '@components/RequestsWidget';

export default connect(
	({ requests: { data, isLoading } }: StateType): RequestsWidgetProps | EmptyProps | LoadingFieldProps =>
		isLoading && !data
			? { isLoading }
			: data && isNotNullable(data.requests) && isNotNullable(data.quantity)
			? {
					requests: data?.requests,
					quantity: data?.quantity,
			  }
			: emptyProps,
)(orEmptyRedux(orLoadingField(RequestsWidget)));
