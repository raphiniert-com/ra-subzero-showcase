import React from 'react';
import { Admin, Resource } from 'react-admin';
import postgrestClient from 'aor-postgrest-client';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

import { ShowButton, EditButton, Edit, SimpleForm, DisabledInput, TextInput, NumberInput } from 'react-admin';
import { Create} from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import authProvider from "./authProvider";

const TodoList = (props) => (
    <List {...props}>
        <Datagrid>
            <ShowButton />
            <EditButton />
            <TextField source="author" />
            <NumberField source="count" />
        </Datagrid>
    </List>
);
export const TodoShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="author" />
            <NumberField source="count" />
        </SimpleShowLayout>
    </Show>
);
export const TodoEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="author" />
            <NumberInput source="count" />
        </SimpleForm>
    </Edit>
);
export const TodoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="author" />
            <NumberInput source="count" />
        </SimpleForm>
    </Create>
);
const App = () => (
    <Admin authProvider={authProvider} dataProvider={postgrestClient('http://localhost:3000')}>
        <Resource name="todos" show={TodoShow} create={TodoCreate} edit={TodoEdit} list={TodoList} />
    </Admin>
);

export default App;