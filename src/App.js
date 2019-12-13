
import React from 'react';
import { Admin, Resource} from 'react-admin'; // ListGuesser / EditGuesser

import { FeatureList, FeatureEdit, FeatureCreate } from './view/features';
import { UserStoryList, UserStoryEdit, UserStoryCreate } from './view/userstorys';
import Dashboard from './view/dashboard';

//import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';

import FeatureIcon from '@material-ui/icons/Group';

const App = () => (    
    <Admin dashboard={Dashboard}                        
           dataProvider={simpleRestProvider('http://localhost:3333')}>
        
        <Resource name="features" 
            list={FeatureList} 
            edit={FeatureEdit} 
            create={FeatureCreate} 
            icon={FeatureIcon} />
        
        <Resource name="userstorys"         
            options={{ label: 'Histórias' }}
            list={UserStoryList} 
            edit={UserStoryEdit} 
            create={UserStoryCreate} 
            icon={FeatureIcon}        
        />        
    </Admin>
);

export default App;