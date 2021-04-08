import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskerController } from './tasker/tasker.controller';

@Module({
  imports: [],
  controllers: [AppController, TaskerController],
  providers: [AppService],
})
export class AppModule {}
