import axios from 'axios';
import { Statement } from './types';

interface StatementInsertionOpts {
  /** An array of statements to be inserted to the LRS. */
  readonly statements: Statement[];

  /**
   * The URL that provides access to the LRS (e.g. https://example.org/xAPI).
   * Do not use a trailing slash (e.g. https://example.org/xAPI/).
   * Do not add `/statements` (e.g. https://example.org/xAPI/statements).
   */
  readonly endpoint: string;

  /**
   * The authorization header value that provides access to the LRS.
   * Use `createBasicAuthToken` from `statementUtils` for basic authentication tokens.
   */
  readonly authToken: string;
}

/**
 * Makes a HTTP POST request to the LRS to insert the statements.
 */
export default async function insertStatements(opts: StatementInsertionOpts) {
  const url = `${opts.endpoint}/statements`;
  const headers = {
    Authorization: opts.authToken,
    'X-Experience-API-Version': '1.0.3',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(opts.statements);
  return axios.post(url, body, { headers });
}
