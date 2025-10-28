
// import { Fragment } from 'react'
import './App.css'
import Article from './components/Article'
import Books from './components/Books'
import Wellcome from './components/Wellcome'
import Footer from './layout/Footer'
import Header from './layout/Header'
import catImg from './assets/images/cat.jpg'

function App() {

  return (
    <>
      <Header />
      {/* <Greeting /> */}

      <img src={catImg} alt="cat" width={400} />
      <img src="../public/clothing.png" alt="clothing" width={400} />

      <Wellcome />
      <hr />
      <Article />
      <hr />

      <Books />

      <hr />
      <Footer />
    </>
  )
}

export default App



// JSX - JavaScript XML
// A syntax extension for JavaScript that looks similar to XML or HTML
// It allows us to write HTML-like syntax directly within our JavaScript code, making it easier to create and visualize the structure of our UI components.


//components - small, reusable pieces of code that return a React element to be rendered to the page


// function Greeting() {
//   return (
//     <Fragment>
//       <h1>Hello, User!</h1>
//       <p>Lorem ipsum dolor sit.</p>
//     </Fragment>
//   )
// }

// function Greeting() {
//   return (
//     <>
//       <h1>Hello, User!</h1>
//       <p>Lorem ipsum dolor sit.</p>
//     </>
//   )
// }

