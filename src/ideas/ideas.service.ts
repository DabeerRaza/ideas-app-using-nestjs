import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Ideas } from './ideas.entity';

@Injectable()
export class IdeasService extends TypeOrmCrudService<Ideas> {
  constructor(@InjectRepository(Ideas) repo) {
    super(repo);
  }
}
