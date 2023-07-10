import './index.css'

const Loading: React.FC = () => {
  return (
    <div className="loading-box">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading