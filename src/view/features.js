import React from 'react';
import { 
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    DisabledInput,
    LongTextInput,
    Create,
    Filter,
    Responsive,
    SimpleList,
    EmailField    
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const FeatureTitle = ({ record }) => {
    return <span>Feature {record ? `"${record.featureId}"` : ''}</span>;    
};

// const FeatureFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Feature" source="e" alwaysOn />
//         <ReferenceInput label="Feature" source="featureId" reference="features" allowEmpty>
//             <SelectInput optionText="nome" />
//         </ReferenceInput>
//     </Filter>
// );

export const FeatureList = (props) => (    
    //<List filters={<FeatureFilter />} {...props}>
    <List {...props}>
        <Responsive            
            small={                          
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.featureId} views`}
                    tertiaryText={record => (record.descricao)}                    
                />                
            }
            medium={
                <Datagrid rowClick="edit">                    
                    <TextField source="featureId" label="Feature"/>                    
                    <TextField source="nome" label="Nome"/>                    
                    <EditButton />
                </Datagrid>
            }
        />
    </List>    
);    

export const FeatureEdit = props => (
    <Edit title={<FeatureTitle />} {...props}>
        <SimpleForm>            
            <TextInput disabled source="featureId" label="Código da Feature" />
            <TextInput source="nome" label="Nome" />
            <LongTextInput source="descricao" label="Descrição" />
        </SimpleForm>
    </Edit>
);


export const FeatureCreate = props => (
    <Create {...props}>
        <SimpleForm>            
            <TextInput source="featureId" label="Código da Feature" validation={{ required: true }} />
            <TextInput source="nome" label="Nome"  validation={{ required: true }}/>
            <RichTextInput source="descricao" validation={{ required: true }} />
        </SimpleForm>
    </Create>
);

