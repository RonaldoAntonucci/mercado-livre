import { Router } from 'express';

export default (router: Router): void => {
  router.get('/items', (req, res) => res.json({ items: 'items' }));

  router.get('/items/:id', (req, res) => res.json({ items: 'id' }));
};
