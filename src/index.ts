import { PrismaClient } from '@prisma/client'
import { title } from 'process'

const prisma = new PrismaClient()

async function createUser() {
  try {
    await prisma.user.create({
      data: {
        email: 'fulano@gmail.com',
        name: 'Fulano',
        posts: {
          create: {
            title: 'Oioioioioi',
            published: true,
          },
        },
      },
    })
  } catch (error) {
    throw error
  }
}

// createUser()

async function main() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
