import logo from './imageInSrc.jpg'
import './App.css'
import './style.css'

function App() {
  return (
    <div>
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className='title red'>Kais lachaal</h1>
        <br />
        <img className='displayed' src='/imageInPublic.jpg' />
        <br />
        <img className='displayed' src={logo} />
      </div>
      <video width={320} height={240} controls>
        <source src='/video.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default App
