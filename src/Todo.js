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

const ConditionalEditButton = ({ record, ...rest }) =>
    record && record.mine ? (<EditButton record={record} {...rest} />) : null;

export const TodoList = (props) => {
    console.log(props);

    return (
    <List {...props}>
        <Datagrid>
            <ShowButton />
            <ConditionalEditButton />}
            <TextField source="id" />
            <TextField source="todo" />
            <BooleanField source="private" />
            <BooleanField source="mine" />
        </Datagrid>
    </List>
    )
};
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
            <BooleanInput
                options={{
                    defaultChecked: true
                }}
                source="private" />
        </SimpleForm>
    </Create>
);