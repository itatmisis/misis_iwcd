import React, { FC } from 'react';

type EmotionalGradationProps = {
	status: 0 | 1 | 2;
};

const EmotionZero: FC = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 27 27' fill='none'>
			<g>
				<circle cx='13.5' cy='13.5' r='13.5' fill='#D9DFFC' />
				<circle cx='5.5' cy='12.5' r='1.5' fill='#4F6AE8' />
				<circle cx='21.5' cy='12.5' r='1.5' fill='#4F6AE8' />
				<path
					d='M9.34267 16.2221C9.29776 16.1137 9.25718 16.0037 9.22098 15.8924C9.14726 15.6659 8.94363 15.5 8.70538 15.5C8.38624 15.5 8.14414 15.7905 8.23675 16.0959C8.28896 16.2681 8.34968 16.4379 8.41879 16.6048C8.69519 17.272 9.10031 17.8784 9.61104 18.3891C10.1218 18.8998 10.7281 19.3049 11.3954 19.5813C12.0627 19.8577 12.7779 20 13.5001 20C14.2224 20 14.9376 19.8577 15.6049 19.5813C16.2722 19.3049 16.8785 18.8998 17.3892 18.3891C17.8999 17.8784 18.3051 17.2721 18.5815 16.6048C18.6506 16.4379 18.7113 16.2681 18.7635 16.0959C18.8561 15.7905 18.614 15.5 18.2949 15.5C18.0566 15.5 17.853 15.6659 17.7793 15.8924C17.7431 16.0037 17.7025 16.1137 17.6576 16.2221C17.4314 16.768 17.1 17.2641 16.6821 17.682C16.2642 18.0998 15.7682 18.4313 15.2222 18.6575C14.6762 18.8836 14.0911 19 13.5001 19C12.9092 19 12.324 18.8836 11.778 18.6575C11.2321 18.4313 10.736 18.0998 10.3181 17.682C9.90028 17.2641 9.56881 16.768 9.34267 16.2221Z'
					fill='#4F6AE8'
				/>
			</g>
			<defs>
				<clipPath id='clip0_273_73'>
					<rect width='27' height='27' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

const EmotionOne: FC = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 27 27' fill='none'>
			<g clipPath='url(#clip0_207_8682)'>
				<circle cx='13.5' cy='13.5' r='13.5' fill='#E6F3E9' />
				<path
					d='M8 14.5C8 15.2223 8.14226 15.9375 8.41866 16.6048C8.69506 17.272 9.10019 17.8784 9.61091 18.3891C10.1216 18.8998 10.728 19.3049 11.3952 19.5813C12.0625 19.8577 12.7777 20 13.5 20C14.2223 20 14.9375 19.8577 15.6048 19.5813C16.272 19.3049 16.8784 18.8998 17.3891 18.3891C17.8998 17.8784 18.3049 17.2721 18.5813 16.6048C18.8577 15.9375 19 15.2223 19 14.5L8 14.5Z'
					fill='#6DB49B'
				/>
				<circle cx='5.5' cy='12.5' r='1.5' fill='#6DB49B' />
				<circle cx='21.5' cy='12.5' r='1.5' fill='#6DB49B' />
			</g>
			<defs>
				<clipPath id='clip0_207_8682'>
					<rect width='27' height='27' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

const EmotionTwo: FC = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 27 27' fill='none'>
			<g clipPath='url(#clip0_273_1250)'>
				<circle cx='13.5' cy='13.5' r='13.5' fill='#FFE4E7' />
				<path
					d='M9.34267 18.2779C9.29776 18.3863 9.25718 18.4963 9.22098 18.6076C9.14726 18.8341 8.94363 19 8.70538 19C8.38624 19 8.14414 18.7095 8.23675 18.4041C8.28896 18.2319 8.34968 18.0621 8.41879 17.8952C8.69519 17.228 9.10031 16.6216 9.61104 16.1109C10.1218 15.6002 10.7281 15.1951 11.3954 14.9187C12.0627 14.6423 12.7779 14.5 13.5001 14.5C14.2224 14.5 14.9376 14.6423 15.6049 14.9187C16.2722 15.1951 16.8785 15.6002 17.3892 16.1109C17.8999 16.6216 18.3051 17.2279 18.5815 17.8952C18.6506 18.0621 18.7113 18.2319 18.7635 18.4041C18.8561 18.7095 18.614 19 18.2949 19C18.0566 19 17.853 18.8341 17.7793 18.6076C17.7431 18.4963 17.7025 18.3863 17.6576 18.2779C17.4314 17.732 17.1 17.2359 16.6821 16.818C16.2642 16.4002 15.7682 16.0687 15.2222 15.8425C14.6762 15.6164 14.0911 15.5 13.5001 15.5C12.9092 15.5 12.324 15.6164 11.778 15.8425C11.2321 16.0687 10.736 16.4002 10.3181 16.818C9.90028 17.2359 9.56881 17.732 9.34267 18.2779Z'
					fill='#BF5552'
				/>
				<circle cx='5.5' cy='12.5' r='1.5' fill='#BF5552' />
				<circle cx='21.5' cy='12.5' r='1.5' fill='#BF5552' />
			</g>
			<defs>
				<clipPath id='clip0_273_1250'>
					<rect width='27' height='27' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export const EmotionalGradation: FC<EmotionalGradationProps> = ({ status }) => {
	switch (status) {
		default:
		case 0: {
			return <EmotionZero />;
		}
		case 1: {
			return <EmotionOne />;
		}
		case 2: {
			return <EmotionTwo />;
		}
	}
};
