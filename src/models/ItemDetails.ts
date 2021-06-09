import { Item } from './Item';

export interface ItemDetails extends Item {
  sold_quantity: number;
  description: string;
}
