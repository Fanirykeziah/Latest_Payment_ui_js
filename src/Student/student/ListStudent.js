import {
    List,
    Datagrid,
    TextField,
    EditButton,
    EmailField,
    DateField,
    BooleanField,
} from 'react-admin'

export function ListStudent(props) {
    return (
        <List
            resource='student'
            hasEdit={true}
        >
            <Datagrid
                rowClick={'show'}
                {...props}

            >
                <TextField source='Name' label="Nom-s"/>
                <TextField source='FirstName' label='Prénom-s'/>
                <TextField source='Ref' label='Référence' />
                <EmailField source='Email' />
                <DateField source='Date' label='Date de paiement'/>
                <BooleanField source='Paye' label='Facture'/>
                <EditButton />
            </Datagrid>
        </List>
    )
}