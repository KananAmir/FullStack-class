
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
  
  
  console.log(user);
  user = 'Sevər'
  
  return (
    <div>
      Hello, {user}!
    </div>
  )
}
 export default Wellcome