import { Button } from './components/ui/button'
import './App.css'
import CustomQuickInfoCard from './components/CustomComponents/CustomQuickInfoCard/customQuickInfoCard'
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <CustomQuickInfoCard
        title="Total Patients"
        description="Active registered users"
        content="12"
        footer="Compared to last month: +10%"
        action="View details"
      />
    </div>

  )

}

export default App
