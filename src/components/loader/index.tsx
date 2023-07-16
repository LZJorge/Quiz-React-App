import styles from './style.module.scss'

const Loader: React.FC = () => {
  return (
    <div className={styles['loading-box']}>
      <div className={styles["loading-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader