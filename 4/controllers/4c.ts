import { Request, Response } from 'express';
import { Product } from '../models/sequalize';

export const createProduct = async (req: Request, res: Response) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const getAllProducts = async (req: Request, res: Response) => {
  const { page = '1', limit = '10' } = req.query;
  const offset = (parseInt(page as string) - 1) * parseInt(limit as string);
  const products = await Product.findAll({
    limit: parseInt(limit as string),
    offset,
  });
  res.json(products);
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    res.json(product);
  };

export const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  }else{
    await product.update(req.body);
    res.json(product)
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const deletedCount = await Product.destroy({ where: { id: req.params.id } });

  if (deletedCount === 0) {
    res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ message: "Deleted successfully" });
};

