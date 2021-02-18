import { DocumentNode } from '@apollo/client';
import { loader } from 'graphql.macro';

// Post schemas
export const topAuthorSchema: DocumentNode = loader('../models/post/oneTopAuthor.graphql');
export const brandSchema: DocumentNode = loader('../models/post/oneBrand.graphql');
export const articleSchema: DocumentNode = loader('../models/post/oneArticle.graphql');
export const editorSchema: DocumentNode = loader('../models/post/oneEditor.graphql');
export const expandableSchema: DocumentNode = loader('../models/post/oneExpandable.graphql');
export const appearanceSchema: DocumentNode = loader('../models/post/oneAppearance.graphql');
export const clickPositionSchema: DocumentNode = loader('../models/post/oneClicksPosition.graphql');
export const filterSchema: DocumentNode = loader('../models/post/oneFilter.graphql');
export const countrySchema: DocumentNode = loader('../models/post/oneCountry.graphql');
export const deviceSchema: DocumentNode = loader('../models/post/oneDevice.graphql');
export const tagSchema: DocumentNode = loader('../models/post/oneTag.graphql');
export const querySSchema: DocumentNode = loader('../models/post/oneQueryS.graphql');
export const pageSchema: DocumentNode = loader('../models/post/onePage.graphql');

// Update schemas
export const pageUpdateSchema: DocumentNode = loader('../models/update/onePage.graphql');
export const topAuthorUpdateSchema: DocumentNode = loader('../models/update/oneTopAuthor.graphql');
export const brandUpdateSchema: DocumentNode = loader('../models/update/oneBrand.graphql');
export const articleUpdateSchema: DocumentNode = loader('../models/update/oneArticle.graphql');
export const editorUpdateSchema: DocumentNode = loader('../models/update/oneEditor.graphql');
export const expandableUpdateSchema: DocumentNode = loader(
  '../models/update/oneExpandable.graphql'
);
export const appearanceUpdateSchema: DocumentNode = loader(
  '../models/update/oneAppearance.graphql'
);
export const clickPositionUpdateSchema: DocumentNode = loader(
  '../models/update/oneClicksPosition.graphql'
);
export const filterUpdateSchema: DocumentNode = loader('../models/update/oneFilter.graphql');
export const countryUpdateSchema: DocumentNode = loader('../models/update/oneCountry.graphql');
export const deviceUpdateSchema: DocumentNode = loader('../models/update/oneDevice.graphql');
export const tagUpdateSchema: DocumentNode = loader('../models/update/oneTag.graphql');
export const querySUpdateSchema: DocumentNode = loader('../models/update/oneQueryS.graphql');

// Delete schemas
export const filterDeleteSchema: DocumentNode = loader('../models/delete/oneFilter.graphql');
export const topAuthorDeleteSchema: DocumentNode = loader('../models/delete/oneTopAuthor.graphql');
export const brandDeleteSchema: DocumentNode = loader('../models/delete/oneBrand.graphql');
export const articleDeleteSchema: DocumentNode = loader('../models/delete/oneArticle.graphql');
export const editorDeleteSchema: DocumentNode = loader('../models/delete/oneEditor.graphql');
export const expandableDeleteSchema: DocumentNode = loader(
  '../models/delete/oneExpandable.graphql'
);
export const appearanceDeleteSchema: DocumentNode = loader(
  '../models/delete/oneAppearance.graphql'
);
export const clickPositionDeleteSchema: DocumentNode = loader(
  '../models/delete/oneClicksPosition.graphql'
);
export const countryDeleteSchema: DocumentNode = loader('../models/delete/oneCountry.graphql');
export const deviceDeleteSchema: DocumentNode = loader('../models/delete/oneDevice.graphql');
export const tagDeleteSchema: DocumentNode = loader('../models/delete/oneTag.graphql');
export const querySDeleteSchema: DocumentNode = loader('../models/delete/oneQueryS.graphql');
export const pageDeleteSchema: DocumentNode = loader('../models/delete/onePage.graphql');

// Post names
export const TOP_AUTHOR = 'postOneTopAuthor';
export const BRAND = 'postOneBrand';
export const ARTICLE = 'postOneArticle';
export const EDITOR = 'postOneEditor';
export const EXPANDABLE = 'postOneExpandable';
export const APPEARANCE = 'postOneAppearance';
export const CLICKS_POSITION = 'postOneClicksPosition';
export const FILTER = 'postOneFilter';
export const COUNTRY = 'postOneCountry';
export const DEVICE = 'postOneDevice';
export const TAG = 'postOneTag';
export const QUERY_S = 'postOneQueryS';
export const PAGE = 'postOnePage';

// Update names
export const PAGE_UPDATE = 'updateOnePage';
export const TOP_AUTHOR_UPDATE = 'updateOneTopAuthor';
export const BRAND_UPDATE = 'updateOneBrand';
export const ARTICLE_UPDATE = 'updateOneArticle';
export const EDITOR_UPDATE = 'updateOneEditor';
export const EXPANDABLE_UPDATE = 'updateOneExpandable';
export const APPEARANCE_UPDATE = 'updateOneAppearance';
export const CLICKS_POSITION_UPDATE = 'updateOneClicksPosition';
export const FILTER_UPDATE = 'updateOneFilter';
export const COUNTRY_UPDATE = 'updateOneCountry';
export const DEVICE_UPDATE = 'updateOneDevice';
export const TAG_UPDATE = 'updateOneTag';
export const QUERY_S_UPDATE = 'updateOneQueryS';

// Delete names
export const FILTER_DELETE = 'deleteOneFilter';
export const TOP_AUTHOR_DELETE = 'deleteOneTopAuthor';
export const BRAND_DELETE = 'deleteOneBrand';
export const ARTICLE_DELETE = 'deleteOneArticle';
export const EDITOR_DELETE = 'deleteOneEditor';
export const EXPANDABLE_DELETE = 'deleteOneExpandable';
export const APPEARANCE_DELETE = 'deleteOneAppearance';
export const CLICKS_POSITION_DELETE = 'deleteOneClicksPosition';
export const COUNTRY_DELETE = 'deleteOneCountry';
export const DEVICE_DELETE = 'deleteOneDevice';
export const TAG_DELETE = 'deleteOneTag';
export const QUERY_S_DELETE = 'deleteOneQueryS';
export const PAGE_DELETE = 'deleteOnePage';
