import React from 'react';
import CardActions from '@material-ui/core/CardActions';
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


export const EditMineButton = ({ record, ...rest }) =>
    record && record.mine ? (<EditButton record={record} {...rest} />) : null;

export const TodoList = (props) => (
    <List {...props} 
        bulkActions={false}
    >
        <Datagrid>
            <ShowButton />
            <EditMineButton />}
            <TextField source="id" />
            <TextField source="todo" />
            <BooleanField source="private" />
            <BooleanField source="mine" />
        </Datagrid>
    </List>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

export const EditMineCardActions = ({ basePath, data }) =>
    data && data.mine ? 
    (<CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} />
    </CardActions>)
    : null;

export const TodoShow = (props) => (
    <Show {...props} actions={<EditMineCardActions />}>
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