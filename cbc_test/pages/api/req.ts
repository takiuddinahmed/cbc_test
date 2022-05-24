// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';
import Data from '../../components/interface';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200);
}
