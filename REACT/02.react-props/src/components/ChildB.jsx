import ChildC from "./ChildC"

const ChildB = ({ username }) => {
  return (
    <div style={{border: '1px solid', padding: '8px'}}>
        ChildB
        <ChildC username={username} />
    </div>
  )
}

export default ChildB