
const ChildC = ({ username}) => {
  return (
    <div style={{border: '1px solid', padding: '8px'}}>
        ChildC
       <p className="text-red-500">Username: {username}</p>
    </div>
  )
}

export default ChildC