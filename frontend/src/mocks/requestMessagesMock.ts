import { RequestMessagesHistoryType } from '@api/index';

export const mock: RequestMessagesHistoryType = {
	datetime: '2022-01-01',
	number: '123',
	markup_status: 0,
	additional_offer_possibility: true,
	comment: 'This is a comment',
	messages: [
		{
			number: '456',
			time: '08:00 AM',
			text: 'Здравствуйте',
			sender: 1,
		},
		{
			number: '456',
			time: '08:00 AM',
			text: 'Я хочу открыть портал в ад и взять кредит для покупки дома',
			sender: 1,
		},
		{
			number: '789',
			time: '09:00 AM',
			text: 'Добрый вечер, я — виртуальный помощник и буду рад помочь вам решить любые вопросы',
			sender: 2,
		},
		{
			number: '789',
			time: '09:00 AM',
			text: 'Вас интересует именно кредит наличными или ипотека?',
			sender: 2,
		},
		{
			number: '456',
			time: '08:00 AM',
			text: 'Ипотека',
			sender: 1,
		},
		{
			number: '789',
			time: '09:00 AM',
			text: 'Отлично, у нас для вас и вашей семьи есть уникальное предложение, которое действует только сегодня.',
			sender: 2,
		},
		{
			number: '789',
			time: '09:00 AM',
			text: 'Ипотека под 500% годовых на 150 лет откроет для вас новые возможности и значительно улучшит условия проживания. Вам доступна сумма до 15 млн рублей. Оформим?',
			sender: 2,
		},
	],
};
