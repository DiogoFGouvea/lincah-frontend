
import React from 'react';
import { Admin, Resource} from 'react-admin'; // ListGuesser / EditGuesser

import { PostList, PostEdit, PostCreate } from './view/posts';
import { FeatureList } from './view/features';
import Dashboard from './view/dashboard';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const App = () => (
    <Admin dashboard={Dashboard} 
           authProvider={authProvider} 
           dataProvider={simpleRestProvider('http://localhost:3333')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="features" list={FeatureList} icon={UserIcon} />
    </Admin>
);

export default App;