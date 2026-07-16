export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">
          <span className="title-emoji">🐱</span>
          댄싱 캣
          <span className="title-emoji">🎵</span>
        </h1>
        <p className="subtitle">신나는 고양이의 댄스 타임!</p>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <p>Made with ❤️ and 🐾</p>
      </footer>
    </div>
  )
}
