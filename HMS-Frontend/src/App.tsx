import './App.css'
import QuickActionSection from './sections/quickActions/quickActionSection'
import { AppSidebar } from './sections/sidebar/sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { SidebarTrigger } from './components/ui/sidebar';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <Router>
    <div className="flex min-h-svh flex-col items-center justify-start">
      <SidebarProvider>
        <AppSidebar/>
        <SidebarTrigger className="bg-white text-black hover:bg-gray-200" />
         <main className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inbox" element={<QuickActionSection />} />
          </Routes>
        </main>
      </SidebarProvider>
    </div>
    </Router>

  )

}

export default App
