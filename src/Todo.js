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
  TextInput
} from 'react-admin';


export const EditMineButton = ({ record, permissions, ...rest }) =>
  (record && record.mine) || (permissions === 'webadmin') ? (<EditButton record={record} {...rest} />) : null;

export const TodoList = ({ permissions, ...props }) => (
  <List {...props}
    bulkActionButtons={(permissions === 'webadmin') && null}
  >
    <Datagrid>
      <ShowButton />
      <EditMineButton permissions={permissions} />
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

export const EditMineCardActions = ({ permissions, basePath, data }) =>
  (data && data.mine) || (permissions === 'webadmin') ?
    (<CardActions style={cardActionStyle}>
      <EditButton basePath={basePath} record={data} />
    </CardActions>)
    : null;

export const TodoShow = ({ permissions, ...props }) => (
  <Show {...props} actions={<EditMineCardActions permissions={permissions} />}>
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
      <TextInput source="id" disabled />
      <TextInput source="todo" />
      <BooleanInput source="private" defaultValue={false} />
    </SimpleForm>
  </Edit>
);

export const TodoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="todo" />
      <BooleanInput
        defaultValue={true}
        source="private" />
    </SimpleForm>
  </Create>
);