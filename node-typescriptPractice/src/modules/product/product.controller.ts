import { Request, Response } from "express";

import * as service from "./product.service";

export const getProducts = async (req: Request, res: Response) => {
  const products = await service.getProducts();
  res.status(200).send({ data: products });
};

export const getProductById = async (req: Request, res: Response) => {
  const products = await service.getProductById(parseInt(req.params.id));
  res.status(200).send({ data: products });
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  const products = await service.getProductsByCategory(parseInt(req.params.category));
  res.status(200).send({ data: products });
};

export const createProduct = async (req: Request, res: Response) => {
  const products = await service.createProduct(req.body);
  res.status(200).send({ data: products });
}

export const updateProduct = async (req: Request, res: Response) => {
  const products = await service.updateProduct(req.body.id);
  res.status(200).send({ data: products });
}

export const deleteProduct = async (req: Request, res: Response) => {
  const products = await service.deleteProduct(parseInt(req.params.id));
  res.status(200).send({ data: products });
}