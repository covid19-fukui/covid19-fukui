// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from 'src/lib/service/FetchDataService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(200).json(await fetchData());
}
