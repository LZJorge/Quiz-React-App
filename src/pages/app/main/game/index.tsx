import { sendAnswer } from '@/services/appServices'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '@/components/button'
import Layout from '@/components/layout'
import Loader from '@/components/loader'
import { useQuestion } from '@/hooks/useQuestion'
import { API,CATEGORY_PARAM, QUESTION_RESPONSE } from '@/consts'
import styles from './style.module.scss'

const Game: React.FC = () => {
  const [query] = useSearchParams()
  const categoryParam = query.get(CATEGORY_PARAM)
  const { question, isLoading, setIsLoading, setNewQuestion } = categoryParam ?
    useQuestion(categoryParam) : useQuestion()

  const handleClick = async (value: string) => {
    if(isLoading) return
    setIsLoading(true)

    const response = await sendAnswer(value)

    if (response.code == QUESTION_RESPONSE.SUCCESS) {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }

    setNewQuestion(true)
  }

  return (
    <Layout>
      {question ? (
        <>
          <div className={styles['question-box']}>
            <h3>
              {question.title}
            </h3>
          </div>

          <div className={styles['category-box']}>
            <img 
              src={`${API}/${question.categoryImg}`} 
              alt="" 
            />
            <h3>{question.category}</h3>
          </div>

          <div className={styles['difficulty-box']}>
            <div 
              className={
                styles[[question.difficulty.toLowerCase()].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '')]
              }>
            </div>
            <p> Dificultad </p>
          </div>

          { isLoading ? (
            <Loader />
          ) : (
            <div className={styles['option-buttons']}>
              { question.options.map((value: string, key: number) => {
                return (
                  <Button
                    type='button'
                    className='primary'
                    value={value}
                    onClick={() => handleClick(value)}
                    key={key}
                    size='full'
                  >
                    {value}
                  </Button>
                )
              }) 
              }
            </div>
          ) }
        </>
      ) : (
        <h3> No existe la categoria </h3>
      )}
    </Layout>
  )
}

export default Game