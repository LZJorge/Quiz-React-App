import './index.css'

const Loader: React.FC = () => {
  return (
    <div className="loading-box">
      <div className="loading-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader