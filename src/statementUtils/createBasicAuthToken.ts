import { encode } from 'base-64';

export interface BasicAuthOpts {
  readonly key: string;
  readonly secret: string;
}

export default function createBasicAuthToken(opts: BasicAuthOpts) {
  const encodedCredentials = encode(`${opts.key}:${opts.secret})`);
  return `Basic ${encodedCredentials}`;
}
