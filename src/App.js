
import React from 'react';
import { Admin, Resource} from 'react-admin'; // ListGuesser / EditGuesser

import { FeatureList, FeatureEdit, FeatureCreate } from './view/features';
import { PostList, PostEdit, PostCreate } from './view/posts';
import Dashboard from './view/dashboard';

//import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';

import PostIcon from '@material-ui/icons/Book';
import FeatureIcon from '@material-ui/icons/Group';

const App = () => (    
    <Admin dashboard={Dashboard}                        
           dataProvider={simpleRestProvider('http://localhost:3333')}>
        <Resource name="features" list={FeatureList} edit={FeatureEdit} create={FeatureCreate} icon={FeatureIcon} />   
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />             
    </Admin>
);

export default App;