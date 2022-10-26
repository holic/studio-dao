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
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type AddToBalanceEvent = {
  readonly __typename?: 'AddToBalanceEvent';
  readonly amount: Scalars['BigInt'];
  readonly caller: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly note?: Maybe<Scalars['String']>;
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly terminal: Scalars['Bytes'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type AddToBalanceEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly note?: InputMaybe<Scalars['String']>;
  readonly note_contains?: InputMaybe<Scalars['String']>;
  readonly note_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly note_ends_with?: InputMaybe<Scalars['String']>;
  readonly note_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly note_gt?: InputMaybe<Scalars['String']>;
  readonly note_gte?: InputMaybe<Scalars['String']>;
  readonly note_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly note_lt?: InputMaybe<Scalars['String']>;
  readonly note_lte?: InputMaybe<Scalars['String']>;
  readonly note_not?: InputMaybe<Scalars['String']>;
  readonly note_not_contains?: InputMaybe<Scalars['String']>;
  readonly note_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly note_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly note_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly note_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly note_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly note_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly note_starts_with?: InputMaybe<Scalars['String']>;
  readonly note_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly terminal?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly terminal_not?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum AddToBalanceEvent_OrderBy {
  Amount = 'amount',
  Caller = 'caller',
  Id = 'id',
  Note = 'note',
  Project = 'project',
  ProjectId = 'projectId',
  Pv = 'pv',
  Terminal = 'terminal',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type BlockChangedFilter = {
  readonly number_gte: Scalars['Int'];
};

export type Block_Height = {
  readonly hash?: InputMaybe<Scalars['Bytes']>;
  readonly number?: InputMaybe<Scalars['Int']>;
  readonly number_gte?: InputMaybe<Scalars['Int']>;
};

export type DeployEtherc20ProjectPayerEvent = {
  readonly __typename?: 'DeployETHERC20ProjectPayerEvent';
  readonly address: Scalars['Bytes'];
  readonly beneficiary: Scalars['Bytes'];
  readonly caller: Scalars['Bytes'];
  readonly directory: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly memo?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['Bytes']>;
  readonly owner: Scalars['Bytes'];
  readonly preferAddToBalance: Scalars['Boolean'];
  readonly preferClaimedTokens: Scalars['Boolean'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type DeployEtherc20ProjectPayerEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly address?: InputMaybe<Scalars['Bytes']>;
  readonly address_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly address_not?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly directory?: InputMaybe<Scalars['Bytes']>;
  readonly directory_contains?: InputMaybe<Scalars['Bytes']>;
  readonly directory_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly directory_not?: InputMaybe<Scalars['Bytes']>;
  readonly directory_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly directory_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly memo?: InputMaybe<Scalars['String']>;
  readonly memo_contains?: InputMaybe<Scalars['String']>;
  readonly memo_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_gt?: InputMaybe<Scalars['String']>;
  readonly memo_gte?: InputMaybe<Scalars['String']>;
  readonly memo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_lt?: InputMaybe<Scalars['String']>;
  readonly memo_lte?: InputMaybe<Scalars['String']>;
  readonly memo_not?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly metadata?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_contains?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly metadata_not?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly owner?: InputMaybe<Scalars['Bytes']>;
  readonly owner_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly owner_not?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly preferAddToBalance?: InputMaybe<Scalars['Boolean']>;
  readonly preferAddToBalance_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferAddToBalance_not?: InputMaybe<Scalars['Boolean']>;
  readonly preferAddToBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferClaimedTokens?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimedTokens_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferClaimedTokens_not?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimedTokens_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DeployEtherc20ProjectPayerEvent_OrderBy {
  Address = 'address',
  Beneficiary = 'beneficiary',
  Caller = 'caller',
  Directory = 'directory',
  Id = 'id',
  Memo = 'memo',
  Metadata = 'metadata',
  Owner = 'owner',
  PreferAddToBalance = 'preferAddToBalance',
  PreferClaimedTokens = 'preferClaimedTokens',
  Project = 'project',
  ProjectId = 'projectId',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type DeployVeNftEvent = {
  readonly __typename?: 'DeployVeNftEvent';
  readonly id: Scalars['ID'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
  readonly veNftContract: VeNftContract;
};

export type DeployVeNftEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly veNftContract?: InputMaybe<Scalars['String']>;
  readonly veNftContract_?: InputMaybe<VeNftContract_Filter>;
  readonly veNftContract_contains?: InputMaybe<Scalars['String']>;
  readonly veNftContract_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly veNftContract_ends_with?: InputMaybe<Scalars['String']>;
  readonly veNftContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly veNftContract_gt?: InputMaybe<Scalars['String']>;
  readonly veNftContract_gte?: InputMaybe<Scalars['String']>;
  readonly veNftContract_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly veNftContract_lt?: InputMaybe<Scalars['String']>;
  readonly veNftContract_lte?: InputMaybe<Scalars['String']>;
  readonly veNftContract_not?: InputMaybe<Scalars['String']>;
  readonly veNftContract_not_contains?: InputMaybe<Scalars['String']>;
  readonly veNftContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly veNftContract_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly veNftContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly veNftContract_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly veNftContract_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly veNftContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly veNftContract_starts_with?: InputMaybe<Scalars['String']>;
  readonly veNftContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum DeployVeNftEvent_OrderBy {
  Id = 'id',
  Project = 'project',
  ProjectId = 'projectId',
  Timestamp = 'timestamp',
  TxHash = 'txHash',
  VeNftContract = 'veNftContract'
}

export type DeployedErc20Event = {
  readonly __typename?: 'DeployedERC20Event';
  readonly address?: Maybe<Scalars['Bytes']>;
  readonly id: Scalars['ID'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly symbol: Scalars['String'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type DeployedErc20Event_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly address?: InputMaybe<Scalars['Bytes']>;
  readonly address_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly address_not?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol?: InputMaybe<Scalars['String']>;
  readonly symbol_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_gt?: InputMaybe<Scalars['String']>;
  readonly symbol_gte?: InputMaybe<Scalars['String']>;
  readonly symbol_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_lt?: InputMaybe<Scalars['String']>;
  readonly symbol_lte?: InputMaybe<Scalars['String']>;
  readonly symbol_not?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DeployedErc20Event_OrderBy {
  Address = 'address',
  Id = 'id',
  Project = 'project',
  ProjectId = 'projectId',
  Pv = 'pv',
  Symbol = 'symbol',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type DistributePayoutsEvent = {
  readonly __typename?: 'DistributePayoutsEvent';
  readonly amount: Scalars['BigInt'];
  readonly beneficiary: Scalars['Bytes'];
  readonly beneficiaryDistributionAmount: Scalars['BigInt'];
  readonly caller: Scalars['Bytes'];
  readonly distributedAmount: Scalars['BigInt'];
  readonly fee: Scalars['BigInt'];
  readonly fundingCycleConfiguration: Scalars['BigInt'];
  readonly fundingCycleNumber: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly memo: Scalars['String'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly splitDistributions: ReadonlyArray<DistributeToPayoutSplitEvent>;
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};


export type DistributePayoutsEventSplitDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};

export type DistributePayoutsEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiaryDistributionAmount?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryDistributionAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryDistributionAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryDistributionAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiaryDistributionAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryDistributionAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryDistributionAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryDistributionAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly distributedAmount?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly distributedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fee?: InputMaybe<Scalars['BigInt']>;
  readonly fee_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fee_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fee_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fee_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fee_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fee_not?: InputMaybe<Scalars['BigInt']>;
  readonly fee_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleConfiguration?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleConfiguration_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_not?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleNumber?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_gt?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_gte?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly fundingCycleNumber_lt?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_lte?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_not?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly memo?: InputMaybe<Scalars['String']>;
  readonly memo_contains?: InputMaybe<Scalars['String']>;
  readonly memo_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_gt?: InputMaybe<Scalars['String']>;
  readonly memo_gte?: InputMaybe<Scalars['String']>;
  readonly memo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_lt?: InputMaybe<Scalars['String']>;
  readonly memo_lte?: InputMaybe<Scalars['String']>;
  readonly memo_not?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly splitDistributions_?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DistributePayoutsEvent_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  BeneficiaryDistributionAmount = 'beneficiaryDistributionAmount',
  Caller = 'caller',
  DistributedAmount = 'distributedAmount',
  Fee = 'fee',
  FundingCycleConfiguration = 'fundingCycleConfiguration',
  FundingCycleNumber = 'fundingCycleNumber',
  Id = 'id',
  Memo = 'memo',
  Project = 'project',
  ProjectId = 'projectId',
  SplitDistributions = 'splitDistributions',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type DistributeReservedTokensEvent = {
  readonly __typename?: 'DistributeReservedTokensEvent';
  readonly beneficiary: Scalars['Bytes'];
  readonly beneficiaryTokenCount: Scalars['BigInt'];
  readonly caller: Scalars['Bytes'];
  readonly fundingCycleNumber: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly memo: Scalars['String'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly splitDistributions: ReadonlyArray<DistributeToReservedTokenSplitEvent>;
  readonly timestamp: Scalars['Int'];
  readonly tokenCount: Scalars['BigInt'];
  readonly txHash: Scalars['Bytes'];
};


export type DistributeReservedTokensEventSplitDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};

export type DistributeReservedTokensEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiaryTokenCount?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTokenCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiaryTokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTokenCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTokenCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly fundingCycleNumber?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_gt?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_gte?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly fundingCycleNumber_lt?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_lte?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_not?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly memo?: InputMaybe<Scalars['String']>;
  readonly memo_contains?: InputMaybe<Scalars['String']>;
  readonly memo_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_gt?: InputMaybe<Scalars['String']>;
  readonly memo_gte?: InputMaybe<Scalars['String']>;
  readonly memo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_lt?: InputMaybe<Scalars['String']>;
  readonly memo_lte?: InputMaybe<Scalars['String']>;
  readonly memo_not?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly splitDistributions_?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly tokenCount?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DistributeReservedTokensEvent_OrderBy {
  Beneficiary = 'beneficiary',
  BeneficiaryTokenCount = 'beneficiaryTokenCount',
  Caller = 'caller',
  FundingCycleNumber = 'fundingCycleNumber',
  Id = 'id',
  Memo = 'memo',
  Project = 'project',
  ProjectId = 'projectId',
  SplitDistributions = 'splitDistributions',
  Timestamp = 'timestamp',
  TokenCount = 'tokenCount',
  TxHash = 'txHash'
}

export type DistributeToPayoutModEvent = {
  readonly __typename?: 'DistributeToPayoutModEvent';
  readonly caller: Scalars['Bytes'];
  readonly fundingCycleId: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly modAllocator: Scalars['Bytes'];
  readonly modBeneficiary: Scalars['Bytes'];
  readonly modCut: Scalars['BigInt'];
  readonly modPreferUnstaked: Scalars['Boolean'];
  readonly modProjectId: Scalars['Int'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly tapEvent: TapEvent;
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type DistributeToPayoutModEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly modAllocator?: InputMaybe<Scalars['Bytes']>;
  readonly modAllocator_contains?: InputMaybe<Scalars['Bytes']>;
  readonly modAllocator_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly modAllocator_not?: InputMaybe<Scalars['Bytes']>;
  readonly modAllocator_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly modAllocator_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly modBeneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly modBeneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly modCut?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_gt?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_gte?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly modCut_lt?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_lte?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_not?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly modPreferUnstaked?: InputMaybe<Scalars['Boolean']>;
  readonly modPreferUnstaked_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly modPreferUnstaked_not?: InputMaybe<Scalars['Boolean']>;
  readonly modPreferUnstaked_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly modProjectId?: InputMaybe<Scalars['Int']>;
  readonly modProjectId_gt?: InputMaybe<Scalars['Int']>;
  readonly modProjectId_gte?: InputMaybe<Scalars['Int']>;
  readonly modProjectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly modProjectId_lt?: InputMaybe<Scalars['Int']>;
  readonly modProjectId_lte?: InputMaybe<Scalars['Int']>;
  readonly modProjectId_not?: InputMaybe<Scalars['Int']>;
  readonly modProjectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent?: InputMaybe<Scalars['String']>;
  readonly tapEvent_?: InputMaybe<TapEvent_Filter>;
  readonly tapEvent_contains?: InputMaybe<Scalars['String']>;
  readonly tapEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_gt?: InputMaybe<Scalars['String']>;
  readonly tapEvent_gte?: InputMaybe<Scalars['String']>;
  readonly tapEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tapEvent_lt?: InputMaybe<Scalars['String']>;
  readonly tapEvent_lte?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tapEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DistributeToPayoutModEvent_OrderBy {
  Caller = 'caller',
  FundingCycleId = 'fundingCycleId',
  Id = 'id',
  ModAllocator = 'modAllocator',
  ModBeneficiary = 'modBeneficiary',
  ModCut = 'modCut',
  ModPreferUnstaked = 'modPreferUnstaked',
  ModProjectId = 'modProjectId',
  Project = 'project',
  ProjectId = 'projectId',
  TapEvent = 'tapEvent',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type DistributeToPayoutSplitEvent = {
  readonly __typename?: 'DistributeToPayoutSplitEvent';
  readonly allocator: Scalars['Bytes'];
  readonly amount: Scalars['BigInt'];
  readonly beneficiary: Scalars['Bytes'];
  readonly caller: Scalars['Bytes'];
  readonly distributePayoutsEvent: DistributePayoutsEvent;
  readonly domain: Scalars['BigInt'];
  readonly group: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly lockedUntil: Scalars['Int'];
  readonly percent: Scalars['Int'];
  readonly preferAddToBalance: Scalars['Boolean'];
  readonly preferClaimed: Scalars['Boolean'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly splitProjectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type DistributeToPayoutSplitEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly allocator?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_contains?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly allocator_not?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly distributePayoutsEvent?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_?: InputMaybe<DistributePayoutsEvent_Filter>;
  readonly distributePayoutsEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributePayoutsEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributePayoutsEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly domain?: InputMaybe<Scalars['BigInt']>;
  readonly domain_gt?: InputMaybe<Scalars['BigInt']>;
  readonly domain_gte?: InputMaybe<Scalars['BigInt']>;
  readonly domain_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly domain_lt?: InputMaybe<Scalars['BigInt']>;
  readonly domain_lte?: InputMaybe<Scalars['BigInt']>;
  readonly domain_not?: InputMaybe<Scalars['BigInt']>;
  readonly domain_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly group?: InputMaybe<Scalars['BigInt']>;
  readonly group_gt?: InputMaybe<Scalars['BigInt']>;
  readonly group_gte?: InputMaybe<Scalars['BigInt']>;
  readonly group_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly group_lt?: InputMaybe<Scalars['BigInt']>;
  readonly group_lte?: InputMaybe<Scalars['BigInt']>;
  readonly group_not?: InputMaybe<Scalars['BigInt']>;
  readonly group_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly lockedUntil?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_not?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly percent?: InputMaybe<Scalars['Int']>;
  readonly percent_gt?: InputMaybe<Scalars['Int']>;
  readonly percent_gte?: InputMaybe<Scalars['Int']>;
  readonly percent_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly percent_lt?: InputMaybe<Scalars['Int']>;
  readonly percent_lte?: InputMaybe<Scalars['Int']>;
  readonly percent_not?: InputMaybe<Scalars['Int']>;
  readonly percent_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly preferAddToBalance?: InputMaybe<Scalars['Boolean']>;
  readonly preferAddToBalance_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferAddToBalance_not?: InputMaybe<Scalars['Boolean']>;
  readonly preferAddToBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferClaimed?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimed_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferClaimed_not?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimed_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly splitProjectId?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_gt?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_gte?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly splitProjectId_lt?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_lte?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_not?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DistributeToPayoutSplitEvent_OrderBy {
  Allocator = 'allocator',
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Caller = 'caller',
  DistributePayoutsEvent = 'distributePayoutsEvent',
  Domain = 'domain',
  Group = 'group',
  Id = 'id',
  LockedUntil = 'lockedUntil',
  Percent = 'percent',
  PreferAddToBalance = 'preferAddToBalance',
  PreferClaimed = 'preferClaimed',
  Project = 'project',
  ProjectId = 'projectId',
  SplitProjectId = 'splitProjectId',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type DistributeToReservedTokenSplitEvent = {
  readonly __typename?: 'DistributeToReservedTokenSplitEvent';
  readonly allocator: Scalars['Bytes'];
  readonly beneficiary: Scalars['Bytes'];
  readonly caller: Scalars['Bytes'];
  readonly distributeReservedTokensEvent: DistributeReservedTokensEvent;
  readonly id: Scalars['ID'];
  readonly lockedUntil: Scalars['Int'];
  readonly percent: Scalars['Int'];
  readonly preferClaimed: Scalars['Boolean'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly splitProjectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly tokenCount: Scalars['BigInt'];
  readonly txHash: Scalars['Bytes'];
};

export type DistributeToReservedTokenSplitEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly allocator?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_contains?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly allocator_not?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly allocator_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly distributeReservedTokensEvent?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_?: InputMaybe<DistributeReservedTokensEvent_Filter>;
  readonly distributeReservedTokensEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeReservedTokensEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeReservedTokensEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly lockedUntil?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_not?: InputMaybe<Scalars['Int']>;
  readonly lockedUntil_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly percent?: InputMaybe<Scalars['Int']>;
  readonly percent_gt?: InputMaybe<Scalars['Int']>;
  readonly percent_gte?: InputMaybe<Scalars['Int']>;
  readonly percent_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly percent_lt?: InputMaybe<Scalars['Int']>;
  readonly percent_lte?: InputMaybe<Scalars['Int']>;
  readonly percent_not?: InputMaybe<Scalars['Int']>;
  readonly percent_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly preferClaimed?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimed_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferClaimed_not?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimed_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly splitProjectId?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_gt?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_gte?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly splitProjectId_lt?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_lte?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_not?: InputMaybe<Scalars['Int']>;
  readonly splitProjectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly tokenCount?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly tokenCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DistributeToReservedTokenSplitEvent_OrderBy {
  Allocator = 'allocator',
  Beneficiary = 'beneficiary',
  Caller = 'caller',
  DistributeReservedTokensEvent = 'distributeReservedTokensEvent',
  Id = 'id',
  LockedUntil = 'lockedUntil',
  Percent = 'percent',
  PreferClaimed = 'preferClaimed',
  Project = 'project',
  ProjectId = 'projectId',
  SplitProjectId = 'splitProjectId',
  Timestamp = 'timestamp',
  TokenCount = 'tokenCount',
  TxHash = 'txHash'
}

export type DistributeToTicketModEvent = {
  readonly __typename?: 'DistributeToTicketModEvent';
  readonly caller: Scalars['Bytes'];
  readonly fundingCycleId: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly modBeneficiary: Scalars['Bytes'];
  readonly modCut: Scalars['BigInt'];
  readonly modPreferUnstaked: Scalars['Boolean'];
  readonly printReservesEvent: PrintReservesEvent;
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type DistributeToTicketModEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly modBeneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly modBeneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly modBeneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly modCut?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_gt?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_gte?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly modCut_lt?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_lte?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_not?: InputMaybe<Scalars['BigInt']>;
  readonly modCut_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly modPreferUnstaked?: InputMaybe<Scalars['Boolean']>;
  readonly modPreferUnstaked_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly modPreferUnstaked_not?: InputMaybe<Scalars['Boolean']>;
  readonly modPreferUnstaked_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly printReservesEvent?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_?: InputMaybe<PrintReservesEvent_Filter>;
  readonly printReservesEvent_contains?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_gt?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_gte?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly printReservesEvent_lt?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_lte?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly printReservesEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum DistributeToTicketModEvent_OrderBy {
  Caller = 'caller',
  FundingCycleId = 'fundingCycleId',
  Id = 'id',
  ModBeneficiary = 'modBeneficiary',
  ModCut = 'modCut',
  ModPreferUnstaked = 'modPreferUnstaked',
  PrintReservesEvent = 'printReservesEvent',
  Project = 'project',
  ProjectId = 'projectId',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type EnsNode = {
  readonly __typename?: 'ENSNode';
  readonly id: Scalars['ID'];
  readonly projectId?: Maybe<Scalars['Int']>;
};

export type EnsNode_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export enum EnsNode_OrderBy {
  Id = 'id',
  ProjectId = 'projectId'
}

export type Etherc20ProjectPayer = {
  readonly __typename?: 'ETHERC20ProjectPayer';
  readonly address: Scalars['Bytes'];
  readonly beneficiary: Scalars['Bytes'];
  readonly directory: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly memo?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['Bytes']>;
  readonly owner: Scalars['Bytes'];
  readonly preferAddToBalance: Scalars['Boolean'];
  readonly preferClaimedTokens: Scalars['Boolean'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
};

export type Etherc20ProjectPayer_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly address?: InputMaybe<Scalars['Bytes']>;
  readonly address_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly address_not?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly directory?: InputMaybe<Scalars['Bytes']>;
  readonly directory_contains?: InputMaybe<Scalars['Bytes']>;
  readonly directory_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly directory_not?: InputMaybe<Scalars['Bytes']>;
  readonly directory_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly directory_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly memo?: InputMaybe<Scalars['String']>;
  readonly memo_contains?: InputMaybe<Scalars['String']>;
  readonly memo_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_gt?: InputMaybe<Scalars['String']>;
  readonly memo_gte?: InputMaybe<Scalars['String']>;
  readonly memo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_lt?: InputMaybe<Scalars['String']>;
  readonly memo_lte?: InputMaybe<Scalars['String']>;
  readonly memo_not?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly metadata?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_contains?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly metadata_not?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly metadata_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly owner?: InputMaybe<Scalars['Bytes']>;
  readonly owner_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly owner_not?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly preferAddToBalance?: InputMaybe<Scalars['Boolean']>;
  readonly preferAddToBalance_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferAddToBalance_not?: InputMaybe<Scalars['Boolean']>;
  readonly preferAddToBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferClaimedTokens?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimedTokens_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly preferClaimedTokens_not?: InputMaybe<Scalars['Boolean']>;
  readonly preferClaimedTokens_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Etherc20ProjectPayer_OrderBy {
  Address = 'address',
  Beneficiary = 'beneficiary',
  Directory = 'directory',
  Id = 'id',
  Memo = 'memo',
  Metadata = 'metadata',
  Owner = 'owner',
  PreferAddToBalance = 'preferAddToBalance',
  PreferClaimedTokens = 'preferClaimedTokens',
  Project = 'project',
  ProjectId = 'projectId'
}

export type Jb721DelegateToken = {
  readonly __typename?: 'JB721DelegateToken';
  readonly address: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly owner: Participant;
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly symbol: Scalars['String'];
  readonly tokenId: Scalars['BigInt'];
  readonly tokenUri: Scalars['String'];
};

export type Jb721DelegateToken_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly address?: InputMaybe<Scalars['Bytes']>;
  readonly address_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly address_not?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly name_contains?: InputMaybe<Scalars['String']>;
  readonly name_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  readonly name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_gt?: InputMaybe<Scalars['String']>;
  readonly name_gte?: InputMaybe<Scalars['String']>;
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: InputMaybe<Scalars['String']>;
  readonly name_lte?: InputMaybe<Scalars['String']>;
  readonly name_not?: InputMaybe<Scalars['String']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  readonly name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
  readonly name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner?: InputMaybe<Scalars['String']>;
  readonly owner_?: InputMaybe<Participant_Filter>;
  readonly owner_contains?: InputMaybe<Scalars['String']>;
  readonly owner_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_ends_with?: InputMaybe<Scalars['String']>;
  readonly owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_gt?: InputMaybe<Scalars['String']>;
  readonly owner_gte?: InputMaybe<Scalars['String']>;
  readonly owner_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly owner_lt?: InputMaybe<Scalars['String']>;
  readonly owner_lte?: InputMaybe<Scalars['String']>;
  readonly owner_not?: InputMaybe<Scalars['String']>;
  readonly owner_not_contains?: InputMaybe<Scalars['String']>;
  readonly owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly owner_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_starts_with?: InputMaybe<Scalars['String']>;
  readonly owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol?: InputMaybe<Scalars['String']>;
  readonly symbol_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_gt?: InputMaybe<Scalars['String']>;
  readonly symbol_gte?: InputMaybe<Scalars['String']>;
  readonly symbol_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_lt?: InputMaybe<Scalars['String']>;
  readonly symbol_lte?: InputMaybe<Scalars['String']>;
  readonly symbol_not?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenId?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_not?: InputMaybe<Scalars['BigInt']>;
  readonly tokenId_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenUri?: InputMaybe<Scalars['String']>;
  readonly tokenUri_contains?: InputMaybe<Scalars['String']>;
  readonly tokenUri_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_ends_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_gt?: InputMaybe<Scalars['String']>;
  readonly tokenUri_gte?: InputMaybe<Scalars['String']>;
  readonly tokenUri_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenUri_lt?: InputMaybe<Scalars['String']>;
  readonly tokenUri_lte?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_contains?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenUri_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_starts_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Jb721DelegateToken_OrderBy {
  Address = 'address',
  Id = 'id',
  Name = 'name',
  Owner = 'owner',
  Project = 'project',
  ProjectId = 'projectId',
  Symbol = 'symbol',
  TokenId = 'tokenId',
  TokenUri = 'tokenUri'
}

export type MintTokensEvent = {
  readonly __typename?: 'MintTokensEvent';
  readonly amount: Scalars['BigInt'];
  readonly beneficiary: Scalars['Bytes'];
  readonly caller: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly memo: Scalars['String'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type MintTokensEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly memo?: InputMaybe<Scalars['String']>;
  readonly memo_contains?: InputMaybe<Scalars['String']>;
  readonly memo_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_gt?: InputMaybe<Scalars['String']>;
  readonly memo_gte?: InputMaybe<Scalars['String']>;
  readonly memo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_lt?: InputMaybe<Scalars['String']>;
  readonly memo_lte?: InputMaybe<Scalars['String']>;
  readonly memo_not?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum MintTokensEvent_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Caller = 'caller',
  Id = 'id',
  Memo = 'memo',
  Project = 'project',
  ProjectId = 'projectId',
  Pv = 'pv',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Participant = {
  readonly __typename?: 'Participant';
  readonly balance: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly jb721DelegateTokens: ReadonlyArray<Jb721DelegateToken>;
  readonly lastPaidTimestamp: Scalars['Int'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly stakedBalance: Scalars['BigInt'];
  readonly totalPaid: Scalars['BigInt'];
  readonly unstakedBalance: Scalars['BigInt'];
  readonly wallet: Scalars['Bytes'];
};


export type ParticipantJb721DelegateTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Jb721DelegateToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Jb721DelegateToken_Filter>;
};

export type Participant_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly balance?: InputMaybe<Scalars['BigInt']>;
  readonly balance_gt?: InputMaybe<Scalars['BigInt']>;
  readonly balance_gte?: InputMaybe<Scalars['BigInt']>;
  readonly balance_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly balance_lt?: InputMaybe<Scalars['BigInt']>;
  readonly balance_lte?: InputMaybe<Scalars['BigInt']>;
  readonly balance_not?: InputMaybe<Scalars['BigInt']>;
  readonly balance_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly jb721DelegateTokens_?: InputMaybe<Jb721DelegateToken_Filter>;
  readonly lastPaidTimestamp?: InputMaybe<Scalars['Int']>;
  readonly lastPaidTimestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly lastPaidTimestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly lastPaidTimestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lastPaidTimestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly lastPaidTimestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly lastPaidTimestamp_not?: InputMaybe<Scalars['Int']>;
  readonly lastPaidTimestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly stakedBalance?: InputMaybe<Scalars['BigInt']>;
  readonly stakedBalance_gt?: InputMaybe<Scalars['BigInt']>;
  readonly stakedBalance_gte?: InputMaybe<Scalars['BigInt']>;
  readonly stakedBalance_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly stakedBalance_lt?: InputMaybe<Scalars['BigInt']>;
  readonly stakedBalance_lte?: InputMaybe<Scalars['BigInt']>;
  readonly stakedBalance_not?: InputMaybe<Scalars['BigInt']>;
  readonly stakedBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalPaid?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_gt?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_gte?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalPaid_lt?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_lte?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_not?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly unstakedBalance?: InputMaybe<Scalars['BigInt']>;
  readonly unstakedBalance_gt?: InputMaybe<Scalars['BigInt']>;
  readonly unstakedBalance_gte?: InputMaybe<Scalars['BigInt']>;
  readonly unstakedBalance_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly unstakedBalance_lt?: InputMaybe<Scalars['BigInt']>;
  readonly unstakedBalance_lte?: InputMaybe<Scalars['BigInt']>;
  readonly unstakedBalance_not?: InputMaybe<Scalars['BigInt']>;
  readonly unstakedBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly wallet?: InputMaybe<Scalars['Bytes']>;
  readonly wallet_contains?: InputMaybe<Scalars['Bytes']>;
  readonly wallet_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly wallet_not?: InputMaybe<Scalars['Bytes']>;
  readonly wallet_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly wallet_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum Participant_OrderBy {
  Balance = 'balance',
  Id = 'id',
  Jb721DelegateTokens = 'jb721DelegateTokens',
  LastPaidTimestamp = 'lastPaidTimestamp',
  Project = 'project',
  ProjectId = 'projectId',
  Pv = 'pv',
  StakedBalance = 'stakedBalance',
  TotalPaid = 'totalPaid',
  UnstakedBalance = 'unstakedBalance',
  Wallet = 'wallet'
}

export type PayEvent = {
  readonly __typename?: 'PayEvent';
  readonly amount: Scalars['BigInt'];
  readonly beneficiary: Scalars['Bytes'];
  readonly caller: Scalars['Bytes'];
  readonly feeFromV2Project?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly note: Scalars['String'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly terminal: Scalars['Bytes'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type PayEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeFromV2Project?: InputMaybe<Scalars['Int']>;
  readonly feeFromV2Project_gt?: InputMaybe<Scalars['Int']>;
  readonly feeFromV2Project_gte?: InputMaybe<Scalars['Int']>;
  readonly feeFromV2Project_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly feeFromV2Project_lt?: InputMaybe<Scalars['Int']>;
  readonly feeFromV2Project_lte?: InputMaybe<Scalars['Int']>;
  readonly feeFromV2Project_not?: InputMaybe<Scalars['Int']>;
  readonly feeFromV2Project_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly note?: InputMaybe<Scalars['String']>;
  readonly note_contains?: InputMaybe<Scalars['String']>;
  readonly note_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly note_ends_with?: InputMaybe<Scalars['String']>;
  readonly note_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly note_gt?: InputMaybe<Scalars['String']>;
  readonly note_gte?: InputMaybe<Scalars['String']>;
  readonly note_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly note_lt?: InputMaybe<Scalars['String']>;
  readonly note_lte?: InputMaybe<Scalars['String']>;
  readonly note_not?: InputMaybe<Scalars['String']>;
  readonly note_not_contains?: InputMaybe<Scalars['String']>;
  readonly note_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly note_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly note_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly note_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly note_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly note_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly note_starts_with?: InputMaybe<Scalars['String']>;
  readonly note_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly terminal?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly terminal_not?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum PayEvent_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Caller = 'caller',
  FeeFromV2Project = 'feeFromV2Project',
  Id = 'id',
  Note = 'note',
  Project = 'project',
  ProjectId = 'projectId',
  Pv = 'pv',
  Terminal = 'terminal',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type PrintReservesEvent = {
  readonly __typename?: 'PrintReservesEvent';
  readonly beneficiary: Scalars['Bytes'];
  readonly beneficiaryTicketAmount: Scalars['BigInt'];
  readonly caller: Scalars['Bytes'];
  readonly count: Scalars['BigInt'];
  readonly distributions: ReadonlyArray<DistributeToTicketModEvent>;
  readonly fundingCycleId: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};


export type PrintReservesEventDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToTicketModEvent_Filter>;
};

export type PrintReservesEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiaryTicketAmount?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTicketAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTicketAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTicketAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiaryTicketAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTicketAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTicketAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTicketAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly count?: InputMaybe<Scalars['BigInt']>;
  readonly count_gt?: InputMaybe<Scalars['BigInt']>;
  readonly count_gte?: InputMaybe<Scalars['BigInt']>;
  readonly count_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly count_lt?: InputMaybe<Scalars['BigInt']>;
  readonly count_lte?: InputMaybe<Scalars['BigInt']>;
  readonly count_not?: InputMaybe<Scalars['BigInt']>;
  readonly count_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly distributions_?: InputMaybe<DistributeToTicketModEvent_Filter>;
  readonly fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum PrintReservesEvent_OrderBy {
  Beneficiary = 'beneficiary',
  BeneficiaryTicketAmount = 'beneficiaryTicketAmount',
  Caller = 'caller',
  Count = 'count',
  Distributions = 'distributions',
  FundingCycleId = 'fundingCycleId',
  Id = 'id',
  Project = 'project',
  ProjectId = 'projectId',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type Project = {
  readonly __typename?: 'Project';
  readonly addToBalanceEvents: ReadonlyArray<AddToBalanceEvent>;
  readonly createdAt: Scalars['Int'];
  readonly createdWithinTrendingWindow: Scalars['Boolean'];
  readonly currentBalance: Scalars['BigInt'];
  readonly deployVeNftEvents: ReadonlyArray<DeployVeNftEvent>;
  readonly deployedERC20Events: ReadonlyArray<DeployedErc20Event>;
  readonly deployedERC20s: ReadonlyArray<DeployedErc20Event>;
  readonly distributePayoutsEvents: ReadonlyArray<DistributePayoutsEvent>;
  readonly distributeReservedTokensEvents: ReadonlyArray<DistributeReservedTokensEvent>;
  readonly distributeToPayoutModEvents: ReadonlyArray<DistributeToPayoutModEvent>;
  readonly distributeToPayoutSplitEvents: ReadonlyArray<DistributeToPayoutSplitEvent>;
  readonly distributeToReservedTokenSplitEvents: ReadonlyArray<DistributeToReservedTokenSplitEvent>;
  readonly distributeToTicketModEvents: ReadonlyArray<DistributeToTicketModEvent>;
  readonly ethErc20ProjectPayers: ReadonlyArray<Etherc20ProjectPayer>;
  readonly handle?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly jb721DelegateTokens: ReadonlyArray<Jb721DelegateToken>;
  readonly metadataDomain?: Maybe<Scalars['BigInt']>;
  readonly metadataUri?: Maybe<Scalars['String']>;
  readonly mintTokensEvents: ReadonlyArray<MintTokensEvent>;
  readonly owner: Scalars['Bytes'];
  readonly participants: ReadonlyArray<Participant>;
  readonly payEvents: ReadonlyArray<PayEvent>;
  readonly printReservesEvents: ReadonlyArray<PrintReservesEvent>;
  readonly projectEvents: ReadonlyArray<ProjectEvent>;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly redeemEvents: ReadonlyArray<RedeemEvent>;
  readonly tapEvents: ReadonlyArray<TapEvent>;
  readonly terminal?: Maybe<Scalars['Bytes']>;
  readonly totalPaid: Scalars['BigInt'];
  readonly totalRedeemed: Scalars['BigInt'];
  readonly trendingPaymentsCount: Scalars['Int'];
  readonly trendingScore: Scalars['BigInt'];
  readonly trendingVolume: Scalars['BigInt'];
  readonly useAllowanceEvents: ReadonlyArray<UseAllowanceEvent>;
  readonly veNftContract?: Maybe<VeNftContract>;
};


export type ProjectAddToBalanceEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddToBalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AddToBalanceEvent_Filter>;
};


export type ProjectDeployVeNftEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployVeNftEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DeployVeNftEvent_Filter>;
};


export type ProjectDeployedErc20EventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedErc20Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DeployedErc20Event_Filter>;
};


export type ProjectDeployedErc20sArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedErc20Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DeployedErc20Event_Filter>;
};


export type ProjectDistributePayoutsEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributePayoutsEvent_Filter>;
};


export type ProjectDistributeReservedTokensEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeReservedTokensEvent_Filter>;
};


export type ProjectDistributeToPayoutModEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToPayoutModEvent_Filter>;
};


export type ProjectDistributeToPayoutSplitEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};


export type ProjectDistributeToReservedTokenSplitEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};


export type ProjectDistributeToTicketModEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToTicketModEvent_Filter>;
};


export type ProjectEthErc20ProjectPayersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Etherc20ProjectPayer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Etherc20ProjectPayer_Filter>;
};


export type ProjectJb721DelegateTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Jb721DelegateToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Jb721DelegateToken_Filter>;
};


export type ProjectMintTokensEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MintTokensEvent_Filter>;
};


export type ProjectParticipantsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Participant_Filter>;
};


export type ProjectPayEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PayEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PayEvent_Filter>;
};


export type ProjectPrintReservesEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PrintReservesEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PrintReservesEvent_Filter>;
};


export type ProjectProjectEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectEvent_Filter>;
};


export type ProjectRedeemEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RedeemEvent_Filter>;
};


export type ProjectTapEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TapEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TapEvent_Filter>;
};


export type ProjectUseAllowanceEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UseAllowanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UseAllowanceEvent_Filter>;
};

export type ProjectCreateEvent = {
  readonly __typename?: 'ProjectCreateEvent';
  readonly caller: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type ProjectCreateEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum ProjectCreateEvent_OrderBy {
  Caller = 'caller',
  Id = 'id',
  Project = 'project',
  ProjectId = 'projectId',
  Pv = 'pv',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type ProjectEvent = {
  readonly __typename?: 'ProjectEvent';
  readonly addToBalanceEvent?: Maybe<AddToBalanceEvent>;
  readonly deployETHERC20ProjectPayerEvent?: Maybe<DeployEtherc20ProjectPayerEvent>;
  readonly deployVeNftEvent?: Maybe<DeployVeNftEvent>;
  readonly deployedERC20Event?: Maybe<DeployedErc20Event>;
  readonly distributePayoutsEvent?: Maybe<DistributePayoutsEvent>;
  readonly distributeReservedTokensEvent?: Maybe<DistributeReservedTokensEvent>;
  readonly distributeToPayoutModEvent?: Maybe<DistributeToPayoutModEvent>;
  readonly distributeToPayoutSplitEvent?: Maybe<DistributeToPayoutSplitEvent>;
  readonly distributeToReservedTokenSplitEvent?: Maybe<DistributeToReservedTokenSplitEvent>;
  readonly distributeToTicketModEvent?: Maybe<DistributeToTicketModEvent>;
  readonly id: Scalars['ID'];
  readonly mintTokensEvent?: Maybe<MintTokensEvent>;
  readonly payEvent?: Maybe<PayEvent>;
  readonly printReservesEvent?: Maybe<PrintReservesEvent>;
  readonly project: Project;
  readonly projectCreateEvent?: Maybe<ProjectCreateEvent>;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly redeemEvent?: Maybe<RedeemEvent>;
  readonly tapEvent?: Maybe<TapEvent>;
  readonly terminal?: Maybe<Scalars['Bytes']>;
  readonly timestamp: Scalars['Int'];
  readonly useAllowanceEvent?: Maybe<UseAllowanceEvent>;
};

export type ProjectEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly addToBalanceEvent?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_?: InputMaybe<AddToBalanceEvent_Filter>;
  readonly addToBalanceEvent_contains?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_gt?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_gte?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly addToBalanceEvent_lt?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_lte?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_not?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly addToBalanceEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly addToBalanceEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_?: InputMaybe<DeployEtherc20ProjectPayerEvent_Filter>;
  readonly deployETHERC20ProjectPayerEvent_contains?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_gt?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_gte?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly deployETHERC20ProjectPayerEvent_lt?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_lte?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_not?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly deployETHERC20ProjectPayerEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly deployETHERC20ProjectPayerEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_?: InputMaybe<DeployVeNftEvent_Filter>;
  readonly deployVeNftEvent_contains?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_gt?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_gte?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly deployVeNftEvent_lt?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_lte?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_not?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly deployVeNftEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly deployVeNftEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_?: InputMaybe<DeployedErc20Event_Filter>;
  readonly deployedERC20Event_contains?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_ends_with?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_gt?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_gte?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly deployedERC20Event_lt?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_lte?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_not?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_not_contains?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly deployedERC20Event_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_starts_with?: InputMaybe<Scalars['String']>;
  readonly deployedERC20Event_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_?: InputMaybe<DistributePayoutsEvent_Filter>;
  readonly distributePayoutsEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributePayoutsEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributePayoutsEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributePayoutsEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_?: InputMaybe<DistributeReservedTokensEvent_Filter>;
  readonly distributeReservedTokensEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeReservedTokensEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeReservedTokensEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeReservedTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_?: InputMaybe<DistributeToPayoutModEvent_Filter>;
  readonly distributeToPayoutModEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToPayoutModEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToPayoutModEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutModEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
  readonly distributeToPayoutSplitEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToPayoutSplitEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToPayoutSplitEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToPayoutSplitEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
  readonly distributeToReservedTokenSplitEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToReservedTokenSplitEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToReservedTokenSplitEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToReservedTokenSplitEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_?: InputMaybe<DistributeToTicketModEvent_Filter>;
  readonly distributeToTicketModEvent_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_gt?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_gte?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToTicketModEvent_lt?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_lte?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_not?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly distributeToTicketModEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly distributeToTicketModEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly mintTokensEvent?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_?: InputMaybe<MintTokensEvent_Filter>;
  readonly mintTokensEvent_contains?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_gt?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_gte?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly mintTokensEvent_lt?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_lte?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_not?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly mintTokensEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly payEvent?: InputMaybe<Scalars['String']>;
  readonly payEvent_?: InputMaybe<PayEvent_Filter>;
  readonly payEvent_contains?: InputMaybe<Scalars['String']>;
  readonly payEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly payEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly payEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly payEvent_gt?: InputMaybe<Scalars['String']>;
  readonly payEvent_gte?: InputMaybe<Scalars['String']>;
  readonly payEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly payEvent_lt?: InputMaybe<Scalars['String']>;
  readonly payEvent_lte?: InputMaybe<Scalars['String']>;
  readonly payEvent_not?: InputMaybe<Scalars['String']>;
  readonly payEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly payEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly payEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly payEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly payEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly payEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly payEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly payEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly payEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_?: InputMaybe<PrintReservesEvent_Filter>;
  readonly printReservesEvent_contains?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_gt?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_gte?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly printReservesEvent_lt?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_lte?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly printReservesEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly printReservesEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_?: InputMaybe<ProjectCreateEvent_Filter>;
  readonly projectCreateEvent_contains?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_gt?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_gte?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly projectCreateEvent_lt?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_lte?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_not?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly projectCreateEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly projectCreateEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemEvent?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_?: InputMaybe<RedeemEvent_Filter>;
  readonly redeemEvent_contains?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_gt?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_gte?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly redeemEvent_lt?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_lte?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_not?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly redeemEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly redeemEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent?: InputMaybe<Scalars['String']>;
  readonly tapEvent_?: InputMaybe<TapEvent_Filter>;
  readonly tapEvent_contains?: InputMaybe<Scalars['String']>;
  readonly tapEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_gt?: InputMaybe<Scalars['String']>;
  readonly tapEvent_gte?: InputMaybe<Scalars['String']>;
  readonly tapEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tapEvent_lt?: InputMaybe<Scalars['String']>;
  readonly tapEvent_lte?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tapEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tapEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly tapEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly terminal?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly terminal_not?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly useAllowanceEvent?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_?: InputMaybe<UseAllowanceEvent_Filter>;
  readonly useAllowanceEvent_contains?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_gt?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_gte?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly useAllowanceEvent_lt?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_lte?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_not?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly useAllowanceEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly useAllowanceEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ProjectEvent_OrderBy {
  AddToBalanceEvent = 'addToBalanceEvent',
  DeployEtherc20ProjectPayerEvent = 'deployETHERC20ProjectPayerEvent',
  DeployVeNftEvent = 'deployVeNftEvent',
  DeployedErc20Event = 'deployedERC20Event',
  DistributePayoutsEvent = 'distributePayoutsEvent',
  DistributeReservedTokensEvent = 'distributeReservedTokensEvent',
  DistributeToPayoutModEvent = 'distributeToPayoutModEvent',
  DistributeToPayoutSplitEvent = 'distributeToPayoutSplitEvent',
  DistributeToReservedTokenSplitEvent = 'distributeToReservedTokenSplitEvent',
  DistributeToTicketModEvent = 'distributeToTicketModEvent',
  Id = 'id',
  MintTokensEvent = 'mintTokensEvent',
  PayEvent = 'payEvent',
  PrintReservesEvent = 'printReservesEvent',
  Project = 'project',
  ProjectCreateEvent = 'projectCreateEvent',
  ProjectId = 'projectId',
  Pv = 'pv',
  RedeemEvent = 'redeemEvent',
  TapEvent = 'tapEvent',
  Terminal = 'terminal',
  Timestamp = 'timestamp',
  UseAllowanceEvent = 'useAllowanceEvent'
}

export type Project_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly addToBalanceEvents_?: InputMaybe<AddToBalanceEvent_Filter>;
  readonly createdAt?: InputMaybe<Scalars['Int']>;
  readonly createdAt_gt?: InputMaybe<Scalars['Int']>;
  readonly createdAt_gte?: InputMaybe<Scalars['Int']>;
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly createdAt_lt?: InputMaybe<Scalars['Int']>;
  readonly createdAt_lte?: InputMaybe<Scalars['Int']>;
  readonly createdAt_not?: InputMaybe<Scalars['Int']>;
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly createdWithinTrendingWindow?: InputMaybe<Scalars['Boolean']>;
  readonly createdWithinTrendingWindow_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly createdWithinTrendingWindow_not?: InputMaybe<Scalars['Boolean']>;
  readonly createdWithinTrendingWindow_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly currentBalance?: InputMaybe<Scalars['BigInt']>;
  readonly currentBalance_gt?: InputMaybe<Scalars['BigInt']>;
  readonly currentBalance_gte?: InputMaybe<Scalars['BigInt']>;
  readonly currentBalance_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly currentBalance_lt?: InputMaybe<Scalars['BigInt']>;
  readonly currentBalance_lte?: InputMaybe<Scalars['BigInt']>;
  readonly currentBalance_not?: InputMaybe<Scalars['BigInt']>;
  readonly currentBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly deployVeNftEvents_?: InputMaybe<DeployVeNftEvent_Filter>;
  readonly deployedERC20Events_?: InputMaybe<DeployedErc20Event_Filter>;
  readonly deployedERC20s_?: InputMaybe<DeployedErc20Event_Filter>;
  readonly distributePayoutsEvents_?: InputMaybe<DistributePayoutsEvent_Filter>;
  readonly distributeReservedTokensEvents_?: InputMaybe<DistributeReservedTokensEvent_Filter>;
  readonly distributeToPayoutModEvents_?: InputMaybe<DistributeToPayoutModEvent_Filter>;
  readonly distributeToPayoutSplitEvents_?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
  readonly distributeToReservedTokenSplitEvents_?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
  readonly distributeToTicketModEvents_?: InputMaybe<DistributeToTicketModEvent_Filter>;
  readonly ethErc20ProjectPayers_?: InputMaybe<Etherc20ProjectPayer_Filter>;
  readonly handle?: InputMaybe<Scalars['String']>;
  readonly handle_contains?: InputMaybe<Scalars['String']>;
  readonly handle_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly handle_ends_with?: InputMaybe<Scalars['String']>;
  readonly handle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly handle_gt?: InputMaybe<Scalars['String']>;
  readonly handle_gte?: InputMaybe<Scalars['String']>;
  readonly handle_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly handle_lt?: InputMaybe<Scalars['String']>;
  readonly handle_lte?: InputMaybe<Scalars['String']>;
  readonly handle_not?: InputMaybe<Scalars['String']>;
  readonly handle_not_contains?: InputMaybe<Scalars['String']>;
  readonly handle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly handle_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly handle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly handle_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly handle_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly handle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly handle_starts_with?: InputMaybe<Scalars['String']>;
  readonly handle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly jb721DelegateTokens_?: InputMaybe<Jb721DelegateToken_Filter>;
  readonly metadataDomain?: InputMaybe<Scalars['BigInt']>;
  readonly metadataDomain_gt?: InputMaybe<Scalars['BigInt']>;
  readonly metadataDomain_gte?: InputMaybe<Scalars['BigInt']>;
  readonly metadataDomain_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly metadataDomain_lt?: InputMaybe<Scalars['BigInt']>;
  readonly metadataDomain_lte?: InputMaybe<Scalars['BigInt']>;
  readonly metadataDomain_not?: InputMaybe<Scalars['BigInt']>;
  readonly metadataDomain_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly metadataUri?: InputMaybe<Scalars['String']>;
  readonly metadataUri_contains?: InputMaybe<Scalars['String']>;
  readonly metadataUri_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly metadataUri_ends_with?: InputMaybe<Scalars['String']>;
  readonly metadataUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly metadataUri_gt?: InputMaybe<Scalars['String']>;
  readonly metadataUri_gte?: InputMaybe<Scalars['String']>;
  readonly metadataUri_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly metadataUri_lt?: InputMaybe<Scalars['String']>;
  readonly metadataUri_lte?: InputMaybe<Scalars['String']>;
  readonly metadataUri_not?: InputMaybe<Scalars['String']>;
  readonly metadataUri_not_contains?: InputMaybe<Scalars['String']>;
  readonly metadataUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly metadataUri_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly metadataUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly metadataUri_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly metadataUri_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly metadataUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly metadataUri_starts_with?: InputMaybe<Scalars['String']>;
  readonly metadataUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly mintTokensEvents_?: InputMaybe<MintTokensEvent_Filter>;
  readonly owner?: InputMaybe<Scalars['Bytes']>;
  readonly owner_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly owner_not?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly participants_?: InputMaybe<Participant_Filter>;
  readonly payEvents_?: InputMaybe<PayEvent_Filter>;
  readonly printReservesEvents_?: InputMaybe<PrintReservesEvent_Filter>;
  readonly projectEvents_?: InputMaybe<ProjectEvent_Filter>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemEvents_?: InputMaybe<RedeemEvent_Filter>;
  readonly tapEvents_?: InputMaybe<TapEvent_Filter>;
  readonly terminal?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly terminal_not?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly totalPaid?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_gt?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_gte?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalPaid_lt?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_lte?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_not?: InputMaybe<Scalars['BigInt']>;
  readonly totalPaid_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalRedeemed?: InputMaybe<Scalars['BigInt']>;
  readonly totalRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  readonly totalRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  readonly totalRedeemed_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  readonly totalRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  readonly totalRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  readonly totalRedeemed_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly trendingPaymentsCount?: InputMaybe<Scalars['Int']>;
  readonly trendingPaymentsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly trendingPaymentsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly trendingPaymentsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly trendingPaymentsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly trendingPaymentsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly trendingPaymentsCount_not?: InputMaybe<Scalars['Int']>;
  readonly trendingPaymentsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly trendingScore?: InputMaybe<Scalars['BigInt']>;
  readonly trendingScore_gt?: InputMaybe<Scalars['BigInt']>;
  readonly trendingScore_gte?: InputMaybe<Scalars['BigInt']>;
  readonly trendingScore_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly trendingScore_lt?: InputMaybe<Scalars['BigInt']>;
  readonly trendingScore_lte?: InputMaybe<Scalars['BigInt']>;
  readonly trendingScore_not?: InputMaybe<Scalars['BigInt']>;
  readonly trendingScore_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly trendingVolume?: InputMaybe<Scalars['BigInt']>;
  readonly trendingVolume_gt?: InputMaybe<Scalars['BigInt']>;
  readonly trendingVolume_gte?: InputMaybe<Scalars['BigInt']>;
  readonly trendingVolume_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly trendingVolume_lt?: InputMaybe<Scalars['BigInt']>;
  readonly trendingVolume_lte?: InputMaybe<Scalars['BigInt']>;
  readonly trendingVolume_not?: InputMaybe<Scalars['BigInt']>;
  readonly trendingVolume_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly useAllowanceEvents_?: InputMaybe<UseAllowanceEvent_Filter>;
  readonly veNftContract_?: InputMaybe<VeNftContract_Filter>;
};

export enum Project_OrderBy {
  AddToBalanceEvents = 'addToBalanceEvents',
  CreatedAt = 'createdAt',
  CreatedWithinTrendingWindow = 'createdWithinTrendingWindow',
  CurrentBalance = 'currentBalance',
  DeployVeNftEvents = 'deployVeNftEvents',
  DeployedErc20Events = 'deployedERC20Events',
  DeployedErc20s = 'deployedERC20s',
  DistributePayoutsEvents = 'distributePayoutsEvents',
  DistributeReservedTokensEvents = 'distributeReservedTokensEvents',
  DistributeToPayoutModEvents = 'distributeToPayoutModEvents',
  DistributeToPayoutSplitEvents = 'distributeToPayoutSplitEvents',
  DistributeToReservedTokenSplitEvents = 'distributeToReservedTokenSplitEvents',
  DistributeToTicketModEvents = 'distributeToTicketModEvents',
  EthErc20ProjectPayers = 'ethErc20ProjectPayers',
  Handle = 'handle',
  Id = 'id',
  Jb721DelegateTokens = 'jb721DelegateTokens',
  MetadataDomain = 'metadataDomain',
  MetadataUri = 'metadataUri',
  MintTokensEvents = 'mintTokensEvents',
  Owner = 'owner',
  Participants = 'participants',
  PayEvents = 'payEvents',
  PrintReservesEvents = 'printReservesEvents',
  ProjectEvents = 'projectEvents',
  ProjectId = 'projectId',
  Pv = 'pv',
  RedeemEvents = 'redeemEvents',
  TapEvents = 'tapEvents',
  Terminal = 'terminal',
  TotalPaid = 'totalPaid',
  TotalRedeemed = 'totalRedeemed',
  TrendingPaymentsCount = 'trendingPaymentsCount',
  TrendingScore = 'trendingScore',
  TrendingVolume = 'trendingVolume',
  UseAllowanceEvents = 'useAllowanceEvents',
  VeNftContract = 'veNftContract'
}

export type ProtocolLog = {
  readonly __typename?: 'ProtocolLog';
  readonly erc20Count: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly oldestTrendingPayEvent?: Maybe<PayEvent>;
  readonly paymentsCount: Scalars['Int'];
  readonly projectsCount: Scalars['Int'];
  readonly redeemCount: Scalars['Int'];
  readonly trendingLastUpdatedTimestamp: Scalars['Int'];
  readonly v1?: Maybe<ProtocolV1Log>;
  readonly v2?: Maybe<ProtocolV2Log>;
  readonly v3?: Maybe<ProtocolV3Log>;
  readonly volumePaid: Scalars['BigInt'];
  readonly volumeRedeemed: Scalars['BigInt'];
};

export type ProtocolLog_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly erc20Count?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly erc20Count_lt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_lte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly oldestTrendingPayEvent?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_?: InputMaybe<PayEvent_Filter>;
  readonly oldestTrendingPayEvent_contains?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_ends_with?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_gt?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_gte?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly oldestTrendingPayEvent_lt?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_lte?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_not?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_not_contains?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly oldestTrendingPayEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_starts_with?: InputMaybe<Scalars['String']>;
  readonly oldestTrendingPayEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly paymentsCount?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly paymentsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount_lt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_lte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly trendingLastUpdatedTimestamp?: InputMaybe<Scalars['Int']>;
  readonly trendingLastUpdatedTimestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly trendingLastUpdatedTimestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly trendingLastUpdatedTimestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly trendingLastUpdatedTimestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly trendingLastUpdatedTimestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly trendingLastUpdatedTimestamp_not?: InputMaybe<Scalars['Int']>;
  readonly trendingLastUpdatedTimestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly v1_?: InputMaybe<ProtocolV1Log_Filter>;
  readonly v2_?: InputMaybe<ProtocolV2Log_Filter>;
  readonly v3_?: InputMaybe<ProtocolV3Log_Filter>;
  readonly volumePaid?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumePaid_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
};

export enum ProtocolLog_OrderBy {
  Erc20Count = 'erc20Count',
  Id = 'id',
  OldestTrendingPayEvent = 'oldestTrendingPayEvent',
  PaymentsCount = 'paymentsCount',
  ProjectsCount = 'projectsCount',
  RedeemCount = 'redeemCount',
  TrendingLastUpdatedTimestamp = 'trendingLastUpdatedTimestamp',
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  VolumePaid = 'volumePaid',
  VolumeRedeemed = 'volumeRedeemed'
}

export type ProtocolV1Log = {
  readonly __typename?: 'ProtocolV1Log';
  readonly erc20Count: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly log: ProtocolLog;
  readonly paymentsCount: Scalars['Int'];
  readonly projectsCount: Scalars['Int'];
  readonly redeemCount: Scalars['Int'];
  readonly volumePaid: Scalars['BigInt'];
  readonly volumeRedeemed: Scalars['BigInt'];
};

export type ProtocolV1Log_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly erc20Count?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly erc20Count_lt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_lte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly log?: InputMaybe<Scalars['String']>;
  readonly log_?: InputMaybe<ProtocolLog_Filter>;
  readonly log_contains?: InputMaybe<Scalars['String']>;
  readonly log_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_gt?: InputMaybe<Scalars['String']>;
  readonly log_gte?: InputMaybe<Scalars['String']>;
  readonly log_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_lt?: InputMaybe<Scalars['String']>;
  readonly log_lte?: InputMaybe<Scalars['String']>;
  readonly log_not?: InputMaybe<Scalars['String']>;
  readonly log_not_contains?: InputMaybe<Scalars['String']>;
  readonly log_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly paymentsCount?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly paymentsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount_lt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_lte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly volumePaid?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumePaid_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
};

export enum ProtocolV1Log_OrderBy {
  Erc20Count = 'erc20Count',
  Id = 'id',
  Log = 'log',
  PaymentsCount = 'paymentsCount',
  ProjectsCount = 'projectsCount',
  RedeemCount = 'redeemCount',
  VolumePaid = 'volumePaid',
  VolumeRedeemed = 'volumeRedeemed'
}

export type ProtocolV2Log = {
  readonly __typename?: 'ProtocolV2Log';
  readonly erc20Count: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly log: ProtocolLog;
  readonly paymentsCount: Scalars['Int'];
  readonly projectsCount: Scalars['Int'];
  readonly redeemCount: Scalars['Int'];
  readonly volumePaid: Scalars['BigInt'];
  readonly volumeRedeemed: Scalars['BigInt'];
};

export type ProtocolV2Log_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly erc20Count?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly erc20Count_lt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_lte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly log?: InputMaybe<Scalars['String']>;
  readonly log_?: InputMaybe<ProtocolLog_Filter>;
  readonly log_contains?: InputMaybe<Scalars['String']>;
  readonly log_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_gt?: InputMaybe<Scalars['String']>;
  readonly log_gte?: InputMaybe<Scalars['String']>;
  readonly log_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_lt?: InputMaybe<Scalars['String']>;
  readonly log_lte?: InputMaybe<Scalars['String']>;
  readonly log_not?: InputMaybe<Scalars['String']>;
  readonly log_not_contains?: InputMaybe<Scalars['String']>;
  readonly log_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly paymentsCount?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly paymentsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount_lt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_lte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly volumePaid?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumePaid_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
};

export enum ProtocolV2Log_OrderBy {
  Erc20Count = 'erc20Count',
  Id = 'id',
  Log = 'log',
  PaymentsCount = 'paymentsCount',
  ProjectsCount = 'projectsCount',
  RedeemCount = 'redeemCount',
  VolumePaid = 'volumePaid',
  VolumeRedeemed = 'volumeRedeemed'
}

export type ProtocolV3Log = {
  readonly __typename?: 'ProtocolV3Log';
  readonly erc20Count: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly log: ProtocolLog;
  readonly paymentsCount: Scalars['Int'];
  readonly projectsCount: Scalars['Int'];
  readonly redeemCount: Scalars['Int'];
  readonly volumePaid: Scalars['BigInt'];
  readonly volumeRedeemed: Scalars['BigInt'];
};

export type ProtocolV3Log_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly erc20Count?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_gte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly erc20Count_lt?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_lte?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not?: InputMaybe<Scalars['Int']>;
  readonly erc20Count_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly log?: InputMaybe<Scalars['String']>;
  readonly log_?: InputMaybe<ProtocolLog_Filter>;
  readonly log_contains?: InputMaybe<Scalars['String']>;
  readonly log_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_gt?: InputMaybe<Scalars['String']>;
  readonly log_gte?: InputMaybe<Scalars['String']>;
  readonly log_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_lt?: InputMaybe<Scalars['String']>;
  readonly log_lte?: InputMaybe<Scalars['String']>;
  readonly log_not?: InputMaybe<Scalars['String']>;
  readonly log_not_contains?: InputMaybe<Scalars['String']>;
  readonly log_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly paymentsCount?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly paymentsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not?: InputMaybe<Scalars['Int']>;
  readonly paymentsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_gte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectsCount_lt?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_lte?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not?: InputMaybe<Scalars['Int']>;
  readonly projectsCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_gte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemCount_lt?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_lte?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not?: InputMaybe<Scalars['Int']>;
  readonly redeemCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly volumePaid?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumePaid_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumePaid_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  readonly volumeRedeemed_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
};

export enum ProtocolV3Log_OrderBy {
  Erc20Count = 'erc20Count',
  Id = 'id',
  Log = 'log',
  PaymentsCount = 'paymentsCount',
  ProjectsCount = 'projectsCount',
  RedeemCount = 'redeemCount',
  VolumePaid = 'volumePaid',
  VolumeRedeemed = 'volumeRedeemed'
}

export type Query = {
  readonly __typename?: 'Query';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly addToBalanceEvent?: Maybe<AddToBalanceEvent>;
  readonly addToBalanceEvents: ReadonlyArray<AddToBalanceEvent>;
  readonly deployETHERC20ProjectPayerEvent?: Maybe<DeployEtherc20ProjectPayerEvent>;
  readonly deployETHERC20ProjectPayerEvents: ReadonlyArray<DeployEtherc20ProjectPayerEvent>;
  readonly deployVeNftEvent?: Maybe<DeployVeNftEvent>;
  readonly deployVeNftEvents: ReadonlyArray<DeployVeNftEvent>;
  readonly deployedERC20Event?: Maybe<DeployedErc20Event>;
  readonly deployedERC20Events: ReadonlyArray<DeployedErc20Event>;
  readonly distributePayoutsEvent?: Maybe<DistributePayoutsEvent>;
  readonly distributePayoutsEvents: ReadonlyArray<DistributePayoutsEvent>;
  readonly distributeReservedTokensEvent?: Maybe<DistributeReservedTokensEvent>;
  readonly distributeReservedTokensEvents: ReadonlyArray<DistributeReservedTokensEvent>;
  readonly distributeToPayoutModEvent?: Maybe<DistributeToPayoutModEvent>;
  readonly distributeToPayoutModEvents: ReadonlyArray<DistributeToPayoutModEvent>;
  readonly distributeToPayoutSplitEvent?: Maybe<DistributeToPayoutSplitEvent>;
  readonly distributeToPayoutSplitEvents: ReadonlyArray<DistributeToPayoutSplitEvent>;
  readonly distributeToReservedTokenSplitEvent?: Maybe<DistributeToReservedTokenSplitEvent>;
  readonly distributeToReservedTokenSplitEvents: ReadonlyArray<DistributeToReservedTokenSplitEvent>;
  readonly distributeToTicketModEvent?: Maybe<DistributeToTicketModEvent>;
  readonly distributeToTicketModEvents: ReadonlyArray<DistributeToTicketModEvent>;
  readonly ensnode?: Maybe<EnsNode>;
  readonly ensnodes: ReadonlyArray<EnsNode>;
  readonly etherc20ProjectPayer?: Maybe<Etherc20ProjectPayer>;
  readonly etherc20ProjectPayers: ReadonlyArray<Etherc20ProjectPayer>;
  readonly jb721DelegateToken?: Maybe<Jb721DelegateToken>;
  readonly jb721DelegateTokens: ReadonlyArray<Jb721DelegateToken>;
  readonly mintTokensEvent?: Maybe<MintTokensEvent>;
  readonly mintTokensEvents: ReadonlyArray<MintTokensEvent>;
  readonly participant?: Maybe<Participant>;
  readonly participants: ReadonlyArray<Participant>;
  readonly payEvent?: Maybe<PayEvent>;
  readonly payEvents: ReadonlyArray<PayEvent>;
  readonly printReservesEvent?: Maybe<PrintReservesEvent>;
  readonly printReservesEvents: ReadonlyArray<PrintReservesEvent>;
  readonly project?: Maybe<Project>;
  readonly projectCreateEvent?: Maybe<ProjectCreateEvent>;
  readonly projectCreateEvents: ReadonlyArray<ProjectCreateEvent>;
  readonly projectEvent?: Maybe<ProjectEvent>;
  readonly projectEvents: ReadonlyArray<ProjectEvent>;
  readonly projectSearch: ReadonlyArray<Project>;
  readonly projects: ReadonlyArray<Project>;
  readonly protocolLog?: Maybe<ProtocolLog>;
  readonly protocolLogs: ReadonlyArray<ProtocolLog>;
  readonly protocolV1Log?: Maybe<ProtocolV1Log>;
  readonly protocolV1Logs: ReadonlyArray<ProtocolV1Log>;
  readonly protocolV2Log?: Maybe<ProtocolV2Log>;
  readonly protocolV2Logs: ReadonlyArray<ProtocolV2Log>;
  readonly protocolV3Log?: Maybe<ProtocolV3Log>;
  readonly protocolV3Logs: ReadonlyArray<ProtocolV3Log>;
  readonly redeemEvent?: Maybe<RedeemEvent>;
  readonly redeemEvents: ReadonlyArray<RedeemEvent>;
  readonly tapEvent?: Maybe<TapEvent>;
  readonly tapEvents: ReadonlyArray<TapEvent>;
  readonly useAllowanceEvent?: Maybe<UseAllowanceEvent>;
  readonly useAllowanceEvents: ReadonlyArray<UseAllowanceEvent>;
  readonly veNftContract?: Maybe<VeNftContract>;
  readonly veNftContracts: ReadonlyArray<VeNftContract>;
  readonly veNftToken?: Maybe<VeNftToken>;
  readonly veNftTokens: ReadonlyArray<VeNftToken>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddToBalanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddToBalanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddToBalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddToBalanceEvent_Filter>;
};


export type QueryDeployEtherc20ProjectPayerEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDeployEtherc20ProjectPayerEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployEtherc20ProjectPayerEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployEtherc20ProjectPayerEvent_Filter>;
};


export type QueryDeployVeNftEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDeployVeNftEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployVeNftEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployVeNftEvent_Filter>;
};


export type QueryDeployedErc20EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDeployedErc20EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedErc20Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployedErc20Event_Filter>;
};


export type QueryDistributePayoutsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributePayoutsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributePayoutsEvent_Filter>;
};


export type QueryDistributeReservedTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeReservedTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeReservedTokensEvent_Filter>;
};


export type QueryDistributeToPayoutModEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeToPayoutModEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToPayoutModEvent_Filter>;
};


export type QueryDistributeToPayoutSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeToPayoutSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};


export type QueryDistributeToReservedTokenSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeToReservedTokenSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};


export type QueryDistributeToTicketModEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeToTicketModEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToTicketModEvent_Filter>;
};


export type QueryEnsnodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEnsnodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EnsNode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EnsNode_Filter>;
};


export type QueryEtherc20ProjectPayerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEtherc20ProjectPayersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Etherc20ProjectPayer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Etherc20ProjectPayer_Filter>;
};


export type QueryJb721DelegateTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryJb721DelegateTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Jb721DelegateToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Jb721DelegateToken_Filter>;
};


export type QueryMintTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintTokensEvent_Filter>;
};


export type QueryParticipantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryParticipantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Participant_Filter>;
};


export type QueryPayEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPayEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PayEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PayEvent_Filter>;
};


export type QueryPrintReservesEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPrintReservesEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PrintReservesEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PrintReservesEvent_Filter>;
};


export type QueryProjectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectCreateEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectCreateEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectCreateEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectCreateEvent_Filter>;
};


export type QueryProjectEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectEvent_Filter>;
};


export type QueryProjectSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryProjectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Project_Filter>;
};


export type QueryProtocolLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolLog_Filter>;
};


export type QueryProtocolV1LogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolV1LogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV1Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolV1Log_Filter>;
};


export type QueryProtocolV2LogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolV2LogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV2Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolV2Log_Filter>;
};


export type QueryProtocolV3LogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolV3LogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV3Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolV3Log_Filter>;
};


export type QueryRedeemEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRedeemEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RedeemEvent_Filter>;
};


export type QueryTapEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTapEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TapEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TapEvent_Filter>;
};


export type QueryUseAllowanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUseAllowanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UseAllowanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UseAllowanceEvent_Filter>;
};


export type QueryVeNftContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeNftContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VeNftContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeNftContract_Filter>;
};


export type QueryVeNftTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeNftTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VeNftToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeNftToken_Filter>;
};

export type RedeemEvent = {
  readonly __typename?: 'RedeemEvent';
  readonly amount: Scalars['BigInt'];
  readonly beneficiary: Scalars['Bytes'];
  readonly caller: Scalars['Bytes'];
  readonly holder: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly pv: Scalars['String'];
  readonly returnAmount: Scalars['BigInt'];
  readonly terminal: Scalars['Bytes'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type RedeemEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly holder?: InputMaybe<Scalars['Bytes']>;
  readonly holder_contains?: InputMaybe<Scalars['Bytes']>;
  readonly holder_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly holder_not?: InputMaybe<Scalars['Bytes']>;
  readonly holder_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly holder_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv?: InputMaybe<Scalars['String']>;
  readonly pv_contains?: InputMaybe<Scalars['String']>;
  readonly pv_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_gt?: InputMaybe<Scalars['String']>;
  readonly pv_gte?: InputMaybe<Scalars['String']>;
  readonly pv_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_lt?: InputMaybe<Scalars['String']>;
  readonly pv_lte?: InputMaybe<Scalars['String']>;
  readonly pv_not?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains?: InputMaybe<Scalars['String']>;
  readonly pv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pv_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with?: InputMaybe<Scalars['String']>;
  readonly pv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly returnAmount?: InputMaybe<Scalars['BigInt']>;
  readonly returnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly returnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly returnAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly returnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly returnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly returnAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly returnAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly terminal?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly terminal_not?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly terminal_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum RedeemEvent_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Caller = 'caller',
  Holder = 'holder',
  Id = 'id',
  Project = 'project',
  ProjectId = 'projectId',
  Pv = 'pv',
  ReturnAmount = 'returnAmount',
  Terminal = 'terminal',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type Subscription = {
  readonly __typename?: 'Subscription';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly addToBalanceEvent?: Maybe<AddToBalanceEvent>;
  readonly addToBalanceEvents: ReadonlyArray<AddToBalanceEvent>;
  readonly deployETHERC20ProjectPayerEvent?: Maybe<DeployEtherc20ProjectPayerEvent>;
  readonly deployETHERC20ProjectPayerEvents: ReadonlyArray<DeployEtherc20ProjectPayerEvent>;
  readonly deployVeNftEvent?: Maybe<DeployVeNftEvent>;
  readonly deployVeNftEvents: ReadonlyArray<DeployVeNftEvent>;
  readonly deployedERC20Event?: Maybe<DeployedErc20Event>;
  readonly deployedERC20Events: ReadonlyArray<DeployedErc20Event>;
  readonly distributePayoutsEvent?: Maybe<DistributePayoutsEvent>;
  readonly distributePayoutsEvents: ReadonlyArray<DistributePayoutsEvent>;
  readonly distributeReservedTokensEvent?: Maybe<DistributeReservedTokensEvent>;
  readonly distributeReservedTokensEvents: ReadonlyArray<DistributeReservedTokensEvent>;
  readonly distributeToPayoutModEvent?: Maybe<DistributeToPayoutModEvent>;
  readonly distributeToPayoutModEvents: ReadonlyArray<DistributeToPayoutModEvent>;
  readonly distributeToPayoutSplitEvent?: Maybe<DistributeToPayoutSplitEvent>;
  readonly distributeToPayoutSplitEvents: ReadonlyArray<DistributeToPayoutSplitEvent>;
  readonly distributeToReservedTokenSplitEvent?: Maybe<DistributeToReservedTokenSplitEvent>;
  readonly distributeToReservedTokenSplitEvents: ReadonlyArray<DistributeToReservedTokenSplitEvent>;
  readonly distributeToTicketModEvent?: Maybe<DistributeToTicketModEvent>;
  readonly distributeToTicketModEvents: ReadonlyArray<DistributeToTicketModEvent>;
  readonly ensnode?: Maybe<EnsNode>;
  readonly ensnodes: ReadonlyArray<EnsNode>;
  readonly etherc20ProjectPayer?: Maybe<Etherc20ProjectPayer>;
  readonly etherc20ProjectPayers: ReadonlyArray<Etherc20ProjectPayer>;
  readonly jb721DelegateToken?: Maybe<Jb721DelegateToken>;
  readonly jb721DelegateTokens: ReadonlyArray<Jb721DelegateToken>;
  readonly mintTokensEvent?: Maybe<MintTokensEvent>;
  readonly mintTokensEvents: ReadonlyArray<MintTokensEvent>;
  readonly participant?: Maybe<Participant>;
  readonly participants: ReadonlyArray<Participant>;
  readonly payEvent?: Maybe<PayEvent>;
  readonly payEvents: ReadonlyArray<PayEvent>;
  readonly printReservesEvent?: Maybe<PrintReservesEvent>;
  readonly printReservesEvents: ReadonlyArray<PrintReservesEvent>;
  readonly project?: Maybe<Project>;
  readonly projectCreateEvent?: Maybe<ProjectCreateEvent>;
  readonly projectCreateEvents: ReadonlyArray<ProjectCreateEvent>;
  readonly projectEvent?: Maybe<ProjectEvent>;
  readonly projectEvents: ReadonlyArray<ProjectEvent>;
  readonly projects: ReadonlyArray<Project>;
  readonly protocolLog?: Maybe<ProtocolLog>;
  readonly protocolLogs: ReadonlyArray<ProtocolLog>;
  readonly protocolV1Log?: Maybe<ProtocolV1Log>;
  readonly protocolV1Logs: ReadonlyArray<ProtocolV1Log>;
  readonly protocolV2Log?: Maybe<ProtocolV2Log>;
  readonly protocolV2Logs: ReadonlyArray<ProtocolV2Log>;
  readonly protocolV3Log?: Maybe<ProtocolV3Log>;
  readonly protocolV3Logs: ReadonlyArray<ProtocolV3Log>;
  readonly redeemEvent?: Maybe<RedeemEvent>;
  readonly redeemEvents: ReadonlyArray<RedeemEvent>;
  readonly tapEvent?: Maybe<TapEvent>;
  readonly tapEvents: ReadonlyArray<TapEvent>;
  readonly useAllowanceEvent?: Maybe<UseAllowanceEvent>;
  readonly useAllowanceEvents: ReadonlyArray<UseAllowanceEvent>;
  readonly veNftContract?: Maybe<VeNftContract>;
  readonly veNftContracts: ReadonlyArray<VeNftContract>;
  readonly veNftToken?: Maybe<VeNftToken>;
  readonly veNftTokens: ReadonlyArray<VeNftToken>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddToBalanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddToBalanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddToBalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddToBalanceEvent_Filter>;
};


export type SubscriptionDeployEtherc20ProjectPayerEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDeployEtherc20ProjectPayerEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployEtherc20ProjectPayerEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployEtherc20ProjectPayerEvent_Filter>;
};


export type SubscriptionDeployVeNftEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDeployVeNftEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployVeNftEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployVeNftEvent_Filter>;
};


export type SubscriptionDeployedErc20EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDeployedErc20EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedErc20Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployedErc20Event_Filter>;
};


export type SubscriptionDistributePayoutsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributePayoutsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributePayoutsEvent_Filter>;
};


export type SubscriptionDistributeReservedTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeReservedTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeReservedTokensEvent_Filter>;
};


export type SubscriptionDistributeToPayoutModEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeToPayoutModEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToPayoutModEvent_Filter>;
};


export type SubscriptionDistributeToPayoutSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeToPayoutSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};


export type SubscriptionDistributeToReservedTokenSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeToReservedTokenSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};


export type SubscriptionDistributeToTicketModEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeToTicketModEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToTicketModEvent_Filter>;
};


export type SubscriptionEnsnodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEnsnodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EnsNode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EnsNode_Filter>;
};


export type SubscriptionEtherc20ProjectPayerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEtherc20ProjectPayersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Etherc20ProjectPayer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Etherc20ProjectPayer_Filter>;
};


export type SubscriptionJb721DelegateTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionJb721DelegateTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Jb721DelegateToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Jb721DelegateToken_Filter>;
};


export type SubscriptionMintTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintTokensEvent_Filter>;
};


export type SubscriptionParticipantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionParticipantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Participant_Filter>;
};


export type SubscriptionPayEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPayEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PayEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PayEvent_Filter>;
};


export type SubscriptionPrintReservesEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPrintReservesEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PrintReservesEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PrintReservesEvent_Filter>;
};


export type SubscriptionProjectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectCreateEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectCreateEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectCreateEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectCreateEvent_Filter>;
};


export type SubscriptionProjectEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectEvent_Filter>;
};


export type SubscriptionProjectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Project_Filter>;
};


export type SubscriptionProtocolLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolLog_Filter>;
};


export type SubscriptionProtocolV1LogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolV1LogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV1Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolV1Log_Filter>;
};


export type SubscriptionProtocolV2LogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolV2LogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV2Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolV2Log_Filter>;
};


export type SubscriptionProtocolV3LogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolV3LogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV3Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolV3Log_Filter>;
};


export type SubscriptionRedeemEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRedeemEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RedeemEvent_Filter>;
};


export type SubscriptionTapEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTapEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TapEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TapEvent_Filter>;
};


export type SubscriptionUseAllowanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUseAllowanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UseAllowanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UseAllowanceEvent_Filter>;
};


export type SubscriptionVeNftContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeNftContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VeNftContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeNftContract_Filter>;
};


export type SubscriptionVeNftTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeNftTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VeNftToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeNftToken_Filter>;
};

export type TapEvent = {
  readonly __typename?: 'TapEvent';
  readonly amount: Scalars['BigInt'];
  readonly beneficiary: Scalars['Bytes'];
  readonly beneficiaryTransferAmount: Scalars['BigInt'];
  readonly caller: Scalars['Bytes'];
  readonly currency: Scalars['BigInt'];
  readonly distributions: ReadonlyArray<DistributeToPayoutModEvent>;
  readonly fundingCycleId: Scalars['BigInt'];
  readonly govFeeAmount: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly netTransferAmount: Scalars['BigInt'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};


export type TapEventDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributeToPayoutModEvent_Filter>;
};

export type TapEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiaryTransferAmount?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTransferAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTransferAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTransferAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiaryTransferAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTransferAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTransferAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly beneficiaryTransferAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly currency?: InputMaybe<Scalars['BigInt']>;
  readonly currency_gt?: InputMaybe<Scalars['BigInt']>;
  readonly currency_gte?: InputMaybe<Scalars['BigInt']>;
  readonly currency_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly currency_lt?: InputMaybe<Scalars['BigInt']>;
  readonly currency_lte?: InputMaybe<Scalars['BigInt']>;
  readonly currency_not?: InputMaybe<Scalars['BigInt']>;
  readonly currency_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly distributions_?: InputMaybe<DistributeToPayoutModEvent_Filter>;
  readonly fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleId_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly govFeeAmount?: InputMaybe<Scalars['BigInt']>;
  readonly govFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly govFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly govFeeAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly govFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly govFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly govFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly govFeeAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly netTransferAmount?: InputMaybe<Scalars['BigInt']>;
  readonly netTransferAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly netTransferAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly netTransferAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly netTransferAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly netTransferAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly netTransferAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly netTransferAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum TapEvent_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  BeneficiaryTransferAmount = 'beneficiaryTransferAmount',
  Caller = 'caller',
  Currency = 'currency',
  Distributions = 'distributions',
  FundingCycleId = 'fundingCycleId',
  GovFeeAmount = 'govFeeAmount',
  Id = 'id',
  NetTransferAmount = 'netTransferAmount',
  Project = 'project',
  ProjectId = 'projectId',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type UseAllowanceEvent = {
  readonly __typename?: 'UseAllowanceEvent';
  readonly amount: Scalars['BigInt'];
  readonly beneficiary: Scalars['Bytes'];
  readonly caller: Scalars['Bytes'];
  readonly distributedAmount: Scalars['BigInt'];
  readonly fundingCycleConfiguration: Scalars['BigInt'];
  readonly fundingCycleNumber: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly memo: Scalars['String'];
  readonly netDistributedamount: Scalars['BigInt'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly timestamp: Scalars['Int'];
  readonly txHash: Scalars['Bytes'];
};

export type UseAllowanceEvent_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly amount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not?: InputMaybe<Scalars['BigInt']>;
  readonly amount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly beneficiary?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly beneficiary_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller?: InputMaybe<Scalars['Bytes']>;
  readonly caller_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly caller_not?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly caller_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly distributedAmount?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly distributedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly distributedAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleConfiguration?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleConfiguration_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_not?: InputMaybe<Scalars['BigInt']>;
  readonly fundingCycleConfiguration_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fundingCycleNumber?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_gt?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_gte?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly fundingCycleNumber_lt?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_lte?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_not?: InputMaybe<Scalars['Int']>;
  readonly fundingCycleNumber_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly memo?: InputMaybe<Scalars['String']>;
  readonly memo_contains?: InputMaybe<Scalars['String']>;
  readonly memo_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_gt?: InputMaybe<Scalars['String']>;
  readonly memo_gte?: InputMaybe<Scalars['String']>;
  readonly memo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_lt?: InputMaybe<Scalars['String']>;
  readonly memo_lte?: InputMaybe<Scalars['String']>;
  readonly memo_not?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains?: InputMaybe<Scalars['String']>;
  readonly memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly memo_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with?: InputMaybe<Scalars['String']>;
  readonly memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly netDistributedamount?: InputMaybe<Scalars['BigInt']>;
  readonly netDistributedamount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly netDistributedamount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly netDistributedamount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly netDistributedamount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly netDistributedamount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly netDistributedamount_not?: InputMaybe<Scalars['BigInt']>;
  readonly netDistributedamount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly txHash?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly txHash_not?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum UseAllowanceEvent_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Caller = 'caller',
  DistributedAmount = 'distributedAmount',
  FundingCycleConfiguration = 'fundingCycleConfiguration',
  FundingCycleNumber = 'fundingCycleNumber',
  Id = 'id',
  Memo = 'memo',
  NetDistributedamount = 'netDistributedamount',
  Project = 'project',
  ProjectId = 'projectId',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type VeNftContract = {
  readonly __typename?: 'VeNftContract';
  readonly address: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly project: Project;
  readonly projectId: Scalars['Int'];
  readonly symbol: Scalars['String'];
  readonly tokens: ReadonlyArray<VeNftToken>;
  readonly uriResolver: Scalars['Bytes'];
};


export type VeNftContractTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VeNftToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VeNftToken_Filter>;
};

export type VeNftContract_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly address?: InputMaybe<Scalars['Bytes']>;
  readonly address_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly address_not?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly project?: InputMaybe<Scalars['String']>;
  readonly projectId?: InputMaybe<Scalars['Int']>;
  readonly projectId_gt?: InputMaybe<Scalars['Int']>;
  readonly projectId_gte?: InputMaybe<Scalars['Int']>;
  readonly projectId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly projectId_lt?: InputMaybe<Scalars['Int']>;
  readonly projectId_lte?: InputMaybe<Scalars['Int']>;
  readonly projectId_not?: InputMaybe<Scalars['Int']>;
  readonly projectId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly project_?: InputMaybe<Project_Filter>;
  readonly project_contains?: InputMaybe<Scalars['String']>;
  readonly project_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_gt?: InputMaybe<Scalars['String']>;
  readonly project_gte?: InputMaybe<Scalars['String']>;
  readonly project_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_lt?: InputMaybe<Scalars['String']>;
  readonly project_lte?: InputMaybe<Scalars['String']>;
  readonly project_not?: InputMaybe<Scalars['String']>;
  readonly project_not_contains?: InputMaybe<Scalars['String']>;
  readonly project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly project_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly project_starts_with?: InputMaybe<Scalars['String']>;
  readonly project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol?: InputMaybe<Scalars['String']>;
  readonly symbol_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_gt?: InputMaybe<Scalars['String']>;
  readonly symbol_gte?: InputMaybe<Scalars['String']>;
  readonly symbol_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_lt?: InputMaybe<Scalars['String']>;
  readonly symbol_lte?: InputMaybe<Scalars['String']>;
  readonly symbol_not?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokens_?: InputMaybe<VeNftToken_Filter>;
  readonly uriResolver?: InputMaybe<Scalars['Bytes']>;
  readonly uriResolver_contains?: InputMaybe<Scalars['Bytes']>;
  readonly uriResolver_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly uriResolver_not?: InputMaybe<Scalars['Bytes']>;
  readonly uriResolver_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly uriResolver_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
};

export enum VeNftContract_OrderBy {
  Address = 'address',
  Id = 'id',
  Project = 'project',
  ProjectId = 'projectId',
  Symbol = 'symbol',
  Tokens = 'tokens',
  UriResolver = 'uriResolver'
}

export type VeNftToken = {
  readonly __typename?: 'VeNftToken';
  readonly contract: VeNftContract;
  readonly contractAddress: Scalars['Bytes'];
  readonly createdAt: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly lockAllowPublicExtension: Scalars['Boolean'];
  readonly lockAmount: Scalars['BigInt'];
  readonly lockDuration: Scalars['Int'];
  readonly lockEnd: Scalars['Int'];
  readonly lockUseJbToken: Scalars['Boolean'];
  readonly owner: Scalars['Bytes'];
  readonly participant: Participant;
  readonly redeemedAt?: Maybe<Scalars['Int']>;
  readonly tokenId: Scalars['Int'];
  readonly tokenUri: Scalars['String'];
  readonly unlockedAt?: Maybe<Scalars['Int']>;
};

export type VeNftToken_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly contract?: InputMaybe<Scalars['String']>;
  readonly contractAddress?: InputMaybe<Scalars['Bytes']>;
  readonly contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  readonly contractAddress_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  readonly contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly contractAddress_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly contract_?: InputMaybe<VeNftContract_Filter>;
  readonly contract_contains?: InputMaybe<Scalars['String']>;
  readonly contract_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly contract_ends_with?: InputMaybe<Scalars['String']>;
  readonly contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly contract_gt?: InputMaybe<Scalars['String']>;
  readonly contract_gte?: InputMaybe<Scalars['String']>;
  readonly contract_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly contract_lt?: InputMaybe<Scalars['String']>;
  readonly contract_lte?: InputMaybe<Scalars['String']>;
  readonly contract_not?: InputMaybe<Scalars['String']>;
  readonly contract_not_contains?: InputMaybe<Scalars['String']>;
  readonly contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly contract_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly contract_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly contract_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly contract_starts_with?: InputMaybe<Scalars['String']>;
  readonly contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['Int']>;
  readonly createdAt_gt?: InputMaybe<Scalars['Int']>;
  readonly createdAt_gte?: InputMaybe<Scalars['Int']>;
  readonly createdAt_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly createdAt_lt?: InputMaybe<Scalars['Int']>;
  readonly createdAt_lte?: InputMaybe<Scalars['Int']>;
  readonly createdAt_not?: InputMaybe<Scalars['Int']>;
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly lockAllowPublicExtension?: InputMaybe<Scalars['Boolean']>;
  readonly lockAllowPublicExtension_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly lockAllowPublicExtension_not?: InputMaybe<Scalars['Boolean']>;
  readonly lockAllowPublicExtension_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly lockAmount?: InputMaybe<Scalars['BigInt']>;
  readonly lockAmount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly lockAmount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly lockAmount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly lockAmount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly lockAmount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly lockAmount_not?: InputMaybe<Scalars['BigInt']>;
  readonly lockAmount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly lockDuration?: InputMaybe<Scalars['Int']>;
  readonly lockDuration_gt?: InputMaybe<Scalars['Int']>;
  readonly lockDuration_gte?: InputMaybe<Scalars['Int']>;
  readonly lockDuration_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lockDuration_lt?: InputMaybe<Scalars['Int']>;
  readonly lockDuration_lte?: InputMaybe<Scalars['Int']>;
  readonly lockDuration_not?: InputMaybe<Scalars['Int']>;
  readonly lockDuration_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lockEnd?: InputMaybe<Scalars['Int']>;
  readonly lockEnd_gt?: InputMaybe<Scalars['Int']>;
  readonly lockEnd_gte?: InputMaybe<Scalars['Int']>;
  readonly lockEnd_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lockEnd_lt?: InputMaybe<Scalars['Int']>;
  readonly lockEnd_lte?: InputMaybe<Scalars['Int']>;
  readonly lockEnd_not?: InputMaybe<Scalars['Int']>;
  readonly lockEnd_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly lockUseJbToken?: InputMaybe<Scalars['Boolean']>;
  readonly lockUseJbToken_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly lockUseJbToken_not?: InputMaybe<Scalars['Boolean']>;
  readonly lockUseJbToken_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly owner?: InputMaybe<Scalars['Bytes']>;
  readonly owner_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly owner_not?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly owner_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly participant?: InputMaybe<Scalars['String']>;
  readonly participant_?: InputMaybe<Participant_Filter>;
  readonly participant_contains?: InputMaybe<Scalars['String']>;
  readonly participant_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly participant_ends_with?: InputMaybe<Scalars['String']>;
  readonly participant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly participant_gt?: InputMaybe<Scalars['String']>;
  readonly participant_gte?: InputMaybe<Scalars['String']>;
  readonly participant_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly participant_lt?: InputMaybe<Scalars['String']>;
  readonly participant_lte?: InputMaybe<Scalars['String']>;
  readonly participant_not?: InputMaybe<Scalars['String']>;
  readonly participant_not_contains?: InputMaybe<Scalars['String']>;
  readonly participant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly participant_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly participant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly participant_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly participant_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly participant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly participant_starts_with?: InputMaybe<Scalars['String']>;
  readonly participant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly redeemedAt?: InputMaybe<Scalars['Int']>;
  readonly redeemedAt_gt?: InputMaybe<Scalars['Int']>;
  readonly redeemedAt_gte?: InputMaybe<Scalars['Int']>;
  readonly redeemedAt_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly redeemedAt_lt?: InputMaybe<Scalars['Int']>;
  readonly redeemedAt_lte?: InputMaybe<Scalars['Int']>;
  readonly redeemedAt_not?: InputMaybe<Scalars['Int']>;
  readonly redeemedAt_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly tokenId?: InputMaybe<Scalars['Int']>;
  readonly tokenId_gt?: InputMaybe<Scalars['Int']>;
  readonly tokenId_gte?: InputMaybe<Scalars['Int']>;
  readonly tokenId_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly tokenId_lt?: InputMaybe<Scalars['Int']>;
  readonly tokenId_lte?: InputMaybe<Scalars['Int']>;
  readonly tokenId_not?: InputMaybe<Scalars['Int']>;
  readonly tokenId_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly tokenUri?: InputMaybe<Scalars['String']>;
  readonly tokenUri_contains?: InputMaybe<Scalars['String']>;
  readonly tokenUri_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_ends_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_gt?: InputMaybe<Scalars['String']>;
  readonly tokenUri_gte?: InputMaybe<Scalars['String']>;
  readonly tokenUri_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenUri_lt?: InputMaybe<Scalars['String']>;
  readonly tokenUri_lte?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_contains?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenUri_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly tokenUri_starts_with?: InputMaybe<Scalars['String']>;
  readonly tokenUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly unlockedAt?: InputMaybe<Scalars['Int']>;
  readonly unlockedAt_gt?: InputMaybe<Scalars['Int']>;
  readonly unlockedAt_gte?: InputMaybe<Scalars['Int']>;
  readonly unlockedAt_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly unlockedAt_lt?: InputMaybe<Scalars['Int']>;
  readonly unlockedAt_lte?: InputMaybe<Scalars['Int']>;
  readonly unlockedAt_not?: InputMaybe<Scalars['Int']>;
  readonly unlockedAt_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export enum VeNftToken_OrderBy {
  Contract = 'contract',
  ContractAddress = 'contractAddress',
  CreatedAt = 'createdAt',
  Id = 'id',
  LockAllowPublicExtension = 'lockAllowPublicExtension',
  LockAmount = 'lockAmount',
  LockDuration = 'lockDuration',
  LockEnd = 'lockEnd',
  LockUseJbToken = 'lockUseJbToken',
  Owner = 'owner',
  Participant = 'participant',
  RedeemedAt = 'redeemedAt',
  TokenId = 'tokenId',
  TokenUri = 'tokenUri',
  UnlockedAt = 'unlockedAt'
}

export type _Block_ = {
  readonly __typename?: '_Block_';
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  readonly number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  readonly timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  readonly __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  readonly block: _Block_;
  /** The deployment ID */
  readonly deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  readonly hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GreenlightPowerQueryVariables = Exact<{
  address: Scalars['Bytes'];
  projectIds: ReadonlyArray<Scalars['Int']> | Scalars['Int'];
}>;


export type GreenlightPowerQuery = { readonly __typename?: 'Query', readonly participants: ReadonlyArray<{ readonly __typename?: 'Participant', readonly id: string, readonly balance: any }> };

export type NftCardFragment = { readonly __typename?: 'JB721DelegateToken', readonly id: string, readonly address: any, readonly tokenId: any, readonly name: string, readonly tokenUri: string, readonly project: { readonly __typename?: 'Project', readonly projectId: number, readonly metadataUri?: string | null } };

export type NftRewardsSectionQueryVariables = Exact<{
  address: Scalars['Bytes'];
  projectIds: ReadonlyArray<Scalars['Int']> | Scalars['Int'];
}>;


export type NftRewardsSectionQuery = { readonly __typename?: 'Query', readonly tokens: ReadonlyArray<{ readonly __typename?: 'JB721DelegateToken', readonly id: string, readonly address: any, readonly tokenId: any, readonly name: string, readonly tokenUri: string, readonly project: { readonly __typename?: 'Project', readonly projectId: number, readonly metadataUri?: string | null } }> };

export type TreasuryBalanceQueryVariables = Exact<{
  projectIds: ReadonlyArray<Scalars['Int']> | Scalars['Int'];
}>;


export type TreasuryBalanceQuery = { readonly __typename?: 'Query', readonly projects: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly currentBalance: any }> };

export const NftCardFragmentDoc = gql`
    fragment NftCard on JB721DelegateToken {
  id
  address
  tokenId
  name
  tokenUri
  project {
    projectId
    metadataUri
  }
}
    `;
export const GreenlightPowerDocument = gql`
    query GreenlightPower($address: Bytes!, $projectIds: [Int!]!) {
  participants(where: {wallet: $address, projectId_in: $projectIds}) {
    id
    balance
  }
}
    `;

export function useGreenlightPowerQuery(options: Omit<Urql.UseQueryArgs<GreenlightPowerQueryVariables>, 'query'>) {
  return Urql.useQuery<GreenlightPowerQuery, GreenlightPowerQueryVariables>({ query: GreenlightPowerDocument, ...options });
};
export const NftRewardsSectionDocument = gql`
    query NftRewardsSection($address: Bytes!, $projectIds: [Int!]!) {
  tokens: jb721DelegateTokens(where: {owner_: {wallet: $address}}) {
    id
    ...NftCard
  }
}
    ${NftCardFragmentDoc}`;

export function useNftRewardsSectionQuery(options: Omit<Urql.UseQueryArgs<NftRewardsSectionQueryVariables>, 'query'>) {
  return Urql.useQuery<NftRewardsSectionQuery, NftRewardsSectionQueryVariables>({ query: NftRewardsSectionDocument, ...options });
};
export const TreasuryBalanceDocument = gql`
    query TreasuryBalance($projectIds: [Int!]!) {
  projects(where: {projectId_in: $projectIds}) {
    id
    currentBalance
  }
}
    `;

export function useTreasuryBalanceQuery(options: Omit<Urql.UseQueryArgs<TreasuryBalanceQueryVariables>, 'query'>) {
  return Urql.useQuery<TreasuryBalanceQuery, TreasuryBalanceQueryVariables>({ query: TreasuryBalanceDocument, ...options });
};