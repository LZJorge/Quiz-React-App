import { useCallback } from 'react'
import { sendAnswer } from '../../services/appServices'
import { toast } from 'react-toastify'
import Button from '../../components/buttons'
import Layout from '../../components/layout'
import { useQuestion } from '../../hooks/useQuestion'
import './index.css'

const Game: React.FC = () => {
  const { question, setCondition } = useQuestion()

  const handleClick = useCallback(async (value: string) => {
    const response = await sendAnswer(value)

    if (response.code == 'success') {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }

    setCondition(true)
  }, [])

  const renderOptionButtons = question.options.map((value: string, key: string) => {
    return <Button
      children={value}
      type='button'
      className='primary question-button'
      value={value}
      onClick={() => handleClick(value)}
      key={key}
      size='full'
    />
  })

  return (
    <Layout>
      {question && (
        <>
          <div className='question-box'>
            <h3>
              {question.title}
            </h3>
          </div>

          <div className='difficulty-box'>
            <div 
              className={
                [question.difficulty.toLowerCase()].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
              }>
            </div>
            <p> Dificultad </p>
          </div>

          <div className='option-buttons'>
            { renderOptionButtons }
          </div>
        </>
      )}
    </Layout>
  )
}

export default Game