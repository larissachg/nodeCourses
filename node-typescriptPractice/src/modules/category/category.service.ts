import { Category, PrismaClient, Product } from "@prisma/client";
const prisma = new PrismaClient();

export const getCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const getCategoryById = async (id: number) => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return category;
};

export const createCategory = async (category: Category) => {
  const newCategory = await prisma.category.create({
    data: {
      name: category.name,
      id: category.id,
    },
  });
  return newCategory;
};

export const updateCategory = async (category: Category) => {
  const updatedCategory = await prisma.category.update({
    where: {
      id: category.id,
    },
    data: {
      name: category.name,
    },
  });
  return updatedCategory;
};

export const deleteCategory = async (id: number) => {
  const deletedCategory = await prisma.category.delete({
    where: {
      id,
    },
  });
  return deletedCategory;
};
