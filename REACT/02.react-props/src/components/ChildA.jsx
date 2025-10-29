import ChildB from "./ChildB"

const ChildA = ({ username }) => {
  return (
    <div style={{border: '1px solid', padding: '8px'}}>
        ChildA

        <ChildB username={username} />
    </div>
  )
}

export default ChildA