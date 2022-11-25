import { Admin, Resource, Layout, AppBar, Toolbar } from 'react-admin';
import { amber } from '@mui/material/colors'
import FakeREst from 'ra-data-fakerest'
import './App.css';
import student from './Student/student';

const dataProvider = FakeREst({
  student: [
    {
      Name: 'Faniry',
      FirstName: 'Keziah',
      Ref: 'STD21059',
      Email: 'Keziahgmail.com',
      Date: '12janvier',
      Paye: false,
    }
  ]
})

function CustomLayout(props) {
  return (
    <Layout
     {...props}
     appBar={CustomAppBar}
    />
  )
}

const a = () => (
  <AppBar
      sx={{
        backgroundColor: amber[600]
      }}
    />
)

function CustomAppBar(props) {
  return (
    <Toolbar
     component={a}
    >
    </Toolbar>
  )
}

function App() {
  return (
    <Admin title="LatePayment"  layout={CustomLayout} dataProvider={dataProvider}>
      <Resource name='student' {...student} />
    </Admin>
  );
}

export default App;
