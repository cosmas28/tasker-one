import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonController } from './tasker-one/common/common.controller';
import { TaskerController } from './tasker/tasker.controller';

@Module({
  imports: [],
  controllers: [AppController, CommonController, TaskerController],
  providers: [AppService],
})
export class AppModule {}
