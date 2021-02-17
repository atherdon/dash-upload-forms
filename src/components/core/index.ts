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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  filter: Scalars['String'];
  value: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['Int'];
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type TopAuthor = {
  __typename?: 'TopAuthor';
  id: Scalars['Int'];
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
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
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Expandable = {
  __typename?: 'Expandable';
  id: Scalars['Int'];
  key: Scalars['Int'];
  name: Scalars['String'];
  age: Scalars['Int'];
  address: Scalars['String'];
  description: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Appearance = {
  __typename?: 'Appearance';
  id: Scalars['Int'];
  search: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type ClicksPosition = {
  __typename?: 'ClicksPosition';
  id: Scalars['Int'];
  date: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  url: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type QueryS = {
  __typename?: 'QueryS';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  word: Scalars['String'];
  count: Scalars['Int'];
  char: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
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

export type PostOneArticleParams = {
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
};

export type GetOneArticleParams = {
  id: Scalars['Int'];
};

export type UpdateOneArticleParams = {
  v?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  added?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['String']>;
  avgAllTimeStory?: Maybe<Scalars['String']>;
};

export type PostOneBrandParams = {
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
};

export type GetOneBrandParams = {
  id: Scalars['Int'];
};

export type UpdateOneBrandParams = {
  v?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  added?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['String']>;
  avgAllTimeStory?: Maybe<Scalars['String']>;
};

export type PostOneTopAuthorParams = {
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
};

export type GetOneTopAuthorParams = {
  id: Scalars['Int'];
};

export type UpdateOneTopAuthorParams = {
  v?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  added?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['String']>;
  avgAllTimeStory?: Maybe<Scalars['String']>;
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
  age: Scalars['Int'];
  address: Scalars['String'];
  description: Scalars['String'];
};

export type GetOneExpandableParams = {
  id: Scalars['Int'];
};

export type UpdateOneExpandableParams = {
  key?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  getManyArticle: Array<Maybe<Article>>;
  getManyTag: Array<Maybe<Tag>>;
  getManyQueryS: Array<Maybe<QueryS>>;
  getManyPage: Array<Maybe<Page>>;
  getManyDevice: Array<Maybe<Device>>;
  getManyCountry: Array<Maybe<Country>>;
  getManyClicksPosition: Array<Maybe<ClicksPosition>>;
  getManyAppearance: Array<Maybe<Appearance>>;
  getManyFilter: Array<Maybe<Filter>>;
  getManyBrand: Array<Maybe<Brand>>;
  getManyTopAuthor: Array<Maybe<TopAuthor>>;
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
  getOneFilter?: Maybe<Filter>;
  getOneExpandable?: Maybe<Expandable>;
  getOneBrand?: Maybe<Brand>;
  getOneTopAuthor?: Maybe<TopAuthor>;
  getOneEditor?: Maybe<Editor>;
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


export type QueryGetOneFilterArgs = {
  where: GetOneFilterParams;
};


export type QueryGetOneExpandableArgs = {
  where: GetOneExpandableParams;
};


export type QueryGetOneBrandArgs = {
  where: GetOneBrandParams;
};


export type QueryGetOneTopAuthorArgs = {
  where: GetOneTopAuthorParams;
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
  postOneBrand?: Maybe<Brand>;
  postOneQueryS?: Maybe<QueryS>;
  postOnePage?: Maybe<Page>;
  postOneDevice?: Maybe<Device>;
  postOneCountry?: Maybe<Country>;
  postOneClicksPosition?: Maybe<ClicksPosition>;
  postOneAppearance?: Maybe<Appearance>;
  postOneFilter?: Maybe<Filter>;
  postOneArticle?: Maybe<Article>;
  postOneTopAuthor?: Maybe<TopAuthor>;
  postOneEditor?: Maybe<Editor>;
  updateOneUser?: Maybe<User>;
  updateOneAppearance?: Maybe<Appearance>;
  updateOneFilter?: Maybe<Filter>;
  updateOneClicksPosition?: Maybe<ClicksPosition>;
  updateOneArticle?: Maybe<Article>;
  updateOneBrand?: Maybe<Brand>;
  updateOneExpandable?: Maybe<Expandable>;
  updateOneTopAuthor?: Maybe<TopAuthor>;
  updateOneEditor?: Maybe<Editor>;
  updateOneCountry?: Maybe<Country>;
  updateOneDevice?: Maybe<Device>;
  updateOnePage?: Maybe<Page>;
  updateOneQueryS?: Maybe<QueryS>;
  updateOneTag?: Maybe<Tag>;
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
  deleteOneExpandable?: Maybe<Expandable>;
  deleteOneBrand?: Maybe<Brand>;
  deleteOneTopAuthor?: Maybe<TopAuthor>;
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


export type MutationPostOneBrandArgs = {
  data: PostOneBrandParams;
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


export type MutationPostOneTopAuthorArgs = {
  data: PostOneTopAuthorParams;
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


export type MutationUpdateOneBrandArgs = {
  where: GetOneBrandParams;
  data: UpdateOneBrandParams;
};


export type MutationUpdateOneExpandableArgs = {
  where: GetOneExpandableParams;
  data: UpdateOneExpandableParams;
};


export type MutationUpdateOneTopAuthorArgs = {
  where: GetOneTopAuthorParams;
  data: UpdateOneTopAuthorParams;
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


export type MutationDeleteOneExpandableArgs = {
  where: GetOneExpandableParams;
};


export type MutationDeleteOneBrandArgs = {
  where: GetOneBrandParams;
};


export type MutationDeleteOneTopAuthorArgs = {
  where: GetOneTopAuthorParams;
};


export type MutationDeleteOneEditorArgs = {
  where: GetOneEditorParams;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PostOneBrandMutationVariables = Exact<{
  data: PostOneBrandParams;
}>;


export type PostOneBrandMutation = (
  { __typename?: 'Mutation' }
  & { postOneBrand?: Maybe<(
    { __typename?: 'Brand' }
    & Pick<Brand, 'id'>
  )> }
);

export type PostOneTopAuthorMutationVariables = Exact<{
  data: PostOneTopAuthorParams;
}>;


export type PostOneTopAuthorMutation = (
  { __typename?: 'Mutation' }
  & { postOneTopAuthor?: Maybe<(
    { __typename?: 'TopAuthor' }
    & Pick<TopAuthor, 'id' | 'created'>
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


export const PostOneBrandDocument = gql`
    mutation postOneBrand($data: PostOneBrandParams!) {
  postOneBrand(data: $data) {
    id
  }
}
    `;
export type PostOneBrandMutationFn = Apollo.MutationFunction<PostOneBrandMutation, PostOneBrandMutationVariables>;

/**
 * __usePostOneBrandMutation__
 *
 * To run a mutation, you first call `usePostOneBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneBrandMutation, { data, loading, error }] = usePostOneBrandMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneBrandMutation(baseOptions?: Apollo.MutationHookOptions<PostOneBrandMutation, PostOneBrandMutationVariables>) {
        return Apollo.useMutation<PostOneBrandMutation, PostOneBrandMutationVariables>(PostOneBrandDocument, baseOptions);
      }
export type PostOneBrandMutationHookResult = ReturnType<typeof usePostOneBrandMutation>;
export type PostOneBrandMutationResult = Apollo.MutationResult<PostOneBrandMutation>;
export type PostOneBrandMutationOptions = Apollo.BaseMutationOptions<PostOneBrandMutation, PostOneBrandMutationVariables>;
export const PostOneTopAuthorDocument = gql`
    mutation postOneTopAuthor($data: PostOneTopAuthorParams!) {
  postOneTopAuthor(data: $data) {
    id
    created
  }
}
    `;
export type PostOneTopAuthorMutationFn = Apollo.MutationFunction<PostOneTopAuthorMutation, PostOneTopAuthorMutationVariables>;

/**
 * __usePostOneTopAuthorMutation__
 *
 * To run a mutation, you first call `usePostOneTopAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostOneTopAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postOneTopAuthorMutation, { data, loading, error }] = usePostOneTopAuthorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePostOneTopAuthorMutation(baseOptions?: Apollo.MutationHookOptions<PostOneTopAuthorMutation, PostOneTopAuthorMutationVariables>) {
        return Apollo.useMutation<PostOneTopAuthorMutation, PostOneTopAuthorMutationVariables>(PostOneTopAuthorDocument, baseOptions);
      }
export type PostOneTopAuthorMutationHookResult = ReturnType<typeof usePostOneTopAuthorMutation>;
export type PostOneTopAuthorMutationResult = Apollo.MutationResult<PostOneTopAuthorMutation>;
export type PostOneTopAuthorMutationOptions = Apollo.BaseMutationOptions<PostOneTopAuthorMutation, PostOneTopAuthorMutationVariables>;
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