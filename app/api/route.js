import { db } from "../sqlite";

export async function GET() {
  const table = "student";
  const { rows } = await db.execute(
    `SELECT 1;`,
  );
  return Response.json(rows, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
