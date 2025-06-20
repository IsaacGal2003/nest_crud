import { IsEnum } from 'class-validator';
import { TaskStatus } from '../status/status-task';

export class UpdateStatusTaskDto {
  /**
   * The new status of the task
   * @example "completed"
   */
  @IsEnum(TaskStatus, {
    message:
      'Status must be one of the following: pending, in-progress, completed, cancelled',
  })
  status: string;
}
