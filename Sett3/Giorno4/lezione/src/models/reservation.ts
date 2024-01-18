export default interface Reservation {
	_id: string;
	name: string;
	phone: string;
	numberOfPeople: number;
	smoking: boolean;
	dateTime: string;
	specialRequests?: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
