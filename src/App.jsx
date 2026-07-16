import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './styles/app.css'

function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation()

  return (
    <Layout>
      <div className="stage">
        <DancingCat isPlaying={isPlaying} speed={speed} onToggle={toggle} />
        <AnimationControls
          isPlaying={isPlaying}
          speed={speed}
          onToggle={toggle}
          onSpeedChange={changeSpeed}
        />
      </div>
    </Layout>
  )
}

export default App
