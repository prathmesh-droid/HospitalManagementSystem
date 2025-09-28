import { Button } from './components/ui/button'
import './App.css'
import CustomQuickInfoCard from './components/CustomComponents/CustomQuickInfoCard/customQuickInfoCard'
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <CustomQuickInfoCard></CustomQuickInfoCard>
    </div>

  )

}

export default App
