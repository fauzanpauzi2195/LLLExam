import { Request, Response } from 'express';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

let products: Product[] = [];
let currentId = 1;

export const createProduct = (req: Request, res: Response) => {
  const product: Product = { id: currentId++, ...req.body };
  products.push(product);
  res.status(201).json(product);
};

export const getAllProducts = (req: Request, res: Response) => {
  res.json(products);
};

export const getProductById = (req: Request<{ id: string }>, res: Response): void => {
    const product = products.find((p) => p.id === Number(req.params.id));
    if (!product) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    res.json(product);
};
