import { prisma } from "./prisma";

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    throw error;
  }
};

export const createNewUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const createdUser = await prisma.user.create({
      data: { name, email, password },
    });
    return createdUser;
  } catch (error) {
    throw error;
  }
};
