import React, { FC } from 'react';
import Spacer from '@ui/Spacer';
import { Item } from '@components/PercentageWidget/components/Item';

export type PercentageWidgetProps = {
	successes: number;
	failures: number;
	unlabeled: number;
};

export const PercentageWidget: FC<PercentageWidgetProps> = props => {
	const { successes, failures, unlabeled } = props;

	return (
		<Spacer gap='30px' direction='row'>
			<Spacer.Slot>
				<Item title='Успешный ответ' value={successes} count={123} color='green' />
			</Spacer.Slot>
			<Spacer.Slot>
				<Item title='Неуспешный ответ' value={failures} count={123} color='green' />
			</Spacer.Slot>
			<Spacer.Slot>
				<Item title='Не размечено' value={unlabeled} count={123} color='red' />
			</Spacer.Slot>
		</Spacer>
	);
};
