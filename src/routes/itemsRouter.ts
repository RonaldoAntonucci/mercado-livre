import { FindItemsController } from '@/controllers/FindItemsController';
import { Router } from 'express';

const findItemsController = new FindItemsController();

export default (router: Router): void => {
  router.get('/items', findItemsController.handle);

  router.get('/items/:id', (req, res) => res.json({ items: 'id' }));
};
