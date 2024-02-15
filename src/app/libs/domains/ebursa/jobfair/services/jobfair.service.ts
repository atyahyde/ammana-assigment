const URL = process.env.API_URL;

export async function getJobfair() {
  const res = await fetch(`${URL}/published-events`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getJobfairById(id: string) {
  const res = await fetch(`${URL}/published-events/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
