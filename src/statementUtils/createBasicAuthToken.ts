import { encode } from 'base-64';

export interface BasicAuthOpts {
  readonly key: string;
  readonly secret: string;
}

/**
 * Creates the token for the `Authorization` header in HTTP requests to the xAPI.
 * Returns `Basic <BASE 64 ENCODED KEY:SECRET>`
 */
export default function createBasicAuthToken(opts: BasicAuthOpts) {
  const encodedCredentials = encode(`${opts.key}:${opts.secret}`);
  return `Basic ${encodedCredentials}`;
}
