import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import postgrestClient from 'ra-data-subzero-rest';

import { TodoShow, TodoList, TodoEdit, TodoCreate } from './Todo';
import authProvider from "./authProvider";

// sending httpOnly cookie for login
const httpClient = (url, options = {}) => {
  options.credentials = 'include';

  return fetchUtils.fetchJson(url, options);
}

const dataProvider = postgrestClient('rest', httpClient);

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="todos" show={TodoShow} create={TodoCreate} edit={TodoEdit} list={TodoList} />
  </Admin>
);

export default App;