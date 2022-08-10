import styles from "./styles.module.css"

const CustomButton = ({ event, label }) => {
  return <button onClick={event} className={styles['btn']}>{label}</button>
}

export default CustomButton