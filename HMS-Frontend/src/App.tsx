import './App.css'
import CustomQuickInfoCard from './components/CustomComponents/CustomQuickInfoCard/customQuickInfoCard'
import QuickActionSection from './sections/quickActions/quickActionSection'
import { CarouselSpacing } from './sections/quickInfo/quickInfoSection'
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-start">
      {/* <Button>Click me</Button> */}
      <CarouselSpacing></CarouselSpacing>
      
      <QuickActionSection></QuickActionSection>
    </div>

  )

}

export default App
