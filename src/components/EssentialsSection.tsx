import { Card, CardContent } from "./ui/card"

const essentials = [
    {
        id: 1,
        title: "Women's Fashion",
        image: "https://via.placeholder.com/300",
        link: "/category/womens",
    },
    {
        id: 2,
        title: "Men's Collection",
        image: "http://localhost:3000/uploads/products/1741624686457-228306816.png",
        link: "/category/mens",
    },
    {
        id: 3,
        title: "Accessories",
        image: "https://via.placeholder.com/300",
        link: "/category/accessories",
    },

]

export default function EssentialsSection() {
    return (
        <section className="py-12 bg-background">
        <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Shop Essentials</h2>
    <p className="text-muted-foreground max-w-2xl">
        Discover our curated collection of must-have items for every occasion
    </p>

    </div>

            <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 md:gap-6 ">
                {essentials.map((item) => (
                    <a key={item.id} href={item.link} className="block">
                        <Card className="overflow-hidden transition-all duration-200 hover:shadow-md p-0">
                            <CardContent className="p-0">
                                <div className="relative aspect-square">
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-medium">{item.title}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>

    </div>
    </section>
)
}

