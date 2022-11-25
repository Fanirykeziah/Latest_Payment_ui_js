import { Person } from '@mui/icons-material'
import { CreateStudent } from "./CreateStudent";
import { EditStudent } from './EditStudent';
import { ListStudent } from "./ListStudent";
import { ShowStudent } from './ShowStudent';

const student = {
    list: ListStudent,
    create: CreateStudent,
    show: ShowStudent,
    edit: EditStudent,
    icon: Person
}

export default student;