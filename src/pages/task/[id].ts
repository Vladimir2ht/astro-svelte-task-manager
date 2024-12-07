import { APIRoute } from "astro"
import taskService from '../../services/task';

export const prerender = false;

const notFoundResponse = new Response(null, {
	status: 404,
	statusText: 'Not found'
});

export const GET: APIRoute = async ({ params }) => {
	const id = params.id && parseInt(params.id);

	if (!id) return notFoundResponse;

	const task = await taskService.getTask(id as number);

	return task ?
		new Response(JSON.stringify(task)) :
		notFoundResponse;
}