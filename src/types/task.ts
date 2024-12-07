export const ETaskPriority = {
	LOW: 'low',
	MEDIUM: 'medium',
	HIGHT: 'high',
} as const

export type TaskPriority = typeof ETaskPriority[keyof typeof ETaskPriority];
export interface ITask {
	id: number;
	title: string;
	description?: string;
	priority: typeof ETaskPriority[keyof typeof ETaskPriority];
	dueDate: string;
	isCompleted: boolean;
}