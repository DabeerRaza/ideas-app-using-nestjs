import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeasController } from './ideas.controller';
import { Ideas } from './ideas.entity';
import { IdeasService } from './ideas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ideas])],
  controllers: [IdeasController],
  providers: [IdeasService],
  exports: [IdeasService],
})
export class IdeasModule {}
