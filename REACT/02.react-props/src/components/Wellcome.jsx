
// const Wellcome = (props) => {
//   console.log(props);

//   return (
//     <div>
//         Hello, {props.user}!
//     </div>
//   )
// }

// export default Wellcome

// const Wellcome = (props) => {

//   const { user } = props;
  
//   return (
//     <div>
//       Hello, {user}!
//     </div>
//   )
// }

// export default Wellcome

const Wellcome = ({ user = 'Guest' }) => {

  return (
    <div>
      Hello, {user}!
    </div>
  )
}

export default Wellcome