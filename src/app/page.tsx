import { db } from '@/db';

export default async function HomePage() {
  const snippets = await db.snippets.findMany();

  const renderedSnippets = snippets.map(({ id, title, codeSnippet }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{codeSnippet}</p>
    </div>
  ));

  return <div>{renderedSnippets}</div>;
}
