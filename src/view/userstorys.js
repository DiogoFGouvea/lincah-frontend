
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
    //DisabledInput,
    LongTextInput,
    Create,
    //Filter,
    Responsive,
    SimpleList,
    NumberField,
    SelectField,    
} from 'react-admin';

const UserStoryTitle = ({ record }) => {
    return <span>História de usuário {record ? `"${record.nome}"` : ''}</span>;    
};

// const UserStoryFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
//             <SelectInput optionText="name" />
//         </ReferenceInput>
//     </Filter>
// );

export const UserStoryList = (props) => (    
    // <List filters={<UserStoryFilter />} {...props}>
    <List title={<UserStoryTitle />} {...props}>
        <Responsive            
            small={                          
                <SimpleList                    
                    primaryText={record => record.nome}
                    secondaryText={record => `ID: ${record.id}`}
                    tertiaryText={record => `${record.pontuacao} Pontos`}
                />                
            }
            medium={
                <Datagrid>                    
                    <TextField source="id" />
                    <ReferenceField label="Feature" source="feature_id" reference="features">
                        <TextField source="nome" />
                    </ReferenceField>                    
                    <TextField source="nome" />
                    <NumberField source="pontuacao" />
                    <SelectField 
                        source="status" 
                        choices={[
                            { id: 'D', name: 'Definida' },
                            { id: 'A', name: 'Andamento' },
                            { id: 'C', name: 'Concluída' },
                            { id: 'B', name: 'Bloqueada' },
                        ]} />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>    
);    

export const UserStoryEdit = props => (
    <Edit title={<UserStoryTitle />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <ReferenceInput label="Feature" source="feature_id" reference="features">
                <SelectInput optionText="nome" />
            </ReferenceInput>           
            <TextInput source="nome" label="Nome da História de usuário" validation={{ required: true }} />
            <SelectInput
                source="pontuacao"
                label="Pontuação"
                choices={[
                    { id: 1, name: '1'},
                    { id: 2, name: '2'},
                    { id: 3, name: '3'},
                    { id: 5, name: '5'},
                    { id: 8, name: '8'},
                    { id: 13, name: '13'},
                    { id: 20, name: '20'},
                    { id: 40, name: '40'},
                    { id: 100, name: '100'}                    
                ]} />            
            <SelectInput
                source="status" 
                label="Status do andamento"
                choices={[
                    { id: 'D', name: 'Definida' },
                    { id: 'A', name: 'Andamento' },
                    { id: 'C', name: 'Concluída' },
                    { id: 'B', name: 'Bloqueada' },
                ]} />            
            <LongTextInput source="descricao" validation={{ required: true }} />           
        </SimpleForm>
    </Edit>
);

export const UserStoryCreate = props => (
    <Create {...props}>
        <SimpleForm>            
            <ReferenceInput source="feature_id" reference="features">
                <SelectInput optionText="nome" />
            </ReferenceInput>           
            <TextInput source="nome" label="Nome da História de usuário" validation={{ required: true }} />            
            <SelectInput
                source="pontuacao" 
                label="Pontuação"
                choices={[
                    { id: '1', name: '1'},
                    { id: '2', name: '2'},
                    { id: '3', name: '3'},
                    { id: '5', name: '5'},
                    { id: '8', name: '8'},
                    { id: '13', name: '13'},
                    { id: '20', name: '20'},
                    { id: '40', name: '40'},
                    { id: '100', name: '100'}
                ]} />            
            <SelectInput
                source="status" 
                label="Status do andamento"
                choices={[
                    { id: 'D', name: 'Definida' },
                    { id: 'A', name: 'Andamento' },
                    { id: 'C', name: 'Concluída' },
                    { id: 'B', name: 'Bloqueada' },
                ]} />            
            <LongTextInput source="descricao" validation={{ required: true }} />
        </SimpleForm>
    </Create>
);

       