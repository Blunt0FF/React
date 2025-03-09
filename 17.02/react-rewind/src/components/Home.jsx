import { ThemeProvider } from '../contexts/ThemeContext';
import ComplexCalculation from './ComplexCalculation';
import Input from './Input';
import ThemedComponent from './ThemedComponent';
import ParentComponent from './UseCallback';
import UserList from './UserList';

export default function Home() {
    return (
      <ThemeProvider>
        {/* <ThemedComponent /> */}
        {/* <UserList /> */}
        {/* <ComplexCalculation number={8} /> */}
        {/* <ParentComponent /> */}
        <Input />
      </ThemeProvider>
    )
}