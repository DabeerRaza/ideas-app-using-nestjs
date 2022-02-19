import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Ideas } from './ideas.entity';
import { IdeasService } from './ideas.service';

@Crud({
  model: {
    type: Ideas,
  },
})
@Controller('ideas')
export class IdeasController implements CrudController<Ideas> {
  constructor(public service: IdeasService) {}
}
