import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CompaniesModule, IdeasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
