import { FindItemsController } from '@/controllers/FindItemsController';
import { GetItemController } from '@/controllers/GetItemController';
import { Router } from 'express';

const findItemsController = new FindItemsController();
const getItemController = new GetItemController();

export default (router: Router): void => {
  router.get('/items', findItemsController.handle);

  router.get('/items/:id', getItemController.handle);
};
