import { Agent } from './types';

export interface CreateAgentOpts {
  /** The human readable name of the person. */
  readonly displayName?: string;

  /**
   * The unique identifier for the person from the identity provider.
   * This is preferred to the email when identifying the person in the xAPI.
   */
  readonly id?: string;

  /** An email address for the person. */
  readonly email?: string;

  /** The URL of the identity provider. */
  readonly idProviderUrl?: string;
}

/**
 * Creates an xAPI Agent object from the given options using best practices.
 * https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#242-actor
 */
export default function createAgent(options: CreateAgentOpts): Agent {
  if (options.id !== undefined && options.idProviderUrl !== undefined) {
    return {
      objectType: 'Agent',
      account: {
        name: options.id,
        homePage: options.idProviderUrl,
      },
      name: options.displayName,
    };
  }
  if (options.email !== undefined) {
    return {
      objectType: 'Agent',
      mbox: `mailto:${options.email}`,
      name: options.displayName,
    };
  }
  throw new Error('Must provide an id with a identityProviderUrl, or an email');
}
