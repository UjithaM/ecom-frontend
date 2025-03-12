import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const slides = [
    {
        id: 1,
        title: "Summer Collection 2025",
        description: "Discover the latest trends for the season",
        cta: "Shop Now",
        ctaLink: "/collections/summer",
        image: "https://via.placeholder.com/1600x600",
        bgColor: "bg-amber-50",
    },
    {
        id: 2,
        title: "New Arrivals",
        description: "Be the first to shop our newest products",
        cta: "Explore",
        ctaLink: "/new-arrivals",
        image: "https://via.placeholder.com/1600x600",
        bgColor: "bg-blue-50",
    },
    {
        id: 3,
        title: "Special Offer",
        description: "Up to 50% off on selected items",
        cta: "View Deals",
        ctaLink: "/offers",
        image: "https://via.placeholder.com/1600x600",
        bgColor: "bg-rose-50",
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className={`w-full flex-shrink-0 ${slide.bgColor}`}>
                        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 md:space-y-6">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{slide.title}</h1>
                                    <p className="text-lg text-muted-foreground">{slide.description}</p>
                                    <Button asChild size="lg" className="mt-4">
                                        <a href={slide.ctaLink}>{slide.cta}</a>
                                    </Button>
                                </div>
                                <div className="relative h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                                    <img
                                        src={slide.image || "/placeholder.svg"}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full opacity-70 hover:opacity-100"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
            </Button>

            <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full opacity-70 hover:opacity-100"
                onClick={nextSlide}
            >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary" : "bg-muted"}`}
                        onClick={() => setCurrentSlide(index)}
                    >
                        <span className="sr-only">Go to slide {index + 1}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

