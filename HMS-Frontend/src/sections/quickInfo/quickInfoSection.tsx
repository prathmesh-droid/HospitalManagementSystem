
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import CustomQuickInfoCard from "../../components/CustomComponents/CustomQuickInfoCard/customQuickInfoCard"

export function CarouselSpacing() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {[
          {
            title: "Total Patients",
            description: "Active registered users",
            content: "Total Patients consulted: 120",
          },
          {
            title: "Active Patients",
            description: "Total scheduled appointments",
            content: "Patients consulting: 12",
          },
          {
            title: "Today's Appointments",
            description: "Appointments scheduled today",
            content: "Patients consulting: 6",
          },
        ].map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1 h-full">
              <CustomQuickInfoCard
                title={item.title}
                description={item.description}
                content={item.content}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
