
import React from 'react';
import { Admin, Resource} from 'react-admin';

import { FeatureList, FeatureEdit, FeatureCreate } from './view/features';
import { UserStoryList, UserStoryEdit, UserStoryCreate } from './view/userstorys';
import Dashboard from './view/dashboard';

import simpleRestProvider from 'ra-data-simple-rest';

import FeatureIcon from '@material-ui/icons/Folder';
import userstorysIcon from '@material-ui/icons/FormatListBulleted';

const App = () => (    
    <Admin dashboard={Dashboard}                        
           dataProvider={simpleRestProvider(process.env.REACT_APP_API_URL || 'http://localhost:3333')}>
        
        <Resource name="features" 
            list={FeatureList} 
            edit={FeatureEdit} 
            create={FeatureCreate} 
            icon={FeatureIcon} />
        
        <Resource name="userstorys"         
            options={{ 
                label: 'Histórias',
                title: 'Histórias de usuário' 
            }}
            list={UserStoryList} 
            edit={UserStoryEdit} 
            create={UserStoryCreate} 
            icon={userstorysIcon}        
        />        
    </Admin>
);

export default App;