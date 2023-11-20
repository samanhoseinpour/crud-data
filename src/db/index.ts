import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

const main = async () => {
  const sinppets = await db.snippets.create({
    data: {
      title: 'NextJS Snippet',
      codeSnippet: `export default asyc function getSnippets() {
        // return something else 
      }`,
    },
  });

  console.log(sinppets);
};

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);

    await db.$disconnect();
    process.exit(1);
  });
