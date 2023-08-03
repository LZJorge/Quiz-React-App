import { Link } from "react-router-dom"
import Layout from "@/components/layout"
import Loader from "@/components/loader"
import useCategory from "@/hooks/useCategories"
import styles from './index.module.scss'

const SelectGame: React.FC = () => {
  const { categories, isLoading } = useCategory()

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          { categories && (
            categories.map( (value, key) => {
              return (
                <Link to={`/app/play?c=${value.slug}`} key={key} className={styles['category-box']}>
                  <img src={`${import.meta.env.VITE_API_URL}/${value.imgUrl}`} alt=""/>

                  { value.name }
                </Link>
              )
            })
          )}

          <Link to={`/app/play`} className={styles['category-box']}>
            <i className='bx bx-help-circle'></i>

            Aleatorio
          </Link>
        </div>   
      )}
    </Layout>
  )
}

export default SelectGame