import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Waves } from "lucide-react";
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";

const FeaturedDeals = () => {
  const deals = [
    {
      id: 1,
      image: hotel1,
      title: "Ocean Paradise Resort",
      location: "Maldives",
      rating: 4.8,
      reviews: 1247,
      originalPrice: 450,
      salePrice: 299,
      discount: 34,
      amenities: ["Pool", "WiFi", "Spa", "Beach Access"],
      icons: [Waves, Wifi, Car]
    },
    {
      id: 2,
      image: hotel2,
      title: "Alpine Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.6,
      reviews: 892,
      originalPrice: 320,
      salePrice: 245,
      discount: 23,
      amenities: ["Ski Access", "WiFi", "Restaurant", "Spa"],
      icons: [Wifi, Car]
    },
    {
      id: 3,
      image: hotel3,
      title: "Historic Grand Hotel",
      location: "Prague, Czech Republic",
      rating: 4.7,
      reviews: 2156,
      originalPrice: 180,
      salePrice: 129,
      discount: 28,
      amenities: ["Historic", "WiFi", "Restaurant", "City Center"],
      icons: [Wifi, Car]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-travel-sky/20 to-travel-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Featured Deals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing hotels with exclusive discounts. Limited time offers you won't find anywhere else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {deals.map((deal) => (
            <Card key={deal.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-travel-sunset text-white font-bold px-3 py-1">
                  {deal.discount}% OFF
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-travel-sunset text-travel-sunset" />
                    <span className="text-sm font-semibold">{deal.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{deal.location}</span>
                    <span className="ml-auto text-sm">({deal.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  {deal.icons.map((Icon, index) => (
                    <div key={index} className="w-8 h-8 bg-travel-sky/20 rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">${deal.salePrice}</span>
                      <span className="text-lg text-muted-foreground line-through">${deal.originalPrice}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">per night</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  View Deal
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;