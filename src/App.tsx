// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { ApolloProvider, DocumentNode } from '@apollo/client';
import { Switch, Route, Link, useHistory, withRouter } from 'react-router-dom';
import { loader } from 'graphql.macro';
import client from './clients/apollo';
import GeneratedForm from './components/GeneratedForm';
import './App.scss';

const postOneTopAuthorSchema: DocumentNode = loader('./models/postOneTopAuthor.graphql');
const postOneBrandSchema: DocumentNode = loader('./models/postOneBrand.graphql');

const TOP_AUTHOR = 'postOneTopAuthor';
const BRAND = 'postOneBrand';

const PostOneTopAuthor = () => (
  <div className="form">
    <GeneratedForm name={TOP_AUTHOR} document={postOneTopAuthorSchema} />
  </div>
);

const PostOneBrand = () => (
  <div className="form">
    <GeneratedForm name={BRAND} document={postOneBrandSchema} />
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
function Menu(props: MenuProps): React.ReactElement {
  const { children } = props;
  return (
    <div className="menu">
      <h1>Menu</h1>
      {children}
    </div>
  );
}

function App(): React.ReactElement {
  const history = useHistory();
  const [location, setLocation] = useState<string>(history.location.pathname);
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
          <Link className={linkCls(location, TOP_AUTHOR)} to={`/${TOP_AUTHOR}`}>
            {TOP_AUTHOR}
          </Link>
          <Link className={linkCls(location, BRAND)} to={`/${BRAND}`}>
            {BRAND}
          </Link>
        </Menu>
        <Switch>
          <Route path={`/${TOP_AUTHOR}`} component={PostOneTopAuthor} />
          <Route path={`/${BRAND}`} component={PostOneBrand} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default withRouter(App);
