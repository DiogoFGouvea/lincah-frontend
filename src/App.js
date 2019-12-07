
import React from 'react';
import { Admin, Resource} from 'react-admin'; // ListGuesser / EditGuesser

import { UserList } from './view/users';
import { PostList, PostEdit, PostCreate } from './view/posts';
import Dashboard from './view/dashboard';

//import { FeatureList } from './view/features';
//import authProvider from './authProvider';
//import simpleRestProvider from 'ra-data-simple-rest';

import PostIcon from '@material-ui/icons/Book';
//import UserIcon from '@material-ui/icons/Group';

import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

//dataProvider={simpleRestProvider('http://localhost:3333')}
//<Resource name="features" list={FeatureList} icon={UserIcon} />

const App = () => (    
    <Admin dashboard={Dashboard}                        
           dataProvider={dataProvider}>               
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} />        
    </Admin>
);

export default App;