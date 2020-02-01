import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';

import { TodoShow, TodoList, TodoEdit, TodoCreate } from './Todo';
import postgrestClient, { subzeroAuthProvider as authProvider} from "@raphiniert/ra-data-postgrest";

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