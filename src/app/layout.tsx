import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import AIChatbot from '@/components/AIChatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Real Estate - Luxury Properties & Investment Opportunities',
  description: 'Discover premium real estate properties, luxury homes, and investment opportunities. Trust, Quality, Innovation in every project.',
  keywords: 'real estate, luxury properties, investment, residential, commercial, villas, apartments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Modern Real Estate</h3>
                <p className="text-gray-400">Your trusted partner in luxury real estate and investment opportunities.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
                  <li><a href="/map" className="hover:text-white transition-colors">Property Map</a></li>
                  <li><a href="/investment" className="hover:text-white transition-colors">Investment</a></li>
                  <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Email: info@modernrealestate.com</li>
                  <li>WhatsApp: +1 (555) 987-6543</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Modern Real Estate. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <AIChatbot />
      </body>
    </html>
  )
}
