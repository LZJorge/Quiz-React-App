import { Link } from "react-router-dom"
import Layout from "../../../components/layout"
import styles from './style.module.scss'

const Settings: React.FC = () => {
  return (
    <Layout>
      <h2 className={styles.title}>
        Configuración
      </h2>

      <div className={styles.box}>
        <div className={styles.left}>
          <h3>Perfil</h3>

          <ul>
            <li>
              <Link to={'/settings/user/updateAvatar'}>Cambiar avatar</Link> 
            </li>
            <li> 
              <Link to={'/settings/user/updatePassword'}>Cambiar contraseña</Link> 
            </li>
            <li> 
              <Link className={styles.delete} to={'/settings/user/delete'}>Eliminar cuenta</Link> 
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Settings