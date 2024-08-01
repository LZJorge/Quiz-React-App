import { useContext } from 'react'
import { GuideContext } from '@/context/GameGuideContext'
import styles from './styles.module.scss'

const GameGuide: React.FC = () => {
  const { setShow } = useContext(GuideContext)

  return (
    <div className={styles['game-guide']} onClick={() => setShow(false)}>
      <div
        className={styles['game-guide-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h1>Guía de juego</h1>
          <button
            type="button"
            className={styles.close}
            onClick={() => setShow(false)}
            title='Cerrar'
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        <div className={styles.section}>
          <span className={styles.number}>1</span>
          <h3>Elige una categoría para jugar</h3>
        </div>
        <p>
          En el menú de la izquierda selecciona <strong>Jugar</strong> y posteriormente escoge la categoría.
        </p>

        <div className={styles.section}>
          <span className={styles.number}>2</span>
          <h3>Responde a la pregunta generada</h3>
        </div>
        <p>
          Se presentará la pregunta junto con 4 opciones de respuesta.
        </p>
        <p>
          Escoge la respuesta que consideres correcta haciendo click sobre ella.
        </p>
        <p>
          Se mostrará si la respuesta es correcta o incorrecta.
        </p>

        <div className={styles.section}>
          <span className={styles.number}>3</span>
          <h3>Revisa tu puntaje en Inicio</h3>
        </div>

        <div className={styles.section}>
          <h4>Por cada respuesta correcta 😄 recibirás:</h4>
        </div>
        <ul>
          <li><strong>Fácil:</strong> 10 puntos</li>
          <li><strong>Medio:</strong> 15 puntos</li>
          <li><strong>Difícil:</strong> 20 puntos</li>
        </ul>
        <div className={styles.section}>
          <h4>Por cada respuesta incorrecta perderas 10 puntos ☹️ sin importar la dificultad. </h4>
        </div>
      </div>
    </div>
  )
}

export default GameGuide