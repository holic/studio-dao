import { gql } from 'urql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
};

export type Alias = {
  readonly __typename?: 'Alias';
  readonly address: Scalars['String'];
  readonly alias: Scalars['String'];
  readonly created: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly ipfs?: Maybe<Scalars['String']>;
};

export type AliasWhere = {
  readonly address?: InputMaybe<Scalars['String']>;
  readonly address_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly alias?: InputMaybe<Scalars['String']>;
  readonly alias_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly created?: InputMaybe<Scalars['Int']>;
  readonly created_gt?: InputMaybe<Scalars['Int']>;
  readonly created_gte?: InputMaybe<Scalars['Int']>;
  readonly created_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly created_lt?: InputMaybe<Scalars['Int']>;
  readonly created_lte?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ipfs?: InputMaybe<Scalars['String']>;
  readonly ipfs_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Follow = {
  readonly __typename?: 'Follow';
  readonly created: Scalars['Int'];
  readonly follower: Scalars['String'];
  readonly id: Scalars['String'];
  readonly ipfs?: Maybe<Scalars['String']>;
  readonly space: Space;
};

export type FollowWhere = {
  readonly created?: InputMaybe<Scalars['Int']>;
  readonly created_gt?: InputMaybe<Scalars['Int']>;
  readonly created_gte?: InputMaybe<Scalars['Int']>;
  readonly created_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly created_lt?: InputMaybe<Scalars['Int']>;
  readonly created_lte?: InputMaybe<Scalars['Int']>;
  readonly follower?: InputMaybe<Scalars['String']>;
  readonly follower_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ipfs?: InputMaybe<Scalars['String']>;
  readonly ipfs_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly space?: InputMaybe<Scalars['String']>;
  readonly space_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Item = {
  readonly __typename?: 'Item';
  readonly id: Scalars['String'];
  readonly spacesCount?: Maybe<Scalars['Int']>;
};

export type Message = {
  readonly __typename?: 'Message';
  readonly address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly ipfs?: Maybe<Scalars['String']>;
  readonly mci?: Maybe<Scalars['Int']>;
  readonly receipt?: Maybe<Scalars['String']>;
  readonly sig?: Maybe<Scalars['String']>;
  readonly space?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type MessageWhere = {
  readonly mci?: InputMaybe<Scalars['Int']>;
  readonly mci_gt?: InputMaybe<Scalars['Int']>;
  readonly mci_gte?: InputMaybe<Scalars['Int']>;
  readonly mci_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly mci_lt?: InputMaybe<Scalars['Int']>;
  readonly mci_lte?: InputMaybe<Scalars['Int']>;
  readonly space?: InputMaybe<Scalars['String']>;
  readonly space_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly type?: InputMaybe<Scalars['String']>;
  readonly type_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Proposal = {
  readonly __typename?: 'Proposal';
  readonly app?: Maybe<Scalars['String']>;
  readonly author: Scalars['String'];
  readonly body?: Maybe<Scalars['String']>;
  readonly choices: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly created: Scalars['Int'];
  readonly discussion: Scalars['String'];
  readonly end: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly ipfs?: Maybe<Scalars['String']>;
  readonly link?: Maybe<Scalars['String']>;
  readonly network: Scalars['String'];
  readonly plugins: Scalars['Any'];
  readonly privacy?: Maybe<Scalars['String']>;
  readonly quorum: Scalars['Float'];
  readonly scores?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly scores_by_strategy?: Maybe<Scalars['Any']>;
  readonly scores_state?: Maybe<Scalars['String']>;
  readonly scores_total?: Maybe<Scalars['Float']>;
  readonly scores_updated?: Maybe<Scalars['Int']>;
  readonly snapshot?: Maybe<Scalars['String']>;
  readonly space?: Maybe<Space>;
  readonly start: Scalars['Int'];
  readonly state?: Maybe<Scalars['String']>;
  readonly strategies: ReadonlyArray<Maybe<Strategy>>;
  readonly symbol: Scalars['String'];
  readonly title: Scalars['String'];
  readonly type?: Maybe<Scalars['String']>;
  readonly votes?: Maybe<Scalars['Int']>;
};

export type ProposalWhere = {
  readonly author?: InputMaybe<Scalars['String']>;
  readonly author_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly created?: InputMaybe<Scalars['Int']>;
  readonly created_gt?: InputMaybe<Scalars['Int']>;
  readonly created_gte?: InputMaybe<Scalars['Int']>;
  readonly created_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly created_lt?: InputMaybe<Scalars['Int']>;
  readonly created_lte?: InputMaybe<Scalars['Int']>;
  readonly end?: InputMaybe<Scalars['Int']>;
  readonly end_gt?: InputMaybe<Scalars['Int']>;
  readonly end_gte?: InputMaybe<Scalars['Int']>;
  readonly end_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly end_lt?: InputMaybe<Scalars['Int']>;
  readonly end_lte?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ipfs?: InputMaybe<Scalars['String']>;
  readonly ipfs_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly network?: InputMaybe<Scalars['String']>;
  readonly network_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly scores_state?: InputMaybe<Scalars['String']>;
  readonly scores_state_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly space?: InputMaybe<Scalars['String']>;
  readonly space_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly start?: InputMaybe<Scalars['Int']>;
  readonly start_gt?: InputMaybe<Scalars['Int']>;
  readonly start_gte?: InputMaybe<Scalars['Int']>;
  readonly start_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly start_lt?: InputMaybe<Scalars['Int']>;
  readonly start_lte?: InputMaybe<Scalars['Int']>;
  readonly state?: InputMaybe<Scalars['String']>;
  readonly strategies_contains?: InputMaybe<Scalars['String']>;
  readonly title_contains?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['String']>;
  readonly type_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly aliases?: Maybe<ReadonlyArray<Maybe<Alias>>>;
  readonly follows?: Maybe<ReadonlyArray<Maybe<Follow>>>;
  readonly messages?: Maybe<ReadonlyArray<Maybe<Message>>>;
  readonly networks?: Maybe<ReadonlyArray<Maybe<Item>>>;
  readonly plugins?: Maybe<ReadonlyArray<Maybe<Item>>>;
  readonly proposal?: Maybe<Proposal>;
  readonly proposals?: Maybe<ReadonlyArray<Maybe<Proposal>>>;
  readonly skins?: Maybe<ReadonlyArray<Maybe<Item>>>;
  readonly space?: Maybe<Space>;
  readonly spaces?: Maybe<ReadonlyArray<Maybe<Space>>>;
  readonly strategies?: Maybe<ReadonlyArray<Maybe<StrategyItem>>>;
  readonly strategy?: Maybe<StrategyItem>;
  readonly subscriptions?: Maybe<ReadonlyArray<Maybe<Subscription>>>;
  readonly user?: Maybe<User>;
  readonly users?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly validations?: Maybe<ReadonlyArray<Maybe<Item>>>;
  readonly vote?: Maybe<Vote>;
  readonly votes?: Maybe<ReadonlyArray<Maybe<Vote>>>;
  readonly vp?: Maybe<Vp>;
};


export type QueryAliasesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AliasWhere>;
};


export type QueryFollowsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowWhere>;
};


export type QueryMessagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhere>;
};


export type QueryProposalArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalWhere>;
};


export type QuerySpaceArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpacesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpaceWhere>;
};


export type QueryStrategyArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhere>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhere>;
};


export type QueryVoteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhere>;
};


export type QueryVpArgs = {
  proposal?: InputMaybe<Scalars['String']>;
  space: Scalars['String'];
  voter: Scalars['String'];
};

export type Space = {
  readonly __typename?: 'Space';
  readonly about?: Maybe<Scalars['String']>;
  readonly admins?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly avatar?: Maybe<Scalars['String']>;
  readonly categories?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children?: Maybe<ReadonlyArray<Maybe<Space>>>;
  readonly coingecko?: Maybe<Scalars['String']>;
  readonly domain?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly filters?: Maybe<SpaceFilters>;
  readonly followersCount?: Maybe<Scalars['Int']>;
  readonly github?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly location?: Maybe<Scalars['String']>;
  readonly members?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly network?: Maybe<Scalars['String']>;
  readonly parent?: Maybe<Space>;
  readonly plugins?: Maybe<Scalars['Any']>;
  readonly private?: Maybe<Scalars['Boolean']>;
  readonly proposalsCount?: Maybe<Scalars['Int']>;
  readonly skin?: Maybe<Scalars['String']>;
  readonly strategies?: Maybe<ReadonlyArray<Maybe<Strategy>>>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly terms?: Maybe<Scalars['String']>;
  readonly treasuries?: Maybe<ReadonlyArray<Maybe<Treasury>>>;
  readonly twitter?: Maybe<Scalars['String']>;
  readonly validation?: Maybe<Strategy>;
  readonly voting?: Maybe<SpaceVoting>;
  readonly website?: Maybe<Scalars['String']>;
};

export type SpaceFilters = {
  readonly __typename?: 'SpaceFilters';
  readonly minScore?: Maybe<Scalars['Float']>;
  readonly onlyMembers?: Maybe<Scalars['Boolean']>;
};

export type SpaceVoting = {
  readonly __typename?: 'SpaceVoting';
  readonly aliased?: Maybe<Scalars['Boolean']>;
  readonly blind?: Maybe<Scalars['Boolean']>;
  readonly delay?: Maybe<Scalars['Int']>;
  readonly hideAbstain?: Maybe<Scalars['Boolean']>;
  readonly period?: Maybe<Scalars['Int']>;
  readonly privacy?: Maybe<Scalars['String']>;
  readonly quorum?: Maybe<Scalars['Float']>;
  readonly type?: Maybe<Scalars['String']>;
};

export type SpaceWhere = {
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Strategy = {
  readonly __typename?: 'Strategy';
  readonly name: Scalars['String'];
  readonly network?: Maybe<Scalars['String']>;
  readonly params?: Maybe<Scalars['Any']>;
};

export type StrategyItem = {
  readonly __typename?: 'StrategyItem';
  readonly about?: Maybe<Scalars['String']>;
  readonly author?: Maybe<Scalars['String']>;
  readonly examples?: Maybe<ReadonlyArray<Maybe<Scalars['Any']>>>;
  readonly id: Scalars['String'];
  readonly schema?: Maybe<Scalars['Any']>;
  readonly spacesCount?: Maybe<Scalars['Int']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly address: Scalars['String'];
  readonly created: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly ipfs?: Maybe<Scalars['String']>;
  readonly space: Space;
};

export type SubscriptionWhere = {
  readonly address?: InputMaybe<Scalars['String']>;
  readonly address_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly created?: InputMaybe<Scalars['Int']>;
  readonly created_gt?: InputMaybe<Scalars['Int']>;
  readonly created_gte?: InputMaybe<Scalars['Int']>;
  readonly created_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly created_lt?: InputMaybe<Scalars['Int']>;
  readonly created_lte?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ipfs?: InputMaybe<Scalars['String']>;
  readonly ipfs_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly space?: InputMaybe<Scalars['String']>;
  readonly space_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Treasury = {
  readonly __typename?: 'Treasury';
  readonly address?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly network?: Maybe<Scalars['String']>;
};

export type User = {
  readonly __typename?: 'User';
  readonly about?: Maybe<Scalars['String']>;
  readonly avatar?: Maybe<Scalars['String']>;
  readonly created: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly ipfs?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type UsersWhere = {
  readonly created?: InputMaybe<Scalars['Int']>;
  readonly created_gt?: InputMaybe<Scalars['Int']>;
  readonly created_gte?: InputMaybe<Scalars['Int']>;
  readonly created_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly created_lt?: InputMaybe<Scalars['Int']>;
  readonly created_lte?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ipfs?: InputMaybe<Scalars['String']>;
  readonly ipfs_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Vote = {
  readonly __typename?: 'Vote';
  readonly app?: Maybe<Scalars['String']>;
  readonly choice: Scalars['Any'];
  readonly created: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly ipfs?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['Any']>;
  readonly proposal?: Maybe<Proposal>;
  readonly reason?: Maybe<Scalars['String']>;
  readonly space: Space;
  readonly voter: Scalars['String'];
  readonly vp?: Maybe<Scalars['Float']>;
  readonly vp_by_strategy?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly vp_state?: Maybe<Scalars['String']>;
};

export type VoteWhere = {
  readonly created?: InputMaybe<Scalars['Int']>;
  readonly created_gt?: InputMaybe<Scalars['Int']>;
  readonly created_gte?: InputMaybe<Scalars['Int']>;
  readonly created_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly created_lt?: InputMaybe<Scalars['Int']>;
  readonly created_lte?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ipfs?: InputMaybe<Scalars['String']>;
  readonly ipfs_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly proposal?: InputMaybe<Scalars['String']>;
  readonly proposal_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly space?: InputMaybe<Scalars['String']>;
  readonly space_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly voter?: InputMaybe<Scalars['String']>;
  readonly voter_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly vp?: InputMaybe<Scalars['Float']>;
  readonly vp_gt?: InputMaybe<Scalars['Float']>;
  readonly vp_gte?: InputMaybe<Scalars['Float']>;
  readonly vp_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly vp_lt?: InputMaybe<Scalars['Float']>;
  readonly vp_lte?: InputMaybe<Scalars['Float']>;
  readonly vp_state?: InputMaybe<Scalars['String']>;
  readonly vp_state_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Vp = {
  readonly __typename?: 'Vp';
  readonly vp?: Maybe<Scalars['Float']>;
  readonly vp_by_strategy?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly vp_state?: Maybe<Scalars['String']>;
};

export type SnapshotSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type SnapshotSectionQuery = { readonly __typename?: 'Query', readonly proposals?: ReadonlyArray<{ readonly __typename?: 'Proposal', readonly id: string, readonly title: string, readonly body?: string | null, readonly choices: ReadonlyArray<string | null>, readonly scores?: ReadonlyArray<number | null> | null, readonly scores_total?: number | null, readonly votes?: number | null, readonly start: number, readonly end: number, readonly snapshot?: string | null, readonly state?: string | null, readonly author: string, readonly link?: string | null, readonly space?: { readonly __typename?: 'Space', readonly id: string, readonly name?: string | null } | null } | null> | null };


export const SnapshotSectionDocument = gql`
    query SnapshotSection {
  proposals(
    where: {space_in: ["studiodao.eth"]}
    orderBy: "created"
    orderDirection: desc
    first: 1
  ) {
    id
    title
    body
    choices
    scores
    scores_total
    votes
    start
    end
    snapshot
    state
    author
    link
    space {
      id
      name
    }
  }
}
    `;

export function useSnapshotSectionQuery(options?: Omit<Urql.UseQueryArgs<SnapshotSectionQueryVariables>, 'query'>) {
  return Urql.useQuery<SnapshotSectionQuery, SnapshotSectionQueryVariables>({ query: SnapshotSectionDocument, ...options });
};