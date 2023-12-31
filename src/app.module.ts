import { Module } from '@nestjs/common';
import { BoardsController } from './boards/boards.controller';
import { BoardsModule } from './boards/boards.module';
import { BoardsService } from './boards/boards.service';

@Module({
  imports: [BoardsModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
