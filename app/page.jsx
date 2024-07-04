import { db } from "./sqlite";

export default async function Home() {
  const table = "student";
  const { rows } = await db.execute(
    `SELECT 1;`,
  );
  await db.execute(
    `SELECT 1;`,
  );
  return <pre>{JSON.stringify(rows, null, 2)}</pre>;
}
