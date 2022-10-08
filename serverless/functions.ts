import type { AWS } from '@serverless/typescript';

const functions: AWS['functions'] = {
  urlShortener: {
    handler: 'src/functions/urlShortener/index.handler',
    events: [
      {
        httpApi: {
          path: 'gameDeals',
          method: 'get',
        },
      },
    ],
  },
};

export default functions;