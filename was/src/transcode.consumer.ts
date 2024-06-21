import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Job } from 'bull';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    console.log('Transcoding message: ', job.id);
    console.log('Data: ', job.data);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
    console.log('Transcoding complete for job: ', job.id);
  }
}
