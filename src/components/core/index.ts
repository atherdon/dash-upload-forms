import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type PaginationParams = {
  current: Scalars['Int'];
  limit: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['Int'];
  lastLogin: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
  roleName: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['Int'];
  ready: Scalars['Boolean'];
  url: Scalars['String'];
  type: Scalars['String'];
  isPublished: Scalars['Boolean'];
  added: Scalars['DateTime'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory?: Maybe<Scalars['Int']>;
  avgAllTimeStory?: Maybe<Scalars['Int']>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  tags: Array<Maybe<Scalars['String']>>;
};

export type ArticleMany = {
  __typename?: 'ArticleMany';
  count: Scalars['Int'];
  items?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleTag = {
  __typename?: 'ArticleTag';
  id: Scalars['Int'];
  tagId: Scalars['Int'];
  articleId: Scalars['Int'];
  Tag: Tag;
  Article: Article;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type ArticleTagMany = {
  __typename?: 'ArticleTagMany';
  count: Scalars['Int'];
  items?: Maybe<Array<Maybe<ArticleTag>>>;
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  filter: Scalars['String'];
  value: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Editor = {
  __typename?: 'Editor';
  id: Scalars['Int'];
  name: Scalars['String'];
  edited: Scalars['String'];
  editedPercent: Scalars['String'];
  published: Scalars['String'];
  publishedPercent: Scalars['String'];
  rejected: Scalars['String'];
  rejectedPercent: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Expandable = {
  __typename?: 'Expandable';
  id: Scalars['Int'];
  key: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  articles: Array<Maybe<Scalars['String']>>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Appearance = {
  __typename?: 'Appearance';
  id: Scalars['Int'];
  search: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type ClicksPosition = {
  __typename?: 'ClicksPosition';
  id: Scalars['Int'];
  date: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  url: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type QueryS = {
  __typename?: 'QueryS';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  word: Scalars['String'];
  count: Scalars['Int'];
  char: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type RegistrationParams = {
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
  email: Scalars['String'];
};

export type LoginParams = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GetOneUserParams = {
  id: Scalars['Int'];
};

export type UpdateOneUserParams = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
};

export type GetManyArticleParams = {
  type: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  pagination?: Maybe<PaginationParams>;
};

export type PostOneArticleParams = {
  ready?: Maybe<Scalars['Boolean']>;
  url: Scalars['String'];
  type: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  added: Scalars['DateTime'];
  edited: Scalars['DateTime'];
  published: Scalars['DateTime'];
  avgTimeStory?: Maybe<Scalars['Int']>;
  avgAllTimeStory?: Maybe<Scalars['Int']>;
};

export type GetOneArticleParams = {
  id: Scalars['Int'];
};

export type UpdateOneArticleParams = {
  ready?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  added?: Maybe<Scalars['DateTime']>;
  edited?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['DateTime']>;
  avgTimeStory?: Maybe<Scalars['Int']>;
  avgAllTimeStory?: Maybe<Scalars['Int']>;
};

export type PostOneArticleTagParams = {
  tagId: Scalars['Int'];
  articleId: Scalars['Int'];
};

export type GetOneArticleTagParams = {
  id: Scalars['Int'];
};

export type GetManyArticleTagParams = {
  type: Scalars['String'];
  articleId?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationParams>;
};

export type UpdateOneArticleTagParams = {
  tagId?: Maybe<Scalars['Int']>;
  articleId?: Maybe<Scalars['Int']>;
};

export type PostOneEditorParams = {
  name: Scalars['String'];
  edited: Scalars['String'];
  editedPercent: Scalars['String'];
  published: Scalars['String'];
  publishedPercent: Scalars['String'];
  rejected: Scalars['String'];
  rejectedPercent: Scalars['String'];
};

export type GetOneEditorParams = {
  id: Scalars['Int'];
};

export type UpdateOneEditorParams = {
  name?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  editedPercent?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  publishedPercent?: Maybe<Scalars['String']>;
  rejected?: Maybe<Scalars['String']>;
  rejectedPercent?: Maybe<Scalars['String']>;
};

export type PostOneExpandableParams = {
  key: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  articles: Array<Maybe<Scalars['String']>>;
};

export type GetOneExpandableParams = {
  id: Scalars['Int'];
};

export type UpdateOneExpandableParams = {
  key?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PostOneFilterParams = {
  filter: Scalars['String'];
  value: Scalars['String'];
};

export type GetOneFilterParams = {
  id: Scalars['Int'];
};

export type UpdateOneFilterParams = {
  filter?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PostOneAppearanceParams = {
  search: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneAppearanceParams = {
  id: Scalars['Int'];
};

export type UpdateOneAppearanceParams = {
  search?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneClicksPositionParams = {
  date: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneClicksPositionParams = {
  id: Scalars['Int'];
};

export type UpdateOneClicksPositionParams = {
  date?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneCountryParams = {
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneCountryParams = {
  id: Scalars['Int'];
};

export type UpdateOneCountryParams = {
  name?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneDeviceParams = {
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneDeviceParams = {
  id: Scalars['Int'];
};

export type UpdateOneDeviceParams = {
  name?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOnePageParams = {
  url: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOnePageParams = {
  id: Scalars['Int'];
};

export type UpdateOnePageParams = {
  url?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneQuerySParams = {
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneQuerySParams = {
  id: Scalars['Int'];
};

export type UpdateOneQuerySParams = {
  name?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneTagParams = {
  word: Scalars['String'];
  count: Scalars['Int'];
  char: Scalars['String'];
};

export type GetOneTagParams = {
  id: Scalars['Int'];
};

export type UpdateOneTagParams = {
  word?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  char?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getManyArticle: ArticleMany;
  getManyArticleTag: ArticleTagMany;
  getManyTag: Array<Maybe<Tag>>;
  getManyQueryS: Array<Maybe<QueryS>>;
  getManyPage: Array<Maybe<Page>>;
  getManyDevice: Array<Maybe<Device>>;
  getManyCountry: Array<Maybe<Country>>;
  getManyClicksPosition: Array<Maybe<ClicksPosition>>;
  getManyAppearance: Array<Maybe<Appearance>>;
  getManyFilter: Array<Maybe<Filter>>;
  getManyEditor: Array<Maybe<Editor>>;
  getManyExpandable: Array<Maybe<Expandable>>;
  getOneUser?: Maybe<User>;
  getOneTag?: Maybe<Tag>;
  getOneQueryS?: Maybe<QueryS>;
  getOnePage?: Maybe<Page>;
  getOneDevice?: Maybe<Device>;
  getOneCountry?: Maybe<Country>;
  getOneClicksPosition?: Maybe<ClicksPosition>;
  getOneAppearance?: Maybe<Appearance>;
  getOneArticle?: Maybe<Article>;
  getOneArticleTag?: Maybe<ArticleTag>;
  getOneFilter?: Maybe<Filter>;
  getOneExpandable?: Maybe<Expandable>;
  getOneEditor?: Maybe<Editor>;
};


export type QueryGetManyArticleArgs = {
  where: GetManyArticleParams;
};


export type QueryGetManyArticleTagArgs = {
  where: GetManyArticleTagParams;
};


export type QueryGetOneUserArgs = {
  where: GetOneUserParams;
};


export type QueryGetOneTagArgs = {
  where: GetOneTagParams;
};


export type QueryGetOneQuerySArgs = {
  where: GetOneQuerySParams;
};


export type QueryGetOnePageArgs = {
  where: GetOnePageParams;
};


export type QueryGetOneDeviceArgs = {
  where: GetOneDeviceParams;
};


export type QueryGetOneCountryArgs = {
  where: GetOneCountryParams;
};


export type QueryGetOneClicksPositionArgs = {
  where: GetOneClicksPositionParams;
};


export type QueryGetOneAppearanceArgs = {
  where: GetOneAppearanceParams;
};


export type QueryGetOneArticleArgs = {
  where: GetOneArticleParams;
};


export type QueryGetOneArticleTagArgs = {
  where: GetOneArticleTagParams;
};


export type QueryGetOneFilterArgs = {
  where: GetOneFilterParams;
};


export type QueryGetOneExpandableArgs = {
  where: GetOneExpandableParams;
};


export type QueryGetOneEditorArgs = {
  where: GetOneEditorParams;
};

export type Mutation = {
  __typename?: 'Mutation';
  registration?: Maybe<User>;
  login?: Maybe<User>;
  postOneExpandable?: Maybe<Expandable>;
  postOneTag?: Maybe<Tag>;
  postOneQueryS?: Maybe<QueryS>;
  postOnePage?: Maybe<Page>;
  postOneDevice?: Maybe<Device>;
  postOneCountry?: Maybe<Country>;
  postOneClicksPosition?: Maybe<ClicksPosition>;
  postOneAppearance?: Maybe<Appearance>;
  postOneFilter?: Maybe<Filter>;
  postOneArticle?: Maybe<Article>;
  postOneArticleTag?: Maybe<ArticleTag>;
  postOneEditor?: Maybe<Editor>;
  updateOneUser?: Maybe<User>;
  updateOneAppearance?: Maybe<Appearance>;
  updateOneFilter?: Maybe<Filter>;
  updateOneClicksPosition?: Maybe<ClicksPosition>;
  updateOneArticle?: Maybe<Article>;
  updateOneExpandable?: Maybe<Expandable>;
  updateOneEditor?: Maybe<Editor>;
  updateOneCountry?: Maybe<Country>;
  updateOneDevice?: Maybe<Device>;
  updateOnePage?: Maybe<Page>;
  updateOneQueryS?: Maybe<QueryS>;
  updateOneTag?: Maybe<Tag>;
  updateOneArticleTag?: Maybe<ArticleTag>;
  deleteOneUser?: Maybe<User>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneQueryS?: Maybe<QueryS>;
  deleteOnePage?: Maybe<Page>;
  deleteOneDevice?: Maybe<Device>;
  deleteOneCountry?: Maybe<Country>;
  deleteOneClicksPosition?: Maybe<ClicksPosition>;
  deleteOneAppearance?: Maybe<Appearance>;
  deleteOneFilter?: Maybe<Filter>;
  deleteOneArticle?: Maybe<Article>;
  deleteOneArticleTag?: Maybe<ArticleTag>;
  deleteOneExpandable?: Maybe<Expandable>;
  deleteOneEditor?: Maybe<Editor>;
};


export type MutationRegistrationArgs = {
  data: RegistrationParams;
};


export type MutationLoginArgs = {
  data: LoginParams;
};


export type MutationPostOneExpandableArgs = {
  data: PostOneExpandableParams;
};


export type MutationPostOneTagArgs = {
  data: PostOneTagParams;
};


export type MutationPostOneQuerySArgs = {
  data: PostOneQuerySParams;
};


export type MutationPostOnePageArgs = {
  data: PostOnePageParams;
};


export type MutationPostOneDeviceArgs = {
  data: PostOneDeviceParams;
};


export type MutationPostOneCountryArgs = {
  data: PostOneCountryParams;
};


export type MutationPostOneClicksPositionArgs = {
  data: PostOneClicksPositionParams;
};


export type MutationPostOneAppearanceArgs = {
  data: PostOneAppearanceParams;
};


export type MutationPostOneFilterArgs = {
  data: PostOneFilterParams;
};


export type MutationPostOneArticleArgs = {
  data: PostOneArticleParams;
};


export type MutationPostOneArticleTagArgs = {
  data: PostOneArticleTagParams;
};


export type MutationPostOneEditorArgs = {
  data: PostOneEditorParams;
};


export type MutationUpdateOneUserArgs = {
  where: GetOneUserParams;
  data: UpdateOneUserParams;
};


export type MutationUpdateOneAppearanceArgs = {
  where: GetOneAppearanceParams;
  data: UpdateOneAppearanceParams;
};


export type MutationUpdateOneFilterArgs = {
  where: GetOneFilterParams;
  data: UpdateOneFilterParams;
};


export type MutationUpdateOneClicksPositionArgs = {
  where: GetOneClicksPositionParams;
  data: UpdateOneClicksPositionParams;
};


export type MutationUpdateOneArticleArgs = {
  where: GetOneArticleParams;
  data: UpdateOneArticleParams;
};


export type MutationUpdateOneExpandableArgs = {
  where: GetOneExpandableParams;
  data: UpdateOneExpandableParams;
};


export type MutationUpdateOneEditorArgs = {
  where: GetOneEditorParams;
  data: UpdateOneEditorParams;
};


export type MutationUpdateOneCountryArgs = {
  where: GetOneCountryParams;
  data: UpdateOneCountryParams;
};


export type MutationUpdateOneDeviceArgs = {
  where: GetOneDeviceParams;
  data: UpdateOneDeviceParams;
};


export type MutationUpdateOnePageArgs = {
  where: GetOnePageParams;
  data: UpdateOnePageParams;
};


export type MutationUpdateOneQuerySArgs = {
  where: GetOneQuerySParams;
  data: UpdateOneQuerySParams;
};


export type MutationUpdateOneTagArgs = {
  where: GetOneTagParams;
  data: UpdateOneTagParams;
};


export type MutationUpdateOneArticleTagArgs = {
  where: GetOneArticleTagParams;
  data: UpdateOneArticleTagParams;
};


export type MutationDeleteOneUserArgs = {
  where: GetOneUserParams;
};


export type MutationDeleteOneTagArgs = {
  where: GetOneTagParams;
};


export type MutationDeleteOneQuerySArgs = {
  where: GetOneQuerySParams;
};


export type MutationDeleteOnePageArgs = {
  where: GetOnePageParams;
};


export type MutationDeleteOneDeviceArgs = {
  where: GetOneDeviceParams;
};


export type MutationDeleteOneCountryArgs = {
  where: GetOneCountryParams;
};


export type MutationDeleteOneClicksPositionArgs = {
  where: GetOneClicksPositionParams;
};


export type MutationDeleteOneAppearanceArgs = {
  where: GetOneAppearanceParams;
};


export type MutationDeleteOneFilterArgs = {
  where: GetOneFilterParams;
};


export type MutationDeleteOneArticleArgs = {
  where: GetOneArticleParams;
};


export type MutationDeleteOneArticleTagArgs = {
  where: GetOneArticleTagParams;
};


export type MutationDeleteOneExpandableArgs = {
  where: GetOneExpandableParams;
};


export type MutationDeleteOneEditorArgs = {
  where: GetOneEditorParams;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type DeleteOneAppearanceMutationVariables = Exact<{
  where: GetOneAppearanceParams;
}>;


export type DeleteOneAppearanceMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneAppearance?: Maybe<(
    { __typename?: 'Appearance' }
    & Pick<Appearance, 'id' | 'created'>
  )> }
);

export type DeleteOneArticleMutationVariables = Exact<{
  where: GetOneArticleParams;
}>;


export type DeleteOneArticleMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneArticle?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id'>
  )> }
);

export type DeleteOneClicksPositionMutationVariables = Exact<{
  where: GetOneClicksPositionParams;
}>;


export type DeleteOneClicksPositionMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneClicksPosition?: Maybe<(
    { __typename?: 'ClicksPosition' }
    & Pick<ClicksPosition, 'id' | 'created'>
  )> }
);

export type DeleteOneCountryMutationVariables = Exact<{
  where: GetOneCountryParams;
}>;


export type DeleteOneCountryMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCountry?: Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'id' | 'created'>
  )> }
);

export type DeleteOneDeviceMutationVariables = Exact<{
  where: GetOneDeviceParams;
}>;


export type DeleteOneDeviceMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneDevice?: Maybe<(
    { __typename?: 'Device' }
    & Pick<Device, 'id' | 'created'>
  )> }
);

export type DeleteOneEditorMutationVariables = Exact<{
  where: GetOneEditorParams;
}>;


export type DeleteOneEditorMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneEditor?: Maybe<(
    { __typename?: 'Editor' }
    & Pick<Editor, 'id' | 'created'>
  )> }
);

export type DeleteOneExpandableMutationVariables = Exact<{
  where: GetOneExpandableParams;
}>;


export type DeleteOneExpandableMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneExpandable?: Maybe<(
    { __typename?: 'Expandable' }
    & Pick<Expandable, 'id' | 'created'>
  )> }
);

export type DeleteOneFilterMutationVariables = Exact<{
  where: GetOneFilterParams;
}>;


export type DeleteOneFilterMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneFilter?: Maybe<(
    { __typename?: 'Filter' }
    & Pick<Filter, 'id' | 'created'>
  )> }
);

export type DeleteOnePageMutationVariables = Exact<{
  where: GetOnePageParams;
}>;


export type DeleteOnePageMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePage?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'created'>
  )> }
);

export type DeleteOneQuerySMutationVariables = Exact<{
  where: GetOneQuerySParams;
}>;


export type DeleteOneQuerySMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneQueryS?: Maybe<(
    { __typename?: 'QueryS' }
    & Pick<QueryS, 'id' | 'created'>
  )> }
);

export type DeleteOneTagMutationVariables = Exact<{
  where: GetOneTagParams;
}>;


export type DeleteOneTagMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneTag?: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'created'>
  )> }
);

export type DeleteOneUserMutationVariables = Exact<{
  where: GetOneUserParams;
}>;


export type DeleteOneUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'created'>
  )> }
);

export type PostOneAppearanceMutationVariables = Exact<{
  data: PostOneAppearanceParams;
}>;


export type PostOneAppearanceMutation = (
  { __typename?: 'Mutation' }
  & { postOneAppearance?: Maybe<(
    { __typename?: 'Appearance' }
    & Pick<Appearance, 'id'>
  )> }
);

export type PostOneArticleMutationVariables = Exact<{
  data: PostOneArticleParams;
}>;


export type PostOneArticleMutation = (
  { __typename?: 'Mutation' }
  & { postOneArticle?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'created'>
  )> }
);

export type PostOneClicksPositionMutationVariables = Exact<{
  data: PostOneClicksPositionParams;
}>;


export type PostOneClicksPositionMutation = (
  { __typename?: 'Mutation' }
  & { postOneClicksPosition?: Maybe<(
    { __typename?: 'ClicksPosition' }
    & Pick<ClicksPosition, 'id'>
  )> }
);

export type PostOneCountryMutationVariables = Exact<{
  data: PostOneCountryParams;
}>;


export type PostOneCountryMutation = (
  { __typename?: 'Mutation' }
  & { postOneCountry?: Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'id'>
  )> }
);

export type PostOneDeviceMutationVariables = Exact<{
  data: PostOneDeviceParams;
}>;


export type PostOneDeviceMutation = (
  { __typename?: 'Mutation' }
  & { postOneDevice?: Maybe<(
    { __typename?: 'Device' }
    & Pick<Device, 'id'>
  )> }
);

export type PostOneEditorMutationVariables = Exact<{
  data: PostOneEditorParams;
}>;


export type PostOneEditorMutation = (
  { __typename?: 'Mutation' }
  & { postOneEditor?: Maybe<(
    { __typename?: 'Editor' }
    & Pick<Editor, 'id' | 'created'>
  )> }
);

export type PostOneExpandableMutationVariables = Exact<{
  data: PostOneExpandableParams;
}>;


export type PostOneExpandableMutation = (
  { __typename?: 'Mutation' }
  & { postOneExpandable?: Maybe<(
    { __typename?: 'Expandable' }
    & Pick<Expandable, 'id'>
  )> }
);

export type PostOneFilterMutationVariables = Exact<{
  data: PostOneFilterParams;
}>;


export type PostOneFilterMutation = (
  { __typename?: 'Mutation' }
  & { postOneFilter?: Maybe<(
    { __typename?: 'Filter' }
    & Pick<Filter, 'id'>
  )> }
);

export type PostOnePageMutationVariables = Exact<{
  data: PostOnePageParams;
}>;


export type PostOnePageMutation = (
  { __typename?: 'Mutation' }
  & { postOnePage?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id'>
  )> }
);

export type PostOneQuerySMutationVariables = Exact<{
  data: PostOneQuerySParams;
}>;


export type PostOneQuerySMutation = (
  { __typename?: 'Mutation' }
  & { postOneQueryS?: Maybe<(
    { __typename?: 'QueryS' }
    & Pick<QueryS, 'id'>
  )> }
);

export type PostOneTagMutationVariables = Exact<{
  data: PostOneTagParams;
}>;


export type PostOneTagMutation = (
  { __typename?: 'Mutation' }
  & { postOneTag?: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id'>
  )> }
);

export type RegistrationMutationVariables = Exact<{
  data: RegistrationParams;
}>;


export type RegistrationMutation = (
  { __typename?: 'Mutation' }
  & { registration?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type UpdateOneAppearanceMutationVariables = Exact<{
  where: GetOneAppearanceParams;
  data: UpdateOneAppearanceParams;
}>;


export type UpdateOneAppearanceMutation = (
  { __typename?: 'Mutation' }
  & { updateOneAppearance?: Maybe<(
    { __typename?: 'Appearance' }
    & Pick<Appearance, 'id' | 'search'>
  )> }
);

export type UpdateOneArticleMutationVariables = Exact<{
  where: GetOneArticleParams;
  data: UpdateOneArticleParams;
}>;


export type UpdateOneArticleMutation = (
  { __typename?: 'Mutation' }
  & { updateOneArticle?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'created' | 'url'>
  )> }
);

export type UpdateOneClicksPositionMutationVariables = Exact<{
  where: GetOneClicksPositionParams;
  data: UpdateOneClicksPositionParams;
}>;


export type UpdateOneClicksPositionMutation = (
  { __typename?: 'Mutation' }
  & { updateOneClicksPosition?: Maybe<(
    { __typename?: 'ClicksPosition' }
    & Pick<ClicksPosition, 'id' | 'ctr'>
  )> }
);

export type UpdateOneCountryMutationVariables = Exact<{
  where: GetOneCountryParams;
  data: UpdateOneCountryParams;
}>;


export type UpdateOneCountryMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCountry?: Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'id' | 'created' | 'clicks'>
  )> }
);

export type UpdateOneDeviceMutationVariables = Exact<{
  where: GetOneDeviceParams;
  data: UpdateOneDeviceParams;
}>;


export type UpdateOneDeviceMutation = (
  { __typename?: 'Mutation' }
  & { updateOneDevice?: Maybe<(
    { __typename?: 'Device' }
    & Pick<Device, 'id' | 'created' | 'clicks'>
  )> }
);

export type UpdateOneEditorMutationVariables = Exact<{
  where: GetOneEditorParams;
  data: UpdateOneEditorParams;
}>;


export type UpdateOneEditorMutation = (
  { __typename?: 'Mutation' }
  & { updateOneEditor?: Maybe<(
    { __typename?: 'Editor' }
    & Pick<Editor, 'id' | 'created'>
  )> }
);

export type UpdateOneExpandableMutationVariables = Exact<{
  where: GetOneExpandableParams;
  data: UpdateOneExpandableParams;
}>;


export type UpdateOneExpandableMutation = (
  { __typename?: 'Mutation' }
  & { updateOneExpandable?: Maybe<(
    { __typename?: 'Expandable' }
    & Pick<Expandable, 'id' | 'name'>
  )> }
);

export type UpdateOneFilterMutationVariables = Exact<{
  where: GetOneFilterParams;
  data: UpdateOneFilterParams;
}>;


export type UpdateOneFilterMutation = (
  { __typename?: 'Mutation' }
  & { updateOneFilter?: Maybe<(
    { __typename?: 'Filter' }
    & Pick<Filter, 'id' | 'created' | 'filter'>
  )> }
);

export type UpdateOnePageMutationVariables = Exact<{
  where: GetOnePageParams;
  data: UpdateOnePageParams;
}>;


export type UpdateOnePageMutation = (
  { __typename?: 'Mutation' }
  & { updateOnePage?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'created' | 'clicks'>
  )> }
);

export type UpdateOneQuerySMutationVariables = Exact<{
  where: GetOneQuerySParams;
  data: UpdateOneQuerySParams;
}>;


export type UpdateOneQuerySMutation = (
  { __typename?: 'Mutation' }
  & { updateOneQueryS?: Maybe<(
    { __typename?: 'QueryS' }
    & Pick<QueryS, 'id' | 'created' | 'clicks'>
  )> }
);

export type UpdateOneTagMutationVariables = Exact<{
  where: GetOneTagParams;
  data: UpdateOneTagParams;
}>;


export type UpdateOneTagMutation = (
  { __typename?: 'Mutation' }
  & { updateOneTag?: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'created' | 'count'>
  )> }
);

export type UpdateOneUserMutationVariables = Exact<{
  where: GetOneUserParams;
  data: UpdateOneUserParams;
}>;


export type UpdateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'role' | 'created'>
  )> }
);


export const DeleteOneAppearanceDocument = gql`
    mutation deleteOneAppearance($where: GetOneAppearanceParams!) {
  deleteOneAppearance(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneAppearanceMutationFn = Apollo.MutationFunction<DeleteOneAppearanceMutation, DeleteOneAppearanceMutationVariables>;

/**
 * __useDeleteOneAppearanceMutation__
 *
 * To run a mutation, you first call `useDeleteOneAppearanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneAppearanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneAppearanceMutation, { data, loading, error }] = useDeleteOneAppearanceMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneAppearanceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneAppearanceMutation, DeleteOneAppearanceMutationVariables>) {
        return Apollo.useMutation<DeleteOneAppearanceMutation, DeleteOneAppearanceMutationVariables>(DeleteOneAppearanceDocument, baseOptions);
      }
export type DeleteOneAppearanceMutationHookResult = ReturnType<typeof useDeleteOneAppearanceMutation>;
export type DeleteOneAppearanceMutationResult = Apollo.MutationResult<DeleteOneAppearanceMutation>;
export type DeleteOneAppearanceMutationOptions = Apollo.BaseMutationOptions<DeleteOneAppearanceMutation, DeleteOneAppearanceMutationVariables>;
export const DeleteOneArticleDocument = gql`
    mutation deleteOneArticle($where: GetOneArticleParams!) {
  deleteOneArticle(where: $where) {
    id
  }
}
    `;
export type DeleteOneArticleMutationFn = Apollo.MutationFunction<DeleteOneArticleMutation, DeleteOneArticleMutationVariables>;

/**
 * __useDeleteOneArticleMutation__
 *
 * To run a mutation, you first call `useDeleteOneArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneArticleMutation, { data, loading, error }] = useDeleteOneArticleMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneArticleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneArticleMutation, DeleteOneArticleMutationVariables>) {
        return Apollo.useMutation<DeleteOneArticleMutation, DeleteOneArticleMutationVariables>(DeleteOneArticleDocument, baseOptions);
      }
export type DeleteOneArticleMutationHookResult = ReturnType<typeof useDeleteOneArticleMutation>;
export type DeleteOneArticleMutationResult = Apollo.MutationResult<DeleteOneArticleMutation>;
export type DeleteOneArticleMutationOptions = Apollo.BaseMutationOptions<DeleteOneArticleMutation, DeleteOneArticleMutationVariables>;
export const DeleteOneClicksPositionDocument = gql`
    mutation deleteOneClicksPosition($where: GetOneClicksPositionParams!) {
  deleteOneClicksPosition(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneClicksPositionMutationFn = Apollo.MutationFunction<DeleteOneClicksPositionMutation, DeleteOneClicksPositionMutationVariables>;

/**
 * __useDeleteOneClicksPositionMutation__
 *
 * To run a mutation, you first call `useDeleteOneClicksPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneClicksPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneClicksPositionMutation, { data, loading, error }] = useDeleteOneClicksPositionMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneClicksPositionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneClicksPositionMutation, DeleteOneClicksPositionMutationVariables>) {
        return Apollo.useMutation<DeleteOneClicksPositionMutation, DeleteOneClicksPositionMutationVariables>(DeleteOneClicksPositionDocument, baseOptions);
      }
export type DeleteOneClicksPositionMutationHookResult = ReturnType<typeof useDeleteOneClicksPositionMutation>;
export type DeleteOneClicksPositionMutationResult = Apollo.MutationResult<DeleteOneClicksPositionMutation>;
export type DeleteOneClicksPositionMutationOptions = Apollo.BaseMutationOptions<DeleteOneClicksPositionMutation, DeleteOneClicksPositionMutationVariables>;
export const DeleteOneCountryDocument = gql`
    mutation deleteOneCountry($where: GetOneCountryParams!) {
  deleteOneCountry(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneCountryMutationFn = Apollo.MutationFunction<DeleteOneCountryMutation, DeleteOneCountryMutationVariables>;

/**
 * __useDeleteOneCountryMutation__
 *
 * To run a mutation, you first call `useDeleteOneCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCountryMutation, { data, loading, error }] = useDeleteOneCountryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCountryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneCountryMutation, DeleteOneCountryMutationVariables>) {
        return Apollo.useMutation<DeleteOneCountryMutation, DeleteOneCountryMutationVariables>(DeleteOneCountryDocument, baseOptions);
      }
export type DeleteOneCountryMutationHookResult = ReturnType<typeof useDeleteOneCountryMutation>;
export type DeleteOneCountryMutationResult = Apollo.MutationResult<DeleteOneCountryMutation>;
export type DeleteOneCountryMutationOptions = Apollo.BaseMutationOptions<DeleteOneCountryMutation, DeleteOneCountryMutationVariables>;
export const DeleteOneDeviceDocument = gql`
    mutation deleteOneDevice($where: GetOneDeviceParams!) {
  deleteOneDevice(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneDeviceMutationFn = Apollo.MutationFunction<DeleteOneDeviceMutation, DeleteOneDeviceMutationVariables>;

/**
 * __useDeleteOneDeviceMutation__
 *
 * To run a mutation, you first call `useDeleteOneDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneDeviceMutation, { data, loading, error }] = useDeleteOneDeviceMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneDeviceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneDeviceMutation, DeleteOneDeviceMutationVariables>) {
        return Apollo.useMutation<DeleteOneDeviceMutation, DeleteOneDeviceMutationVariables>(DeleteOneDeviceDocument, baseOptions);
      }
export type DeleteOneDeviceMutationHookResult = ReturnType<typeof useDeleteOneDeviceMutation>;
export type DeleteOneDeviceMutationResult = Apollo.MutationResult<DeleteOneDeviceMutation>;
export type DeleteOneDeviceMutationOptions = Apollo.BaseMutationOptions<DeleteOneDeviceMutation, DeleteOneDeviceMutationVariables>;
export const DeleteOneEditorDocument = gql`
    mutation deleteOneEditor($where: GetOneEditorParams!) {
  deleteOneEditor(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneEditorMutationFn = Apollo.MutationFunction<DeleteOneEditorMutation, DeleteOneEditorMutationVariables>;

/**
 * __useDeleteOneEditorMutation__
 *
 * To run a mutation, you first call `useDeleteOneEditorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneEditorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneEditorMutation, { data, loading, error }] = useDeleteOneEditorMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneEditorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneEditorMutation, DeleteOneEditorMutationVariables>) {
        return Apollo.useMutation<DeleteOneEditorMutation, DeleteOneEditorMutationVariables>(DeleteOneEditorDocument, baseOptions);
      }
export type DeleteOneEditorMutationHookResult = ReturnType<typeof useDeleteOneEditorMutation>;
export type DeleteOneEditorMutationResult = Apollo.MutationResult<DeleteOneEditorMutation>;
export type DeleteOneEditorMutationOptions = Apollo.BaseMutationOptions<DeleteOneEditorMutation, DeleteOneEditorMutationVariables>;
export const DeleteOneExpandableDocument = gql`
    mutation deleteOneExpandable($where: GetOneExpandableParams!) {
  deleteOneExpandable(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneExpandableMutationFn = Apollo.MutationFunction<DeleteOneExpandableMutation, DeleteOneExpandableMutationVariables>;

/**
 * __useDeleteOneExpandableMutation__
 *
 * To run a mutation, you first call `useDeleteOneExpandableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneExpandableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneExpandableMutation, { data, loading, error }] = useDeleteOneExpandableMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneExpandableMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneExpandableMutation, DeleteOneExpandableMutationVariables>) {
        return Apollo.useMutation<DeleteOneExpandableMutation, DeleteOneExpandableMutationVariables>(DeleteOneExpandableDocument, baseOptions);
      }
export type DeleteOneExpandableMutationHookResult = ReturnType<typeof useDeleteOneExpandableMutation>;
export type DeleteOneExpandableMutationResult = Apollo.MutationResult<DeleteOneExpandableMutation>;
export type DeleteOneExpandableMutationOptions = Apollo.BaseMutationOptions<DeleteOneExpandableMutation, DeleteOneExpandableMutationVariables>;
export const DeleteOneFilterDocument = gql`
    mutation deleteOneFilter($where: GetOneFilterParams!) {
  deleteOneFilter(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneFilterMutationFn = Apollo.MutationFunction<DeleteOneFilterMutation, DeleteOneFilterMutationVariables>;

/**
 * __useDeleteOneFilterMutation__
 *
 * To run a mutation, you first call `useDeleteOneFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFilterMutation, { data, loading, error }] = useDeleteOneFilterMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneFilterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneFilterMutation, DeleteOneFilterMutationVariables>) {
        return Apollo.useMutation<DeleteOneFilterMutation, DeleteOneFilterMutationVariables>(DeleteOneFilterDocument, baseOptions);
      }
export type DeleteOneFilterMutationHookResult = ReturnType<typeof useDeleteOneFilterMutation>;
export type DeleteOneFilterMutationResult = Apollo.MutationResult<DeleteOneFilterMutation>;
export type DeleteOneFilterMutationOptions = Apollo.BaseMutationOptions<DeleteOneFilterMutation, DeleteOneFilterMutationVariables>;
export const DeleteOnePageDocument = gql`
    mutation deleteOnePage($where: GetOnePageParams!) {
  deleteOnePage(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOnePageMutationFn = Apollo.MutationFunction<DeleteOnePageMutation, DeleteOnePageMutationVariables>;

/**
 * __useDeleteOnePageMutation__
 *
 * To run a mutation, you first call `useDeleteOnePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOnePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOnePageMutation, { data, loading, error }] = useDeleteOnePageMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOnePageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOnePageMutation, DeleteOnePageMutationVariables>) {
        return Apollo.useMutation<DeleteOnePageMutation, DeleteOnePageMutationVariables>(DeleteOnePageDocument, baseOptions);
      }
export type DeleteOnePageMutationHookResult = ReturnType<typeof useDeleteOnePageMutation>;
export type DeleteOnePageMutationResult = Apollo.MutationResult<DeleteOnePageMutation>;
export type DeleteOnePageMutationOptions = Apollo.BaseMutationOptions<DeleteOnePageMutation, DeleteOnePageMutationVariables>;
export const DeleteOneQuerySDocument = gql`
    mutation deleteOneQueryS($where: GetOneQuerySParams!) {
  deleteOneQueryS(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneQuerySMutationFn = Apollo.MutationFunction<DeleteOneQuerySMutation, DeleteOneQuerySMutationVariables>;

/**
 * __useDeleteOneQuerySMutation__
 *
 * To run a mutation, you first call `useDeleteOneQuerySMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneQuerySMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneQuerySMutation, { data, loading, error }] = useDeleteOneQuerySMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneQuerySMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneQuerySMutation, DeleteOneQuerySMutationVariables>) {
        return Apollo.useMutation<DeleteOneQuerySMutation, DeleteOneQuerySMutationVariables>(DeleteOneQuerySDocument, baseOptions);
      }
export type DeleteOneQuerySMutationHookResult = ReturnType<typeof useDeleteOneQuerySMutation>;
export type DeleteOneQuerySMutationResult = Apollo.MutationResult<DeleteOneQuerySMutation>;
export type DeleteOneQuerySMutationOptions = Apollo.BaseMutationOptions<DeleteOneQuerySMutation, DeleteOneQuerySMutationVariables>;
export const DeleteOneTagDocument = gql`
    mutation deleteOneTag($where: GetOneTagParams!) {
  deleteOneTag(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneTagMutationFn = Apollo.MutationFunction<DeleteOneTagMutation, DeleteOneTagMutationVariables>;

/**
 * __useDeleteOneTagMutation__
 *
 * To run a mutation, you first call `useDeleteOneTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneTagMutation, { data, loading, error }] = useDeleteOneTagMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneTagMutation, DeleteOneTagMutationVariables>) {
        return Apollo.useMutation<DeleteOneTagMutation, DeleteOneTagMutationVariables>(DeleteOneTagDocument, baseOptions);
      }
export type DeleteOneTagMutationHookResult = ReturnType<typeof useDeleteOneTagMutation>;
export type DeleteOneTagMutationResult = Apollo.MutationResult<DeleteOneTagMutation>;
export type DeleteOneTagMutationOptions = Apollo.BaseMutationOptions<DeleteOneTagMutation, DeleteOneTagMutationVariables>;
export const DeleteOneUserDocument = gql`
    mutation deleteOneUser($where: GetOneUserParams!) {
  deleteOneUser(where: $where) {
    id
    created
  }
}
    `;
export type DeleteOneUserMutationFn = Apollo.MutationFunction<DeleteOneUserMutation, DeleteOneUserMutationVariables>;

/**
 * __useDeleteOneUserMutation__
 *
 * To run a mutation, you first call `useDeleteOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneUserMutation, { data, loading, error }] = useDeleteOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>) {
        return Apollo.useMutation<DeleteOneUserMutation, DeleteOneUserMutationVariables>(DeleteOneUserDocument, baseOptions);
      }
export type DeleteOneUserMutationHookResult = ReturnType<typeof useDeleteOneUserMutation>;
export type DeleteOneUserMutationResult = Apollo.MutationResult<DeleteOneUserMutation>;
export type DeleteOneUserMutationOptions = Apollo.BaseMutationOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>;
export const PostOneAppearanceDocument = gql`
    mutation postOneAppearance($data: PostOneAppearanceParams!) {
  postOneAppearance(data: $data) {
    id
  }
}
    `;
export type PostOneAppearanceMutationFn = Apollo.MutationFunction<PostOneAppearanceMutation, PostOneAppearanceMutationVariables>;

/**
 * __usePostOneAppearanceMutation__
 *
 * To run a mutation, you first call `usePostOneAppearanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneAppearanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneAppearanceMutation, { data, loading, error }] = usePostOneAppearanceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneAppearanceMutation(baseOptions?: Apollo.MutationHookOptions<PostOneAppearanceMutation, PostOneAppearanceMutationVariables>) {
        return Apollo.useMutation<PostOneAppearanceMutation, PostOneAppearanceMutationVariables>(PostOneAppearanceDocument, baseOptions);
      }
export type PostOneAppearanceMutationHookResult = ReturnType<typeof usePostOneAppearanceMutation>;
export type PostOneAppearanceMutationResult = Apollo.MutationResult<PostOneAppearanceMutation>;
export type PostOneAppearanceMutationOptions = Apollo.BaseMutationOptions<PostOneAppearanceMutation, PostOneAppearanceMutationVariables>;
export const PostOneArticleDocument = gql`
    mutation postOneArticle($data: PostOneArticleParams!) {
  postOneArticle(data: $data) {
    id
    created
  }
}
    `;
export type PostOneArticleMutationFn = Apollo.MutationFunction<PostOneArticleMutation, PostOneArticleMutationVariables>;

/**
 * __usePostOneArticleMutation__
 *
 * To run a mutation, you first call `usePostOneArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneArticleMutation, { data, loading, error }] = usePostOneArticleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneArticleMutation(baseOptions?: Apollo.MutationHookOptions<PostOneArticleMutation, PostOneArticleMutationVariables>) {
        return Apollo.useMutation<PostOneArticleMutation, PostOneArticleMutationVariables>(PostOneArticleDocument, baseOptions);
      }
export type PostOneArticleMutationHookResult = ReturnType<typeof usePostOneArticleMutation>;
export type PostOneArticleMutationResult = Apollo.MutationResult<PostOneArticleMutation>;
export type PostOneArticleMutationOptions = Apollo.BaseMutationOptions<PostOneArticleMutation, PostOneArticleMutationVariables>;
export const PostOneClicksPositionDocument = gql`
    mutation postOneClicksPosition($data: PostOneClicksPositionParams!) {
  postOneClicksPosition(data: $data) {
    id
  }
}
    `;
export type PostOneClicksPositionMutationFn = Apollo.MutationFunction<PostOneClicksPositionMutation, PostOneClicksPositionMutationVariables>;

/**
 * __usePostOneClicksPositionMutation__
 *
 * To run a mutation, you first call `usePostOneClicksPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneClicksPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneClicksPositionMutation, { data, loading, error }] = usePostOneClicksPositionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneClicksPositionMutation(baseOptions?: Apollo.MutationHookOptions<PostOneClicksPositionMutation, PostOneClicksPositionMutationVariables>) {
        return Apollo.useMutation<PostOneClicksPositionMutation, PostOneClicksPositionMutationVariables>(PostOneClicksPositionDocument, baseOptions);
      }
export type PostOneClicksPositionMutationHookResult = ReturnType<typeof usePostOneClicksPositionMutation>;
export type PostOneClicksPositionMutationResult = Apollo.MutationResult<PostOneClicksPositionMutation>;
export type PostOneClicksPositionMutationOptions = Apollo.BaseMutationOptions<PostOneClicksPositionMutation, PostOneClicksPositionMutationVariables>;
export const PostOneCountryDocument = gql`
    mutation postOneCountry($data: PostOneCountryParams!) {
  postOneCountry(data: $data) {
    id
  }
}
    `;
export type PostOneCountryMutationFn = Apollo.MutationFunction<PostOneCountryMutation, PostOneCountryMutationVariables>;

/**
 * __usePostOneCountryMutation__
 *
 * To run a mutation, you first call `usePostOneCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneCountryMutation, { data, loading, error }] = usePostOneCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneCountryMutation(baseOptions?: Apollo.MutationHookOptions<PostOneCountryMutation, PostOneCountryMutationVariables>) {
        return Apollo.useMutation<PostOneCountryMutation, PostOneCountryMutationVariables>(PostOneCountryDocument, baseOptions);
      }
export type PostOneCountryMutationHookResult = ReturnType<typeof usePostOneCountryMutation>;
export type PostOneCountryMutationResult = Apollo.MutationResult<PostOneCountryMutation>;
export type PostOneCountryMutationOptions = Apollo.BaseMutationOptions<PostOneCountryMutation, PostOneCountryMutationVariables>;
export const PostOneDeviceDocument = gql`
    mutation postOneDevice($data: PostOneDeviceParams!) {
  postOneDevice(data: $data) {
    id
  }
}
    `;
export type PostOneDeviceMutationFn = Apollo.MutationFunction<PostOneDeviceMutation, PostOneDeviceMutationVariables>;

/**
 * __usePostOneDeviceMutation__
 *
 * To run a mutation, you first call `usePostOneDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneDeviceMutation, { data, loading, error }] = usePostOneDeviceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneDeviceMutation(baseOptions?: Apollo.MutationHookOptions<PostOneDeviceMutation, PostOneDeviceMutationVariables>) {
        return Apollo.useMutation<PostOneDeviceMutation, PostOneDeviceMutationVariables>(PostOneDeviceDocument, baseOptions);
      }
export type PostOneDeviceMutationHookResult = ReturnType<typeof usePostOneDeviceMutation>;
export type PostOneDeviceMutationResult = Apollo.MutationResult<PostOneDeviceMutation>;
export type PostOneDeviceMutationOptions = Apollo.BaseMutationOptions<PostOneDeviceMutation, PostOneDeviceMutationVariables>;
export const PostOneEditorDocument = gql`
    mutation postOneEditor($data: PostOneEditorParams!) {
  postOneEditor(data: $data) {
    id
    created
  }
}
    `;
export type PostOneEditorMutationFn = Apollo.MutationFunction<PostOneEditorMutation, PostOneEditorMutationVariables>;

/**
 * __usePostOneEditorMutation__
 *
 * To run a mutation, you first call `usePostOneEditorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneEditorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneEditorMutation, { data, loading, error }] = usePostOneEditorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneEditorMutation(baseOptions?: Apollo.MutationHookOptions<PostOneEditorMutation, PostOneEditorMutationVariables>) {
        return Apollo.useMutation<PostOneEditorMutation, PostOneEditorMutationVariables>(PostOneEditorDocument, baseOptions);
      }
export type PostOneEditorMutationHookResult = ReturnType<typeof usePostOneEditorMutation>;
export type PostOneEditorMutationResult = Apollo.MutationResult<PostOneEditorMutation>;
export type PostOneEditorMutationOptions = Apollo.BaseMutationOptions<PostOneEditorMutation, PostOneEditorMutationVariables>;
export const PostOneExpandableDocument = gql`
    mutation postOneExpandable($data: PostOneExpandableParams!) {
  postOneExpandable(data: $data) {
    id
  }
}
    `;
export type PostOneExpandableMutationFn = Apollo.MutationFunction<PostOneExpandableMutation, PostOneExpandableMutationVariables>;

/**
 * __usePostOneExpandableMutation__
 *
 * To run a mutation, you first call `usePostOneExpandableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneExpandableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneExpandableMutation, { data, loading, error }] = usePostOneExpandableMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneExpandableMutation(baseOptions?: Apollo.MutationHookOptions<PostOneExpandableMutation, PostOneExpandableMutationVariables>) {
        return Apollo.useMutation<PostOneExpandableMutation, PostOneExpandableMutationVariables>(PostOneExpandableDocument, baseOptions);
      }
export type PostOneExpandableMutationHookResult = ReturnType<typeof usePostOneExpandableMutation>;
export type PostOneExpandableMutationResult = Apollo.MutationResult<PostOneExpandableMutation>;
export type PostOneExpandableMutationOptions = Apollo.BaseMutationOptions<PostOneExpandableMutation, PostOneExpandableMutationVariables>;
export const PostOneFilterDocument = gql`
    mutation postOneFilter($data: PostOneFilterParams!) {
  postOneFilter(data: $data) {
    id
  }
}
    `;
export type PostOneFilterMutationFn = Apollo.MutationFunction<PostOneFilterMutation, PostOneFilterMutationVariables>;

/**
 * __usePostOneFilterMutation__
 *
 * To run a mutation, you first call `usePostOneFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneFilterMutation, { data, loading, error }] = usePostOneFilterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneFilterMutation(baseOptions?: Apollo.MutationHookOptions<PostOneFilterMutation, PostOneFilterMutationVariables>) {
        return Apollo.useMutation<PostOneFilterMutation, PostOneFilterMutationVariables>(PostOneFilterDocument, baseOptions);
      }
export type PostOneFilterMutationHookResult = ReturnType<typeof usePostOneFilterMutation>;
export type PostOneFilterMutationResult = Apollo.MutationResult<PostOneFilterMutation>;
export type PostOneFilterMutationOptions = Apollo.BaseMutationOptions<PostOneFilterMutation, PostOneFilterMutationVariables>;
export const PostOnePageDocument = gql`
    mutation postOnePage($data: PostOnePageParams!) {
  postOnePage(data: $data) {
    id
  }
}
    `;
export type PostOnePageMutationFn = Apollo.MutationFunction<PostOnePageMutation, PostOnePageMutationVariables>;

/**
 * __usePostOnePageMutation__
 *
 * To run a mutation, you first call `usePostOnePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOnePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOnePageMutation, { data, loading, error }] = usePostOnePageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOnePageMutation(baseOptions?: Apollo.MutationHookOptions<PostOnePageMutation, PostOnePageMutationVariables>) {
        return Apollo.useMutation<PostOnePageMutation, PostOnePageMutationVariables>(PostOnePageDocument, baseOptions);
      }
export type PostOnePageMutationHookResult = ReturnType<typeof usePostOnePageMutation>;
export type PostOnePageMutationResult = Apollo.MutationResult<PostOnePageMutation>;
export type PostOnePageMutationOptions = Apollo.BaseMutationOptions<PostOnePageMutation, PostOnePageMutationVariables>;
export const PostOneQuerySDocument = gql`
    mutation postOneQueryS($data: PostOneQuerySParams!) {
  postOneQueryS(data: $data) {
    id
  }
}
    `;
export type PostOneQuerySMutationFn = Apollo.MutationFunction<PostOneQuerySMutation, PostOneQuerySMutationVariables>;

/**
 * __usePostOneQuerySMutation__
 *
 * To run a mutation, you first call `usePostOneQuerySMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneQuerySMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneQuerySMutation, { data, loading, error }] = usePostOneQuerySMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneQuerySMutation(baseOptions?: Apollo.MutationHookOptions<PostOneQuerySMutation, PostOneQuerySMutationVariables>) {
        return Apollo.useMutation<PostOneQuerySMutation, PostOneQuerySMutationVariables>(PostOneQuerySDocument, baseOptions);
      }
export type PostOneQuerySMutationHookResult = ReturnType<typeof usePostOneQuerySMutation>;
export type PostOneQuerySMutationResult = Apollo.MutationResult<PostOneQuerySMutation>;
export type PostOneQuerySMutationOptions = Apollo.BaseMutationOptions<PostOneQuerySMutation, PostOneQuerySMutationVariables>;
export const PostOneTagDocument = gql`
    mutation postOneTag($data: PostOneTagParams!) {
  postOneTag(data: $data) {
    id
  }
}
    `;
export type PostOneTagMutationFn = Apollo.MutationFunction<PostOneTagMutation, PostOneTagMutationVariables>;

/**
 * __usePostOneTagMutation__
 *
 * To run a mutation, you first call `usePostOneTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneTagMutation, { data, loading, error }] = usePostOneTagMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneTagMutation(baseOptions?: Apollo.MutationHookOptions<PostOneTagMutation, PostOneTagMutationVariables>) {
        return Apollo.useMutation<PostOneTagMutation, PostOneTagMutationVariables>(PostOneTagDocument, baseOptions);
      }
export type PostOneTagMutationHookResult = ReturnType<typeof usePostOneTagMutation>;
export type PostOneTagMutationResult = Apollo.MutationResult<PostOneTagMutation>;
export type PostOneTagMutationOptions = Apollo.BaseMutationOptions<PostOneTagMutation, PostOneTagMutationVariables>;
export const RegistrationDocument = gql`
    mutation registration($data: RegistrationParams!) {
  registration(data: $data) {
    id
  }
}
    `;
export type RegistrationMutationFn = Apollo.MutationFunction<RegistrationMutation, RegistrationMutationVariables>;

/**
 * __useRegistrationMutation__
 *
 * To run a mutation, you first call `useRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationMutation, { data, loading, error }] = useRegistrationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<RegistrationMutation, RegistrationMutationVariables>) {
        return Apollo.useMutation<RegistrationMutation, RegistrationMutationVariables>(RegistrationDocument, baseOptions);
      }
export type RegistrationMutationHookResult = ReturnType<typeof useRegistrationMutation>;
export type RegistrationMutationResult = Apollo.MutationResult<RegistrationMutation>;
export type RegistrationMutationOptions = Apollo.BaseMutationOptions<RegistrationMutation, RegistrationMutationVariables>;
export const UpdateOneAppearanceDocument = gql`
    mutation updateOneAppearance($where: GetOneAppearanceParams!, $data: UpdateOneAppearanceParams!) {
  updateOneAppearance(where: $where, data: $data) {
    id
    search
  }
}
    `;
export type UpdateOneAppearanceMutationFn = Apollo.MutationFunction<UpdateOneAppearanceMutation, UpdateOneAppearanceMutationVariables>;

/**
 * __useUpdateOneAppearanceMutation__
 *
 * To run a mutation, you first call `useUpdateOneAppearanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAppearanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAppearanceMutation, { data, loading, error }] = useUpdateOneAppearanceMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneAppearanceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneAppearanceMutation, UpdateOneAppearanceMutationVariables>) {
        return Apollo.useMutation<UpdateOneAppearanceMutation, UpdateOneAppearanceMutationVariables>(UpdateOneAppearanceDocument, baseOptions);
      }
export type UpdateOneAppearanceMutationHookResult = ReturnType<typeof useUpdateOneAppearanceMutation>;
export type UpdateOneAppearanceMutationResult = Apollo.MutationResult<UpdateOneAppearanceMutation>;
export type UpdateOneAppearanceMutationOptions = Apollo.BaseMutationOptions<UpdateOneAppearanceMutation, UpdateOneAppearanceMutationVariables>;
export const UpdateOneArticleDocument = gql`
    mutation updateOneArticle($where: GetOneArticleParams!, $data: UpdateOneArticleParams!) {
  updateOneArticle(where: $where, data: $data) {
    id
    created
    url
  }
}
    `;
export type UpdateOneArticleMutationFn = Apollo.MutationFunction<UpdateOneArticleMutation, UpdateOneArticleMutationVariables>;

/**
 * __useUpdateOneArticleMutation__
 *
 * To run a mutation, you first call `useUpdateOneArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneArticleMutation, { data, loading, error }] = useUpdateOneArticleMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneArticleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneArticleMutation, UpdateOneArticleMutationVariables>) {
        return Apollo.useMutation<UpdateOneArticleMutation, UpdateOneArticleMutationVariables>(UpdateOneArticleDocument, baseOptions);
      }
export type UpdateOneArticleMutationHookResult = ReturnType<typeof useUpdateOneArticleMutation>;
export type UpdateOneArticleMutationResult = Apollo.MutationResult<UpdateOneArticleMutation>;
export type UpdateOneArticleMutationOptions = Apollo.BaseMutationOptions<UpdateOneArticleMutation, UpdateOneArticleMutationVariables>;
export const UpdateOneClicksPositionDocument = gql`
    mutation updateOneClicksPosition($where: GetOneClicksPositionParams!, $data: UpdateOneClicksPositionParams!) {
  updateOneClicksPosition(where: $where, data: $data) {
    id
    ctr
  }
}
    `;
export type UpdateOneClicksPositionMutationFn = Apollo.MutationFunction<UpdateOneClicksPositionMutation, UpdateOneClicksPositionMutationVariables>;

/**
 * __useUpdateOneClicksPositionMutation__
 *
 * To run a mutation, you first call `useUpdateOneClicksPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneClicksPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneClicksPositionMutation, { data, loading, error }] = useUpdateOneClicksPositionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneClicksPositionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneClicksPositionMutation, UpdateOneClicksPositionMutationVariables>) {
        return Apollo.useMutation<UpdateOneClicksPositionMutation, UpdateOneClicksPositionMutationVariables>(UpdateOneClicksPositionDocument, baseOptions);
      }
export type UpdateOneClicksPositionMutationHookResult = ReturnType<typeof useUpdateOneClicksPositionMutation>;
export type UpdateOneClicksPositionMutationResult = Apollo.MutationResult<UpdateOneClicksPositionMutation>;
export type UpdateOneClicksPositionMutationOptions = Apollo.BaseMutationOptions<UpdateOneClicksPositionMutation, UpdateOneClicksPositionMutationVariables>;
export const UpdateOneCountryDocument = gql`
    mutation updateOneCountry($where: GetOneCountryParams!, $data: UpdateOneCountryParams!) {
  updateOneCountry(where: $where, data: $data) {
    id
    created
    clicks
  }
}
    `;
export type UpdateOneCountryMutationFn = Apollo.MutationFunction<UpdateOneCountryMutation, UpdateOneCountryMutationVariables>;

/**
 * __useUpdateOneCountryMutation__
 *
 * To run a mutation, you first call `useUpdateOneCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCountryMutation, { data, loading, error }] = useUpdateOneCountryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCountryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCountryMutation, UpdateOneCountryMutationVariables>) {
        return Apollo.useMutation<UpdateOneCountryMutation, UpdateOneCountryMutationVariables>(UpdateOneCountryDocument, baseOptions);
      }
export type UpdateOneCountryMutationHookResult = ReturnType<typeof useUpdateOneCountryMutation>;
export type UpdateOneCountryMutationResult = Apollo.MutationResult<UpdateOneCountryMutation>;
export type UpdateOneCountryMutationOptions = Apollo.BaseMutationOptions<UpdateOneCountryMutation, UpdateOneCountryMutationVariables>;
export const UpdateOneDeviceDocument = gql`
    mutation updateOneDevice($where: GetOneDeviceParams!, $data: UpdateOneDeviceParams!) {
  updateOneDevice(where: $where, data: $data) {
    id
    created
    clicks
  }
}
    `;
export type UpdateOneDeviceMutationFn = Apollo.MutationFunction<UpdateOneDeviceMutation, UpdateOneDeviceMutationVariables>;

/**
 * __useUpdateOneDeviceMutation__
 *
 * To run a mutation, you first call `useUpdateOneDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneDeviceMutation, { data, loading, error }] = useUpdateOneDeviceMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneDeviceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneDeviceMutation, UpdateOneDeviceMutationVariables>) {
        return Apollo.useMutation<UpdateOneDeviceMutation, UpdateOneDeviceMutationVariables>(UpdateOneDeviceDocument, baseOptions);
      }
export type UpdateOneDeviceMutationHookResult = ReturnType<typeof useUpdateOneDeviceMutation>;
export type UpdateOneDeviceMutationResult = Apollo.MutationResult<UpdateOneDeviceMutation>;
export type UpdateOneDeviceMutationOptions = Apollo.BaseMutationOptions<UpdateOneDeviceMutation, UpdateOneDeviceMutationVariables>;
export const UpdateOneEditorDocument = gql`
    mutation updateOneEditor($where: GetOneEditorParams!, $data: UpdateOneEditorParams!) {
  updateOneEditor(where: $where, data: $data) {
    id
    created
  }
}
    `;
export type UpdateOneEditorMutationFn = Apollo.MutationFunction<UpdateOneEditorMutation, UpdateOneEditorMutationVariables>;

/**
 * __useUpdateOneEditorMutation__
 *
 * To run a mutation, you first call `useUpdateOneEditorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneEditorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneEditorMutation, { data, loading, error }] = useUpdateOneEditorMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneEditorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneEditorMutation, UpdateOneEditorMutationVariables>) {
        return Apollo.useMutation<UpdateOneEditorMutation, UpdateOneEditorMutationVariables>(UpdateOneEditorDocument, baseOptions);
      }
export type UpdateOneEditorMutationHookResult = ReturnType<typeof useUpdateOneEditorMutation>;
export type UpdateOneEditorMutationResult = Apollo.MutationResult<UpdateOneEditorMutation>;
export type UpdateOneEditorMutationOptions = Apollo.BaseMutationOptions<UpdateOneEditorMutation, UpdateOneEditorMutationVariables>;
export const UpdateOneExpandableDocument = gql`
    mutation updateOneExpandable($where: GetOneExpandableParams!, $data: UpdateOneExpandableParams!) {
  updateOneExpandable(where: $where, data: $data) {
    id
    name
  }
}
    `;
export type UpdateOneExpandableMutationFn = Apollo.MutationFunction<UpdateOneExpandableMutation, UpdateOneExpandableMutationVariables>;

/**
 * __useUpdateOneExpandableMutation__
 *
 * To run a mutation, you first call `useUpdateOneExpandableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneExpandableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneExpandableMutation, { data, loading, error }] = useUpdateOneExpandableMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneExpandableMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneExpandableMutation, UpdateOneExpandableMutationVariables>) {
        return Apollo.useMutation<UpdateOneExpandableMutation, UpdateOneExpandableMutationVariables>(UpdateOneExpandableDocument, baseOptions);
      }
export type UpdateOneExpandableMutationHookResult = ReturnType<typeof useUpdateOneExpandableMutation>;
export type UpdateOneExpandableMutationResult = Apollo.MutationResult<UpdateOneExpandableMutation>;
export type UpdateOneExpandableMutationOptions = Apollo.BaseMutationOptions<UpdateOneExpandableMutation, UpdateOneExpandableMutationVariables>;
export const UpdateOneFilterDocument = gql`
    mutation updateOneFilter($where: GetOneFilterParams!, $data: UpdateOneFilterParams!) {
  updateOneFilter(where: $where, data: $data) {
    id
    created
    filter
  }
}
    `;
export type UpdateOneFilterMutationFn = Apollo.MutationFunction<UpdateOneFilterMutation, UpdateOneFilterMutationVariables>;

/**
 * __useUpdateOneFilterMutation__
 *
 * To run a mutation, you first call `useUpdateOneFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneFilterMutation, { data, loading, error }] = useUpdateOneFilterMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneFilterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneFilterMutation, UpdateOneFilterMutationVariables>) {
        return Apollo.useMutation<UpdateOneFilterMutation, UpdateOneFilterMutationVariables>(UpdateOneFilterDocument, baseOptions);
      }
export type UpdateOneFilterMutationHookResult = ReturnType<typeof useUpdateOneFilterMutation>;
export type UpdateOneFilterMutationResult = Apollo.MutationResult<UpdateOneFilterMutation>;
export type UpdateOneFilterMutationOptions = Apollo.BaseMutationOptions<UpdateOneFilterMutation, UpdateOneFilterMutationVariables>;
export const UpdateOnePageDocument = gql`
    mutation updateOnePage($where: GetOnePageParams!, $data: UpdateOnePageParams!) {
  updateOnePage(where: $where, data: $data) {
    id
    created
    clicks
  }
}
    `;
export type UpdateOnePageMutationFn = Apollo.MutationFunction<UpdateOnePageMutation, UpdateOnePageMutationVariables>;

/**
 * __useUpdateOnePageMutation__
 *
 * To run a mutation, you first call `useUpdateOnePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePageMutation, { data, loading, error }] = useUpdateOnePageMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOnePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOnePageMutation, UpdateOnePageMutationVariables>) {
        return Apollo.useMutation<UpdateOnePageMutation, UpdateOnePageMutationVariables>(UpdateOnePageDocument, baseOptions);
      }
export type UpdateOnePageMutationHookResult = ReturnType<typeof useUpdateOnePageMutation>;
export type UpdateOnePageMutationResult = Apollo.MutationResult<UpdateOnePageMutation>;
export type UpdateOnePageMutationOptions = Apollo.BaseMutationOptions<UpdateOnePageMutation, UpdateOnePageMutationVariables>;
export const UpdateOneQuerySDocument = gql`
    mutation updateOneQueryS($where: GetOneQuerySParams!, $data: UpdateOneQuerySParams!) {
  updateOneQueryS(where: $where, data: $data) {
    id
    created
    clicks
  }
}
    `;
export type UpdateOneQuerySMutationFn = Apollo.MutationFunction<UpdateOneQuerySMutation, UpdateOneQuerySMutationVariables>;

/**
 * __useUpdateOneQuerySMutation__
 *
 * To run a mutation, you first call `useUpdateOneQuerySMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneQuerySMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneQuerySMutation, { data, loading, error }] = useUpdateOneQuerySMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneQuerySMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneQuerySMutation, UpdateOneQuerySMutationVariables>) {
        return Apollo.useMutation<UpdateOneQuerySMutation, UpdateOneQuerySMutationVariables>(UpdateOneQuerySDocument, baseOptions);
      }
export type UpdateOneQuerySMutationHookResult = ReturnType<typeof useUpdateOneQuerySMutation>;
export type UpdateOneQuerySMutationResult = Apollo.MutationResult<UpdateOneQuerySMutation>;
export type UpdateOneQuerySMutationOptions = Apollo.BaseMutationOptions<UpdateOneQuerySMutation, UpdateOneQuerySMutationVariables>;
export const UpdateOneTagDocument = gql`
    mutation updateOneTag($where: GetOneTagParams!, $data: UpdateOneTagParams!) {
  updateOneTag(where: $where, data: $data) {
    id
    created
    count
  }
}
    `;
export type UpdateOneTagMutationFn = Apollo.MutationFunction<UpdateOneTagMutation, UpdateOneTagMutationVariables>;

/**
 * __useUpdateOneTagMutation__
 *
 * To run a mutation, you first call `useUpdateOneTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneTagMutation, { data, loading, error }] = useUpdateOneTagMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneTagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneTagMutation, UpdateOneTagMutationVariables>) {
        return Apollo.useMutation<UpdateOneTagMutation, UpdateOneTagMutationVariables>(UpdateOneTagDocument, baseOptions);
      }
export type UpdateOneTagMutationHookResult = ReturnType<typeof useUpdateOneTagMutation>;
export type UpdateOneTagMutationResult = Apollo.MutationResult<UpdateOneTagMutation>;
export type UpdateOneTagMutationOptions = Apollo.BaseMutationOptions<UpdateOneTagMutation, UpdateOneTagMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation updateOneUser($where: GetOneUserParams!, $data: UpdateOneUserParams!) {
  updateOneUser(where: $where, data: $data) {
    id
    name
    role
    created
  }
}
    `;
export type UpdateOneUserMutationFn = Apollo.MutationFunction<UpdateOneUserMutation, UpdateOneUserMutationVariables>;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        return Apollo.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, baseOptions);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;