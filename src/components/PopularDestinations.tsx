import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from "lucide-react";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      city: "Paris",
      country: "France",
      hotels: 1248,
      avgPrice: 189,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      city: "Tokyo",
      country: "Japan", 
      hotels: 892,
      avgPrice: 156,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      city: "Bali",
      country: "Indonesia",
      hotels: 567,
      avgPrice: 98,
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      city: "New York",
      country: "USA",
      hotels: 2156,
      avgPrice: 278,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      city: "Santorini",
      country: "Greece",
      hotels: 324,
      avgPrice: 245,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      city: "Dubai",
      country: "UAE",
      hotels: 678,
      avgPrice: 198,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the world's most sought-after travel destinations. 
            From bustling cities to serene beaches, find your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm opacity-90">{destination.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{destination.city}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Hotels available</span>
                    <div className="text-lg font-semibold">{destination.hotels.toLocaleString()}+ properties</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">Avg. price/night</span>
                    <div className="text-lg font-semibold text-primary">${destination.avgPrice}</div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  <Plane className="w-4 h-4 mr-2" />
                  Explore {destination.city}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow"
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;