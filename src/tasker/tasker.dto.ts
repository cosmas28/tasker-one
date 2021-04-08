export class TaskerDTO {
	id?: string;
	title: string;
	status: 'backlog' | 'completed' | 'in-progress';
}
