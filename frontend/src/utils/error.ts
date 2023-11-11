const UNAUTHORIZED_ERROR_KIND = 'unauthorized';
const NOT_FOUND_ERROR_KIND = 'not_found';

type ErrorKind = typeof UNAUTHORIZED_ERROR_KIND | typeof NOT_FOUND_ERROR_KIND;

export class CustomError extends Error {
	public kind: ErrorKind;

	constructor(kind: ErrorKind, message?: string) {
		super(message);
		this.kind = kind;
	}
}

export class UnauthorizedError extends CustomError {
	public name = 'UnauthorizedError';

	constructor(message?: string) {
		super(UNAUTHORIZED_ERROR_KIND, message);
	}

	public toString(): string {
		return `${this.name}: ${this.message}`;
	}
}

export class NotFoundError extends CustomError {
	public name = 'NotFoundError';

	constructor(message?: string) {
		super(NOT_FOUND_ERROR_KIND, message);
	}

	public toString(): string {
		return `${this.name}: ${this.message}`;
	}
}
