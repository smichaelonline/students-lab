import logo from './logo.svg';
import './App.css';
import { studentList } from './data/data'
import Student from './components/Student';

function App() {  
  return (
    <>
      {studentList.map(student => 
        <Student key={student.name} student={student} />
        )}
    </>
  );
}

export default App;
