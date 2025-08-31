"use client"

import Link from 'next/link'

export default function LandingPage() {
  const heroImage = "https://placehold.co/1920x1080?text=Luxury+modern+real+estate+panoramic+view+with+premium+architecture"

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Panoramic view of luxury real estate projects featuring modern architecture and premium finishes"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = heroImage;
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Modern Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl leading-relaxed">
            Discover luxury properties and investment opportunities with unmatched quality and innovation
          </p>
          <Link 
            href="/projects"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Projects
          </Link>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Modern Real Estate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence drives everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trust",
                description: "Built on transparency and integrity, we ensure every transaction is secure and reliable.",
                icon: "🤝"
              },
              {
                title: "Quality",
                description: "Premium materials, exceptional craftsmanship, and attention to detail in every project.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description: "Cutting-edge technology and modern design solutions for contemporary living.",
                icon: "🚀"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most exclusive listings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Luxury Villa Estate",
                price: "$2,500,000",
                location: "Beverly Hills",
                image: "https://placehold.co/400x300?text=Luxury+villa+with+modern+architecture+and+pool",
                type: "Residential"
              },
              {
                title: "Modern Commercial Tower",
                price: "$15,000,000",
                location: "Downtown",
                image: "https://placehold.co/400x300?text=Modern+commercial+tower+with+glass+facade",
                type: "Commercial"
              },
              {
                title: "Beachfront Penthouse",
                price: "$4,200,000",
                location: "Malibu",
                image: "https://placehold.co/400x300?text=Beachfront+penthouse+with+ocean+views",
                type: "Luxury"
              }
            ].map((property, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={property.image}
                  alt={`${property.title} located in ${property.location}`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = property.image;
                  }}
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{property.type}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-2xl font-bold text-blue-600">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts help you discover the perfect investment opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Visit
            </Link>
            <Link 
              href="/map"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Explore Map
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
