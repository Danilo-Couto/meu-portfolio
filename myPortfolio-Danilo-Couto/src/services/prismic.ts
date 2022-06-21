// import Prismic from '@prismicio/client';
// import { DefaultClient } from '@prismicio/client/types/client';

// export function getPrismicClient(req?: unknown): DefaultClient {
//   const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
//     req,
//     accessToken: process.env.PRISMIC_ACCESS_TOKEN
//   });
//   return prismic;
// }

import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;

export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export const client = Prismic.client(apiEndpoint, { accessToken });
