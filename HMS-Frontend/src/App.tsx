import './App.css'
import CustomQuickInfoCard from './components/CustomComponents/CustomQuickInfoCard/customQuickInfoCard'
import QuickActionSection from './sections/quickActions/quickActionSection'
import { CarouselSpacing } from './sections/quickInfo/quickInfoSection'
import RecentAppointmentsSection from './sections/recentAppointments/recentAppointmentsSection'
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-start">
      {/* <Button>Click me</Button> */}
      <CarouselSpacing></CarouselSpacing>
      
      <div className='flex flex-row gap-3 mt-3'>
        <RecentAppointmentsSection></RecentAppointmentsSection>
        <QuickActionSection></QuickActionSection>
      </div>
    </div>

  )

}

export default App
