import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import AppContent from './AppContent'
import { ErrorFallback } from './components/layout/ErrorFallback'
import { Loading } from './components/layout/Loading'
import { UserProvider } from './context'

// create entry point using unique id from Document
const rootElement = document.getElementById('root')
// test for root element prior to invoking ReactDOM.createRoot
if (!rootElement) throw new Error('Failed to find the root element')
// create root
const approot = createRoot(rootElement)
// initial render

approot.render(
  // <ErrorBoundary FallbackComponent={ErrorFallback}>
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <UserProvider>
            <Routes>
              <Route path='/*' element={<AppContent />} />
            </Routes>
          </UserProvider>
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  </Suspense>
  // </ErrorBoundary>
)
