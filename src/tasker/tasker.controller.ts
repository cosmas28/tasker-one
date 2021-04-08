import { Body, Controller, Get, Post} from '@nestjs/common';

import {TaskerDTO} from './tasker.dto';

import {tasks} from './tasker-mock';

let tasksData = tasks;
 
@Controller('tasker')
export class TaskerController {
	@Get('tasks')
	getTasks(): TaskerDTO[] {
		return tasksData;
	}

	@Post('tasks')
	createTask(@Body() createTask: TaskerDTO): TaskerDTO {
		const newTask: TaskerDTO = {
			id: (tasksData.length + 1).toString(),
			...createTask,
		};

		tasksData = [...tasksData, newTask];

		return newTask;
	}
}
