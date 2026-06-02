import "server-only";

/**
 * Reads the number of users on the Founders plan from Supabase via the REST API.
 * Returns null if the env vars are missing, the request fails, or the response
 * can't be parsed — callers should treat null as "render without the live counter".
 */
export async function getFoundersTakenCount(): Promise<number | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  try {
    const res = await fetch(
      `${url}/rest/v1/profiles?select=id&plan=eq.founders&limit=0`,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          Prefer: "count=exact",
        },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return null;

    const range = res.headers.get("content-range");
    if (!range) return null;
    const total = parseInt(range.split("/")[1] ?? "", 10);
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}
