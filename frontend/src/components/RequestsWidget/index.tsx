import React, { FC, useCallback, useState } from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import Spacer from '@ui/Spacer';
import { TitleComponent } from '@ui/TitleComponent';
import { HeaderComponent } from '@components/RequestsWidget/HeaderComponent';
import { MarkupStatus } from '@components/RequestsWidget/MarkupStatus';
import { EmotionalGradation } from '@components/RequestsWidget/EmotionalGradation/indesx';
import { SingleRequestWidget } from '@components/SingleRequestWidget';
import PercentageWidget from '@containers/percentage-widget';

type Request = {
	datetime: string;
	number: string;
	reason: string;
	markup_status: 0 | 1 | 2;
	emotional_gradation: 0 | 1 | 2;
	additional_offer_possibility: boolean;
	stop_themes: string;
	comment?: string;
};

export type RequestsWidgetProps = {
	quantity: number;
	requests: Request[];
};

const columnHelper = createColumnHelper<Request>();

const columns = [
	columnHelper.accessor('datetime', {
		id: 'datetime',
		header: context => <HeaderComponent title='Дата' header={context.header} spaceRight='35px' />,
		cell: info => {
			const datetime = new Date(info.getValue());

			const day = datetime.getDay();
			const month = datetime.getMonth();
			const year = datetime.getFullYear().toString().slice(-2);

			const hours = datetime.getHours();
			const minutes = datetime.getMinutes();
			const seconds = datetime.getSeconds();

			return (
				<Spacer padding='0 34px 0 0' alignItems='flex-start' minWidth='70px' fullWidth>
					<span style={{ fontWeight: 'bold' }}>{`${day}.${month}.${year} —`}</span>
					<span>{`${hours}:${minutes}:${seconds}`}</span>
				</Spacer>
			);
		},
	}),
	columnHelper.accessor('number', {
		id: 'number',
		header: context => <HeaderComponent title='Номер&nbsp;обращения' header={context.header} spaceRight='35px' />,
		cell: info => (
			<Spacer alignItems='flex-start' padding='0 56px 0 0' minWidth='150px' fullWidth>
				{info.getValue()}
			</Spacer>
		),
	}),
	columnHelper.accessor('reason', {
		id: 'reason',
		header: context => <HeaderComponent title='Причина&nbsp;обращения' header={context.header} spaceRight='35px' />,
		cell: info => (
			<Spacer alignItems='flex-start' padding='0 68px 0 0' minWidth='225px' fullWidth>
				{info.getValue()}
			</Spacer>
		),
	}),
	columnHelper.accessor('markup_status', {
		id: 'markup_status',
		header: context => (
			<HeaderComponent title='Статус&nbsp;разметки&nbsp;ответов' header={context.header} spaceRight='35px' />
		),
		cell: info => (
			<Spacer alignItems='flex-start' padding='0 50px 0 0' minWidth='150px' fullWidth>
				<MarkupStatus status={info.getValue()} />
			</Spacer>
		),
	}),
	columnHelper.accessor('emotional_gradation', {
		id: 'emotional_gradation',
		header: context => (
			<HeaderComponent
				title='Реакция'
				header={context.header}
				alignItems='center'
				spaceLeft='17px'
				spaceRight='17px'
			/>
		),
		cell: info => (
			<Spacer alignItems='center' padding='0 22px 0 0' minWidth='30px' fullWidth>
				<EmotionalGradation status={info.getValue()} />
			</Spacer>
		),
	}),
	columnHelper.accessor('additional_offer_possibility', {
		id: 'additional_offer_possibility',
		header: context => (
			<HeaderComponent title='Предложение' header={context.header} spaceLeft='17px' spaceRight='17px' />
		),
		cell: info => (
			<Spacer alignItems='center' padding='0 20px 0 0' minWidth='50px' fullWidth>
				{info.getValue() ? (
					<Spacer padding='6px 12px' width='45px' borderRadius='21px' backgroundColor='#E3F4E8'>
						Да
					</Spacer>
				) : (
					<Spacer padding='6px 12px' width='45px' borderRadius='21px' backgroundColor='#FFE3E7'>
						Нет
					</Spacer>
				)}
			</Spacer>
		),
	}),
	columnHelper.accessor('stop_themes', {
		id: 'stop_themes',
		header: context => <HeaderComponent title='Стоп-темы' header={context.header} spaceRight='35px' />,
		cell: info => (
			<Spacer alignItems='flex-start' padding='0 34px 0 0' minWidth='70px' maxWidth='70px' fullWidth>
				{info.getValue()}
			</Spacer>
		),
	}),
	columnHelper.accessor('comment', {
		id: 'comment',
		header: context => <HeaderComponent title='Комментарий' header={context.header} spaceRight='35px' />,
		cell: info => (
			<Spacer alignItems='flex-start' minWidth='170px' maxWidth='170px' fullWidth>
				{info.getValue() ?? '—'}
			</Spacer>
		),
	}),
];

export const RequestsWidget: FC<RequestsWidgetProps> = props => {
	const { requests } = props;

	const [sorting, setSorting] = useState<SortingState>([]);
	const [isActiveRequestShow, setIsActiveRequestShow] = useState(false);
	const [activeRequest, setActiveRequest] = useState<Request>(requests[0]);

	const table = useReactTable({
		data: requests,
		columns,
		initialState: {
			pagination: {
				pageSize: 20,
			},
		},
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
	});

	const handleOpenRequest = useCallback((currentRequest: Request) => {
		setActiveRequest(currentRequest);
		setIsActiveRequestShow(true);
	}, []);

	const handleCloseRequest = useCallback(() => {
		setIsActiveRequestShow(false);
	}, []);

	if (isActiveRequestShow) {
		return <SingleRequestWidget requests={requests} request={activeRequest} onBackClick={handleCloseRequest} />;
	}

	return (
		<Spacer spaceTop='40px'>
			<Spacer.Slot direction='row' justifyContent='center'>
				<PercentageWidget />
			</Spacer.Slot>
			<Spacer.Slot spaceTop='37px' justifyContent='space-between'>
				<TitleComponent fontSize='28px' fontWeight='700'>
					Последние обращения
				</TitleComponent>
			</Spacer.Slot>
			<Spacer.Slot spaceTop='24px'>
				<table style={{ borderBottom: '1px solid #CBCFDE' }}>
					<thead
						style={{
							zIndex: '3',
							position: 'sticky',
							top: 0,
						}}>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id} style={{ height: '40px', backgroundColor: 'white' }}>
								{headerGroup.headers.map(header => {
									return (
										<th id={header.id} key={'header-' + header.id}>
											{header.isPlaceholder ? null : (
												<div
													{...{
														className: header.column.getCanSort()
															? 'cursor-pointer select-none'
															: '',
														onClick: header.column.getToggleSortingHandler(),
														style: {
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
														},
													}}>
													<Spacer key={header.id} fullWidth>
														{header.isPlaceholder
															? null
															: flexRender(
																	header.column.columnDef.header,
																	header.getContext(),
															  )}
													</Spacer>
												</div>
											)}
										</th>
									);
								})}
							</tr>
						))}
					</thead>
					<tbody style={{ borderBottom: '1px solid #CBCFDE' }}>
						{table.getRowModel().rows.map(row => (
							<tr
								onClick={() => handleOpenRequest(row.original)}
								key={row.id}
								style={{ borderBottom: '1px solid #CBCFDE' }}>
								{row.getVisibleCells().map(cell => (
									<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
								))}
							</tr>
						))}
					</tbody>
					<tfoot>
						{table.getFooterGroups().map(footerGroup => (
							<tr key={footerGroup.id}>
								{footerGroup.headers.map(header => (
									<th key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.footer, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</tfoot>
				</table>
			</Spacer.Slot>
			<Spacer.Slot spaceTop='30px' spaceBottom='30px' direction='row' justifyContent='center' fullWidth>
				<button
					className='border rounded p-1'
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}>
					<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
						<path
							d='M13.333 5L8.33301 10L13.333 15'
							stroke={table.getState().pagination.pageIndex === 0 ? '#CCCFDD' : 'black'}
							strokeWidth='1.66667'
						/>
					</svg>
				</button>
				<TitleComponent>
					{table.getState().pagination.pageIndex + 1} из {table.getPageCount()}
				</TitleComponent>
				<button
					className='border rounded p-1'
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}>
					<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
						<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
							<path
								d='M6.66699 5L11.667 10L6.66699 15'
								stroke={
									table.getState().pagination.pageIndex + 1 === table.getPageCount()
										? '#CCCFDD'
										: 'black'
								}
								strokeWidth='1.66667'
							/>
						</svg>
					</svg>
				</button>
			</Spacer.Slot>
		</Spacer>
	);
};
