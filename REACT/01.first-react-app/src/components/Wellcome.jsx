import Button from "./Button"

const Wellcome = () => {
  const user = 'React Learner'
  return (
    <div>
        <h1>Welcome, {user}</h1>
        <p>This is your first React component.</p>
        <Button />
    </div>
  )
}

export default Wellcome