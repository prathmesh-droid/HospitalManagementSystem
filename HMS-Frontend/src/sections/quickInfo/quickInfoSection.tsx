
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
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <CustomQuickInfoCard
                      title="Dr. Shripad Bhat"
                      description="Cardiologist"
                      content="Patients consulting: 12"
                      footer="Compared to last month: +10%"
                      action="View details"
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
