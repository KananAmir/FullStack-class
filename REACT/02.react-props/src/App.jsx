import './App.css'
import Wellcome from './components/Wellcome'

function App() {

  return (
    <>
     Hello, React Props!
     <hr />
     <Wellcome user={'Samir'} />
     <Wellcome user={'Mahir'}/>
     <Wellcome user={'Rauf'}/>
     <Wellcome />
    </>
  )
}

export default App


// Props:// - Props (Properties) are used to pass data from a parent component to a child component in React.
// - Props are read-only, meaning that a child component cannot modify the props it receives from its parent.
// - Props allow for dynamic and reusable components by enabling the passing of different data to the same component structure.
// - Props can be of any data type, including strings, numbers, objects, arrays, and functions.
// - Props are accessed in a child component via the 'props' parameter or by destructuring the props object.



// function sayHi(username){
//   return `Hello, ${username}`;
// }

// console.log(sayHi('Samir'));
// console.log(sayHi('Mahir'));
