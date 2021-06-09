import { ItemDetails } from '@/models/ItemDetails';
import { MLApi } from '@/providers';
import { Request, Response } from 'express';

export class GetItemController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const [MLItem, MLItemDescription] = await Promise.all([
      MLApi.get(`/items/MLA907464882`),
      MLApi.get(`/items/MLA907464882/description`),
    ]);

    const result = MLItem.data;
    const description = MLItemDescription.data;

    const data: ItemDetails = {
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: result.price,
        decimals: 2,
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
      description: description.plain_text,
      sold_quantity: result.sold_quantity,
    };

    return res.json(data);
  }
}
