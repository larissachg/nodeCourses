import { PrismaClient, Product } from "@prisma/client";
const prisma = new PrismaClient();

export const getProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return product;
};

export const getProductsByCategory = async (categoryId: number) => {
  const products = await prisma.product.findMany({
    where: {
      categoryId,
    },
    include: {
      category: true,
    },
  });
  return products;
};

export const createProduct = async (product: Product) => {
  const newProduct = await prisma.product.create({
    data: {
      name: product.name,
      price: product.price,
      categoryId: product.categoryId,
    },
  });
  return newProduct;
};

export const updateProduct = async (product: Product) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id: product.id,
    },
    data: {
      name: product.name,
      price: product.price,
      categoryId: product.categoryId,
    },
  });
  return updatedProduct;
};

export const deleteProduct = async (id: number) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id,
    },
  });
  return deletedProduct;
};
