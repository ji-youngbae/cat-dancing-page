export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 컨트롤">
      <button
        className={`btn-toggle ${isPlaying ? 'btn-stop' : 'btn-play'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 춤춰라!'}
      </button>

      <div className="speed-control">
        <label htmlFor="speed-slider" className="speed-label">
          속도: <span className="speed-value">{speed}x</span>
        </label>
        <input
          id="speed-slider"
          type="range"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={e => onSpeedChange(Number(e.target.value))}
          className="slider"
          aria-label="애니메이션 속도 조절"
        />
        <div className="speed-labels" aria-hidden="true">
          <span>느리게</span>
          <span>빠르게</span>
        </div>
      </div>
    </div>
  )
}
