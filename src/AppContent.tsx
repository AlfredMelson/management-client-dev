import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AppLayout } from './components'
import { Mismatch, Users } from './pages'
import { trpc } from './utils'

export default function AppContent() {
  const location = useLocation()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true
          }
        }
      })
  )

  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:8080/trpc'
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Routes key={location.pathname}>
          <Route path='/' element={<AppLayout />}>
            {/* public routes */}
            <Route index element={<Users />} />
            {/* mismatch route */}
            <Route path='*' element={<Mismatch />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
