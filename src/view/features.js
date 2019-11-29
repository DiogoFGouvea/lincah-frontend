// in src/users.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

 export const FeatureList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="featureId" />
            <TextField source="nome" />           
            <TextField source="descricao" />
        </Datagrid>
    </List>
);