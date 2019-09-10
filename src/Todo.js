import React from 'react';
import { 
    Create,
    List,
    Datagrid,
    TextField,
    BooleanInput,
    BooleanField,
    Show,
    SimpleShowLayout,
    ShowButton,
    EditButton,
    Edit,
    SimpleForm,
    DisabledInput,
    TextInput
} from 'react-admin';

export const TodoList = (props) => (
    <List {...props}>
        <Datagrid>
            <ShowButton />
            <EditButton />
            <TextField source="id" />
            <TextField source="todo" />
            <BooleanField source="private" />
        </Datagrid>
    </List>
);
export const TodoShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="todo" />
            <BooleanField source="private" />
        </SimpleShowLayout>
    </Show>
);
export const TodoEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="todo" />
            <BooleanInput source="private" />
        </SimpleForm>
    </Edit>
);
export const TodoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="todo" />
            <BooleanInput source="private" />
        </SimpleForm>
    </Create>
);