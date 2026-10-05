import { lazy, Suspense, useEffect, useState } from 'react'

const Home = lazy(() => import('./home/home.jsx'))
const About = lazy(() => import('./about/about.jsx'))

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setPathname(path)
  }

  const Page = pathname.replace(/\/+$/, '') === '/about' ? About : Home
  return (
    <Suspense fallback={null}>
      <Page onNavigate={navigate} />
    </Suspense>
  )
}

export default App
