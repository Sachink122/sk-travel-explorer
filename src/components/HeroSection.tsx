import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary-glow/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-travel-sunset to-travel-sand bg-clip-text text-transparent">
              Getaway
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Compare millions of hotels, flights, and car rentals worldwide. 
            Start your journey with SK Travel today.
          </p>

          {/* Search Card */}
          <Card className="bg-white/95 backdrop-blur-sm p-6 md:p-8 max-w-5xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Destination
                </label>
                <Input 
                  placeholder="Where do you want to go?" 
                  className="h-12 text-base"
                />
              </div>

              {/* Check-in */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  Check-in
                </label>
                <Input 
                  type="date" 
                  className="h-12 text-base"
                />
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  Check-out
                </label>
                <Input 
                  type="date" 
                  className="h-12 text-base"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  Guests
                </label>
                <Input 
                  placeholder="2 adults" 
                  className="h-12 text-base"
                />
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Hotels
            </Button>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/80 text-sm md:text-base">Hotels Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm md:text-base">Airlines</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50M+</div>
              <div className="text-white/80 text-sm md:text-base">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;