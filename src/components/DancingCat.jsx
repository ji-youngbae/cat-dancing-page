import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

export default function DancingCat({ isPlaying, speed, onToggle }) {
  const duration = (1 / speed).toFixed(2)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle?.()
    }
  }

  return (
    <div className="dancing-cat-wrapper">
      <div
        className={`dancing-cat ${isPlaying ? 'dancing' : 'paused'}`}
        style={{ '--dance-duration': `${duration}s` }}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '고양이 댄스 정지 (스페이스바 또는 엔터)' : '고양이 댄스 시작 (스페이스바 또는 엔터)'}
        aria-pressed={isPlaying}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <img src={catSvg} alt="고양이" className="cat-image" />

        {/* 음표 파티클 */}
        {isPlaying && (
          <div className="music-notes" aria-hidden="true">
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </div>
        )}
      </div>

      {/* 그림자 */}
      <div className={`cat-shadow ${isPlaying ? 'shadow-dancing' : ''}`} aria-hidden="true" />
    </div>
  )
}
