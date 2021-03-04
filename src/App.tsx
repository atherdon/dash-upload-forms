// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Switch, Route, Link, useHistory, withRouter } from 'react-router-dom';
import client from './clients/apollo';
import GeneratedForm from './components/GeneratedForm';
import PostOneArticle from './components/PostOneArticle';
import UpdateOneArticle from './components/UpdateOneArticle';
import './App.scss';
import * as s from './schema';

const ArticleDelete = () => (
  <div className="form">
    <GeneratedForm name={s.ARTICLE_DELETE} document={s.articleDeleteSchema} />
  </div>
);

// Editor
const Editor = () => (
  <div className="form">
    <GeneratedForm name={s.EDITOR} document={s.editorSchema} />
  </div>
);
const EditorUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.EDITOR_UPDATE} document={s.editorUpdateSchema} />
  </div>
);
const EditorDelete = () => (
  <div className="form">
    <GeneratedForm name={s.EDITOR_DELETE} document={s.editorDeleteSchema} />
  </div>
);

// Expandable
const Expandable = () => (
  <div className="form">
    <GeneratedForm name={s.EXPANDABLE} document={s.expandableSchema} />
  </div>
);
const ExpandableUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.EXPANDABLE_UPDATE} document={s.expandableUpdateSchema} />
  </div>
);
const ExpandableDelete = () => (
  <div className="form">
    <GeneratedForm name={s.EXPANDABLE_DELETE} document={s.expandableDeleteSchema} />
  </div>
);

// Appearance
const Appearance = () => (
  <div className="form">
    <GeneratedForm name={s.APPEARANCE} document={s.appearanceSchema} />
  </div>
);
const AppearanceUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.APPEARANCE_UPDATE} document={s.appearanceUpdateSchema} />
  </div>
);
const AppearanceDelete = () => (
  <div className="form">
    <GeneratedForm name={s.APPEARANCE_DELETE} document={s.appearanceDeleteSchema} />
  </div>
);

// Clicks position
const ClicksPosition = () => (
  <div className="form">
    <GeneratedForm name={s.CLICKS_POSITION} document={s.clickPositionSchema} />
  </div>
);
const ClicksPositionUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.CLICKS_POSITION_UPDATE} document={s.clickPositionUpdateSchema} />
  </div>
);
const ClicksPositionDelete = () => (
  <div className="form">
    <GeneratedForm name={s.CLICKS_POSITION_DELETE} document={s.clickPositionDeleteSchema} />
  </div>
);

// Filter
const Filter = () => (
  <div className="form">
    <GeneratedForm name={s.FILTER} document={s.filterSchema} />
  </div>
);
const FilterUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.FILTER_UPDATE} document={s.filterUpdateSchema} />
  </div>
);
const FilterDelete = () => (
  <div className="form">
    <GeneratedForm name={s.FILTER_DELETE} document={s.filterDeleteSchema} />
  </div>
);

// Country
const Country = () => (
  <div className="form">
    <GeneratedForm name={s.COUNTRY} document={s.countrySchema} />
  </div>
);
const CountryUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.COUNTRY_UPDATE} document={s.countryUpdateSchema} />
  </div>
);
const CountryDelete = () => (
  <div className="form">
    <GeneratedForm name={s.COUNTRY_DELETE} document={s.countryDeleteSchema} />
  </div>
);

// Device
const Device = () => (
  <div className="form">
    <GeneratedForm name={s.DEVICE} document={s.deviceSchema} />
  </div>
);
const DeviceUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.DEVICE_UPDATE} document={s.deviceUpdateSchema} />
  </div>
);
const DeviceDelete = () => (
  <div className="form">
    <GeneratedForm name={s.DEVICE_DELETE} document={s.deviceDeleteSchema} />
  </div>
);

// Tag
const Tag = () => (
  <div className="form">
    <GeneratedForm name={s.TAG} document={s.tagSchema} />
  </div>
);
const TagUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.TAG_UPDATE} document={s.tagUpdateSchema} />
  </div>
);
const TagDelete = () => (
  <div className="form">
    <GeneratedForm name={s.TAG_DELETE} document={s.tagDeleteSchema} />
  </div>
);

// QueryS
const QueryS = () => (
  <div className="form">
    <GeneratedForm name={s.QUERY_S} document={s.querySSchema} />
  </div>
);
const QuerySUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.QUERY_S_UPDATE} document={s.querySUpdateSchema} />
  </div>
);
const QuerySDelete = () => (
  <div className="form">
    <GeneratedForm name={s.QUERY_S_DELETE} document={s.querySDeleteSchema} />
  </div>
);

// Page
const Page = () => (
  <div className="form">
    <GeneratedForm name={s.PAGE} document={s.pageSchema} />
  </div>
);
const PageUpdate = () => (
  <div className="form">
    <GeneratedForm name={s.PAGE_UPDATE} document={s.pageUpdateSchema} />
  </div>
);
const PageDelete = () => (
  <div className="form">
    <GeneratedForm name={s.PAGE_DELETE} document={s.pageDeleteSchema} />
  </div>
);

interface MenuProps {
  children: React.ReactElement[] | React.ReactElement;
}

/**
 * Get class for link
 * @param location [string] : current location
 * @param link [string] : target link
 */
function linkCls(location: string, link: string) {
  return location === `/${link}` ? 'selected' : 'link';
}

/**
 * Pseudo menu component
 * @param props [MenuProps]
 */
function Menu(props: MenuProps): React.ReactElement {
  const { children } = props;
  return (
    <div className="menu">
      <h1>Menu</h1>
      {children}
    </div>
  );
}

type TabType = 'post' | 'update' | 'delete';

/**
 * Generated form App component
 */
function App(): React.ReactElement {
  const history = useHistory();
  const { pathname } = history.location;
  const [location, setLocation] = useState<string>(pathname);
  let initType: TabType = 'post';
  if (pathname.match(/^\/update/)) initType = 'update';
  if (pathname.match(/^\/delete/)) initType = 'delete';
  const [tabType, setTabType] = useState<TabType>(initType);
  useEffect(() => {
    const clean = history.listen(() => {
      setLocation(history.location.pathname);
    });
    return () => {
      clean();
    };
  });
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Menu>
          <div className="row">
            <button
              disabled={tabType === 'post'}
              type="button"
              onClick={() => {
                setTabType('post');
              }}>
              Add new
            </button>
            <button
              disabled={tabType === 'update'}
              type="button"
              onClick={() => {
                setTabType('update');
              }}>
              Update
            </button>
            <button
              disabled={tabType === 'delete'}
              type="button"
              onClick={() => {
                setTabType('delete');
              }}>
              Delete
            </button>
          </div>
          {tabType === 'post' ? (
            <section className="col">
              <Link className={linkCls(location, s.ARTICLE)} to={`/${s.ARTICLE}`}>
                {s.ARTICLE}
              </Link>
              <Link className={linkCls(location, s.EDITOR)} to={`/${s.EDITOR}`}>
                {s.EDITOR}
              </Link>
              <Link className={linkCls(location, s.EXPANDABLE)} to={`/${s.EXPANDABLE}`}>
                {s.EXPANDABLE}
              </Link>
              <Link className={linkCls(location, s.APPEARANCE)} to={`/${s.APPEARANCE}`}>
                {s.APPEARANCE}
              </Link>
              <Link className={linkCls(location, s.CLICKS_POSITION)} to={`/${s.CLICKS_POSITION}`}>
                {s.CLICKS_POSITION}
              </Link>
              <Link className={linkCls(location, s.FILTER)} to={`/${s.FILTER}`}>
                {s.FILTER}
              </Link>
              <Link className={linkCls(location, s.COUNTRY)} to={`/${s.COUNTRY}`}>
                {s.COUNTRY}
              </Link>
              <Link className={linkCls(location, s.DEVICE)} to={`/${s.DEVICE}`}>
                {s.DEVICE}
              </Link>
              <Link className={linkCls(location, s.TAG)} to={`/${s.TAG}`}>
                {s.TAG}
              </Link>
              <Link className={linkCls(location, s.QUERY_S)} to={`/${s.QUERY_S}`}>
                {s.QUERY_S}
              </Link>
              <Link className={linkCls(location, s.PAGE)} to={`/${s.PAGE}`}>
                {s.PAGE}
              </Link>
            </section>
          ) : (
            <br />
          )}
          {tabType === 'update' ? (
            <section className="col">
              <Link className={linkCls(location, s.ARTICLE_UPDATE)} to={`/${s.ARTICLE_UPDATE}`}>
                {s.ARTICLE_UPDATE}
              </Link>
              <Link className={linkCls(location, s.EDITOR_UPDATE)} to={`/${s.EDITOR_UPDATE}`}>
                {s.EDITOR_UPDATE}
              </Link>
              <Link
                className={linkCls(location, s.EXPANDABLE_UPDATE)}
                to={`/${s.EXPANDABLE_UPDATE}`}>
                {s.EXPANDABLE_UPDATE}
              </Link>
              <Link
                className={linkCls(location, s.APPEARANCE_UPDATE)}
                to={`/${s.APPEARANCE_UPDATE}`}>
                {s.APPEARANCE_UPDATE}
              </Link>
              <Link
                className={linkCls(location, s.CLICKS_POSITION_UPDATE)}
                to={`/${s.CLICKS_POSITION_UPDATE}`}>
                {s.CLICKS_POSITION_UPDATE}
              </Link>
              <Link className={linkCls(location, s.FILTER_UPDATE)} to={`/${s.FILTER_UPDATE}`}>
                {s.FILTER_UPDATE}
              </Link>
              <Link className={linkCls(location, s.COUNTRY_UPDATE)} to={`/${s.COUNTRY_UPDATE}`}>
                {s.COUNTRY_UPDATE}
              </Link>
              <Link className={linkCls(location, s.DEVICE_UPDATE)} to={`/${s.DEVICE_UPDATE}`}>
                {s.DEVICE_UPDATE}
              </Link>
              <Link className={linkCls(location, s.TAG_UPDATE)} to={`/${s.TAG_UPDATE}`}>
                {s.TAG_UPDATE}
              </Link>
              <Link className={linkCls(location, s.QUERY_S_UPDATE)} to={`/${s.QUERY_S_UPDATE}`}>
                {s.QUERY_S_UPDATE}
              </Link>
              <Link className={linkCls(location, s.PAGE_UPDATE)} to={`/${s.PAGE_UPDATE}`}>
                {s.PAGE_UPDATE}
              </Link>
              <Link className={linkCls(location, s.FILTER_DELETE)} to={`/${s.FILTER_DELETE}`}>
                {s.FILTER_DELETE}
              </Link>
            </section>
          ) : (
            <br />
          )}
          {tabType === 'delete' ? (
            <section className="col">
              <Link className={linkCls(location, s.ARTICLE_DELETE)} to={`/${s.ARTICLE_DELETE}`}>
                {s.ARTICLE_DELETE}
              </Link>
              <Link className={linkCls(location, s.EDITOR_DELETE)} to={`/${s.EDITOR_DELETE}`}>
                {s.EDITOR_DELETE}
              </Link>
              <Link
                className={linkCls(location, s.EXPANDABLE_DELETE)}
                to={`/${s.EXPANDABLE_DELETE}`}>
                {s.EXPANDABLE_DELETE}
              </Link>
              <Link
                className={linkCls(location, s.APPEARANCE_DELETE)}
                to={`/${s.APPEARANCE_DELETE}`}>
                {s.APPEARANCE_DELETE}
              </Link>
              <Link
                className={linkCls(location, s.CLICKS_POSITION_DELETE)}
                to={`/${s.CLICKS_POSITION_DELETE}`}>
                {s.CLICKS_POSITION_DELETE}
              </Link>
              <Link className={linkCls(location, s.FILTER_DELETE)} to={`/${s.FILTER_DELETE}`}>
                {s.FILTER_DELETE}
              </Link>
              <Link className={linkCls(location, s.COUNTRY_DELETE)} to={`/${s.COUNTRY_DELETE}`}>
                {s.COUNTRY_DELETE}
              </Link>
              <Link className={linkCls(location, s.DEVICE_DELETE)} to={`/${s.DEVICE_DELETE}`}>
                {s.DEVICE_DELETE}
              </Link>
              <Link className={linkCls(location, s.TAG_DELETE)} to={`/${s.TAG_DELETE}`}>
                {s.TAG_DELETE}
              </Link>
              <Link className={linkCls(location, s.QUERY_S_DELETE)} to={`/${s.QUERY_S_DELETE}`}>
                {s.QUERY_S_DELETE}
              </Link>
              <Link className={linkCls(location, s.PAGE_DELETE)} to={`/${s.PAGE_DELETE}`}>
                {s.PAGE_DELETE}
              </Link>
            </section>
          ) : (
            <br />
          )}
        </Menu>
        <Switch>
          {/** Post routes */}
          <Route path={`/${s.ARTICLE}`} component={PostOneArticle} />
          <Route path={`/${s.EDITOR}`} component={Editor} />
          <Route path={`/${s.EXPANDABLE}`} component={Expandable} />
          <Route path={`/${s.APPEARANCE}`} component={Appearance} />
          <Route path={`/${s.CLICKS_POSITION}`} component={ClicksPosition} />
          <Route path={`/${s.FILTER}`} component={Filter} />
          <Route path={`/${s.COUNTRY}`} component={Country} />
          <Route path={`/${s.DEVICE}`} component={Device} />
          <Route path={`/${s.TAG}`} component={Tag} />
          <Route path={`/${s.QUERY_S}`} component={QueryS} />
          <Route path={`/${s.PAGE}`} component={Page} />
          {/** Update routes */}
          <Route path={`/${s.ARTICLE_UPDATE}`} component={UpdateOneArticle} />
          <Route path={`/${s.EDITOR_UPDATE}`} component={EditorUpdate} />
          <Route path={`/${s.EXPANDABLE_UPDATE}`} component={ExpandableUpdate} />
          <Route path={`/${s.APPEARANCE_UPDATE}`} component={AppearanceUpdate} />
          <Route path={`/${s.CLICKS_POSITION_UPDATE}`} component={ClicksPositionUpdate} />
          <Route path={`/${s.FILTER_UPDATE}`} component={FilterUpdate} />
          <Route path={`/${s.COUNTRY_UPDATE}`} component={CountryUpdate} />
          <Route path={`/${s.DEVICE_UPDATE}`} component={DeviceUpdate} />
          <Route path={`/${s.TAG_UPDATE}`} component={TagUpdate} />
          <Route path={`/${s.QUERY_S_UPDATE}`} component={QuerySUpdate} />
          <Route path={`/${s.PAGE_UPDATE}`} component={PageUpdate} />
          <Route path={`/${s.FILTER_DELETE}`} component={FilterDelete} />
          {/** Delete routes */}
          <Route path={`/${s.ARTICLE_DELETE}`} component={ArticleDelete} />
          <Route path={`/${s.EDITOR_DELETE}`} component={EditorDelete} />
          <Route path={`/${s.EXPANDABLE_DELETE}`} component={ExpandableDelete} />
          <Route path={`/${s.APPEARANCE_DELETE}`} component={AppearanceDelete} />
          <Route path={`/${s.CLICKS_POSITION_DELETE}`} component={ClicksPositionDelete} />
          <Route path={`/${s.FILTER_DELETE}`} component={FilterDelete} />
          <Route path={`/${s.COUNTRY_DELETE}`} component={CountryDelete} />
          <Route path={`/${s.DEVICE_DELETE}`} component={DeviceDelete} />
          <Route path={`/${s.TAG_DELETE}`} component={TagDelete} />
          <Route path={`/${s.QUERY_S_DELETE}`} component={QuerySDelete} />
          <Route path={`/${s.PAGE_DELETE}`} component={PageDelete} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default withRouter(App);
