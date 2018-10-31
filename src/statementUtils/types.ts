export interface Extensions {
  readonly [extension: string]: unknown;
}

export interface LanguageMap {
  readonly [language: string]: string | undefined;
}

export interface Verb {
  readonly id: string;
  readonly display?: LanguageMap;
}

export interface Activity {
  readonly objectType: 'Activity';
  readonly id: string;
  readonly definition?: {
    readonly type: string;
    readonly name: LanguageMap;
    readonly extensions?: Extensions;
  };
}

export interface UnidentifiedAgent {
  readonly objectType: 'Agent';
  readonly name?: string;
}

export interface MboxAgent extends UnidentifiedAgent {
  readonly mbox: string;
}

export interface AccountAgent extends UnidentifiedAgent {
  readonly account: {
    readonly homePage: string;
    readonly name: string;
  };
}

export type Agent = MboxAgent | AccountAgent;

export interface Context {
  readonly platform?: string;
  readonly language?: string;
  readonly extensions?: Extensions;
  readonly contextActivities?: {
    readonly category?: Activity[];
    readonly grouping?: Activity[];
    readonly other?: Activity[];
    readonly parent?: Activity[];
  };
}

export interface Result {
  readonly extensions?: Extensions;
  readonly response?: string;
  readonly score?: {
    readonly min?: number;
    readonly max?: number;
    readonly raw?: number;
    readonly scaled?: number;
  };
}

export interface Statement {
  readonly actor: Agent;
  readonly verb: Verb;
  readonly object: Activity | Agent;
  readonly context?: Context;
  readonly result?: Result;
  readonly timestamp?: string;
}
