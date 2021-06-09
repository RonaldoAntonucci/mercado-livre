import { Item } from '@/models/Item';
import { MLApi } from '@/providers';
import { Request, Response } from 'express';

export class FindItemsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { q } = req.query;

    const MLRes = await MLApi.get(`/sites/MLA/search?q=${q}`);

    const data: Item[] = MLRes.data.results.map((result) => ({
      id: result.id,
      title: result.title,
      price: {
        currency: result.prices.presentation.display_currency,
        amount: result.price,
        decimals: 2,
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
    }));

    return res.json({ items: data });
  }
}
