import { connect } from 'react-redux';
import { PercentageWidget, PercentageWidgetProps } from '@components/PercentageWidget';
import { StateType } from '../types/state';
import { orEmptyRedux, orLoadingField } from '@utils/react/withAlternate';
import { emptyProps, EmptyProps } from '@utils/react/Empty';
import { LoadingFieldProps } from '@utils/react/LoadingField';
import { isNotNullable } from '@utils/nullable';

export default connect(
	({ main: { data, isLoading } }: StateType): PercentageWidgetProps | EmptyProps | LoadingFieldProps =>
		isLoading && !data
			? { isLoading }
			: data && isNotNullable(data.successes) && isNotNullable(data.failures) && isNotNullable(data.unlabeled)
			? {
					successes: data?.successes,
					failures: data?.failures,
					unlabeled: data?.unlabeled,
			  }
			: emptyProps,
)(orEmptyRedux(orLoadingField(PercentageWidget)));
