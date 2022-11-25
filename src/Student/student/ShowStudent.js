import {
    Show,
    SimpleShowLayout,
    TextField,
    EmailField,
    DateField,
    BooleanField,
} from 'react-admin'

export function ShowStudent(props) {
    return (
        <Show
            resource='student'
        >
            <SimpleShowLayout>
                <TextField source='Name' label="Nom-s"/>
                <TextField source='FirstName' label='Prénom-s'/>
                <TextField source='Ref' label='Référence' />
                <EmailField source='Email' />
                <DateField source='Date' label='Date de paiement'/>
                <BooleanField source='paye' label='Facture'/>
            </SimpleShowLayout>
        </Show>
    )
}