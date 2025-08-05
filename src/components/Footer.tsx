import { Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold">SK Travel</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted travel companion for finding the perfect accommodations 
              and experiences worldwide. Compare, book, and save on your next adventure.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-travel-sky cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-travel-sky cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-travel-sky cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-travel-sky cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flight Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Car Rental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vacation Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Booking Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Tips</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">About SK Travel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 SK Travel. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-primary-foreground/60">
              <span>🌍 Global Coverage</span>
              <span>🔒 Secure Booking</span>
              <span>📞 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;