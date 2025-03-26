import { Request, Response } from "express";

import * as service from "./category.service";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await service.getCategories();
  res.status(200).send({ data: categories });
};

export const getCategoryById = async (req: Request, res: Response) => {
  const categories = await service.getCategoryById(parseInt(req.params.id));
  res.status(200).send({ data: categories });
};

export const createCategory = async (req: Request, res: Response) => {
  const categories = await service.createCategory(req.body);
  res.status(200).send({ data: categories });
}

export const updateCategory = async (req: Request, res: Response) => {
  const categories = await service.updateCategory(req.body);
  res.status(200).send({ data: categories });
}

export const deleteCategory = async (req: Request, res: Response) => {
  const categories = await service.deleteCategory(parseInt(req.params.id));
  res.status(200).send({ data: categories });
}