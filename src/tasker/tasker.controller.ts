import { Controller, Get } from '@nestjs/common';

import {TaskerDTO} from './tasker.dto';

import {tasks as tasksData} from './tasker-mock';
 
@Controller('tasker')
export class TaskerController {
	@Get('tasks')
	getTasks(): TaskerDTO[] {
		return tasksData;
	}
}
