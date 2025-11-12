import styles from './index.module.css'

const Input = () => {
  console.log(styles)
  return <input className={styles.input} placeholder="Test input" id='test' name='test'/>
}

export default Input
