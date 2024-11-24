import { prisma } from '@/lib/db';
import { compare, hash } from 'bcryptjs';
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['NONPROFIT', 'SUPPORTER', 'SPONSOR']),
  name: z.string().min(2).optional(),
});

export type CreateUserInput = z.infer<typeof userSchema>;

export async function createUser(input: CreateUserInput) {
  const validated = userSchema.parse(input);
  const hashedPassword = await hash(validated.password, 12);

  const user = await prisma.user.create({
    data: {
      email: validated.email,
      password: hashedPassword,
      role: validated.role,
      name: validated.name,
    },
  });

  return user;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return compare(password, hashedPassword);
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}