import { UpdateStatusTaskDto } from './dto/update-status-task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  // Define your endpoints here, e.g.:
  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(id: number): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateTaskDto): Promise<Task> {
    return this.taskService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    body: CreateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.taskService.delete(id);
  }

  @Put(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateStatusTaskDto,
  ): Promise<Task> {
    return this.taskService.updateStatus(id, body);
  }
}
