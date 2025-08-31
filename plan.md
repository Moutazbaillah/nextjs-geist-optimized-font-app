Below is the detailed, step-by-step implementation plan for the Modern Real Estate Marketing Website. This plan outlines every dependent file to be created or modified, error handling best practices, and UI/UX considerations. Please review and adjust the sample data, API keys, or language options as needed.

---

### 1. Global Layout & Navigation (src/app/layout.tsx)
- **Add a header with navigation links:**  
  - Include links for Home, Projects, Map, Booking, Investment, and Blog using Next.js’ Link component.  
  - Example:
  ```tsx
  import Link from "next/link";
  import { useState } from "react";

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState("EN");
    const toggleLanguage = () => setLanguage(prev => prev === "EN" ? "AR" : "EN");
    return (
      <html lang="en">
        <head>
          <title>Modern Real Estate</title>
        </head>
        <body className="bg-white text-gray-800">
          <header className="flex justify-between items-center p-4 shadow-md">
            <nav className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/map">Map</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/investment">Investment</Link>
              <Link href="/blog">Blog</Link>
            </nav>
            <button onClick={toggleLanguage} className="px-3 py-1 border rounded">
              {language}
            </button>
          </header>
          <main>{children}</main>
          {/* Optionally, include a footer here */}
          {/* AI Chatbot floating toggle can be added here later */}
        </body>
      </html>
    );
  }
  ```
- **Error Handling & Best Practices:**  
  - Use try–catch if the language context requires an asynchronous load.  
  - Ensure responsive design using Tailwind classes.

---

### 2. Landing Page (src/app/page.tsx)
- **Hero Section:**  
  - Display a panoramic luxury image or video using a `<video>` tag (with a fallback `<img>`).  
  - Use a placeholder image URL following the guidelines.
  ```tsx
  import Link from "next/link";

  export default function LandingPage() {
    const heroImage = "https://placehold.co/1920x1080?text=Luxury+estate+panoramic+view+with+modern+design";
    return (
      <section className="relative h-screen">
        {/* Video element can be used if a source is available */}
        <img
          src={heroImage}
          alt="Panoramic view of a luxury real estate project with modern architecture and premium finishes"
          onError={(e) => { (e.target as HTMLImageElement).src = heroImage; }}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Welcome to Modern Real Estate</h1>
          <Link href="/projects">
            <a className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500">
              Explore Our Projects
            </a>
          </Link>
        </div>
      </section>
    );
  }
  ```
- **Company Values Section:**  
  - Below the hero, add a section highlighting Trust, Quality, and Innovation in a three-column layout.
  ```tsx
  // Within the same LandingPage component:
  <section className="py-12 bg-gray-100">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {["Trust", "Quality", "Innovation"].map((value) => (
        <div key={value} className="p-6 bg-white rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">{value}</h2>
          <p className="text-sm text-gray-600">Our commitment to {value.toLowerCase()} sets us apart in the market.</p>
        </div>
      ))}
    </div>
  </section>
  ```

---

### 3. Projects Section (src/app/projects/page.tsx)
- **Filtering Options & Property Cards:**  
  - Create a filter form with inputs for price, location, rooms, and area size using controlled components with error validations.
  - Render a grid of property cards by mapping sample property data.
  ```tsx
  import { useState } from "react";
  import PropertyCard from "../../components/PropertyCard";

  const sampleProperties = [
    {
      id: 1,
      title: "Elegant Residential Villa",
      price: "$1,200,000",
      location: "Dubai",
      image: "https://placehold.co/400x300?text=Elegant+residential+villa+exterior+front+view",
      rooms: 5,
      area: "4500 sqft",
      type: "Residential"
    },
    // Additional sample objects…
  ];

  export default function ProjectsPage() {
    const [filters, setFilters] = useState({ price: "", location: "", rooms: "", area: "" });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // (Include filtering logic based on state before mapping over sampleProperties)
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Our Properties</h1>
        <form className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input type="text" name="price" placeholder="Price" value={filters.price} onChange={onChange} className="p-2 border rounded" />
          <input type="text" name="location" placeholder="Location" value={filters.location} onChange={onChange} className="p-2 border rounded" />
          <input type="text" name="rooms" placeholder="Rooms" value={filters.rooms} onChange={onChange} className="p-2 border rounded" />
          <input type="text" name="area" placeholder="Area Size" value={filters.area} onChange={onChange} className="p-2 border rounded" />
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
    );
  }
  ```

---

### 4. Property Card Component (src/components/PropertyCard.tsx)
- **Component Details:**  
  - Create a new component that accepts property details as props.
  - Ensure the image uses a placeholder URL with proper alt text and error fallback.
  ```tsx
  interface PropertyProps {
    title: string;
    price: string;
    location: string;
    image: string;
    rooms: number;
    area: string;
    type: string;
  }

  export default function PropertyCard({ title, price, location, image }: PropertyProps) {
    return (
      <div className="border rounded overflow-hidden shadow hover:shadow-lg transition duration-300">
        <img
          src={image}
          alt={`Image of ${title} located in ${location} showing its front view`}
          className="w-full h-56 object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = image; }}
        />
        <div className="p-4">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-gray-600">{location}</p>
          <p className="text-blue-600 font-semibold">{price}</p>
        </div>
      </div>
    );
  }
  ```

---

### 5. Interactive Map (src/app/map/page.tsx)
- **Map Integration:**  
  - Create a page that embeds an interactive map using either Google Maps (if API key provided) or Leaflet with OpenStreetMap.  
  - Display property markers with a pop-up on click.
  ```tsx
  // Example using a simplified Leaflet implementation
  import dynamic from "next/dynamic";
  import { useState } from "react";

  // Dynamically import the Map component to prevent SSR issues
  const Map = dynamic(() => import("../../components/InteractiveMap"), { ssr: false });

  export default function MapPage() {
    return (
      <div className="h-screen">
        <h1 className="text-3xl font-bold p-4">Explore Properties on the Map</h1>
        <Map />
      </div>
    );
  }
  ```
- **InteractiveMap Component (src/components/InteractiveMap.tsx):**  
  - In this new component, initialize the map, add markers with sample property data, and handle marker click events to show property details in a modal/pop-up.
  - Include error fallback if the map fails to load.

---

### 6. Smart Booking & Inquiry Panel
- **Booking Page (src/app/booking/page.tsx):**  
  - Create a page that renders the booking form.
  ```tsx
  import BookingForm from "../../components/BookingForm";

  export default function BookingPage() {
    return (
      <main className="p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Book a Visit</h1>
        <BookingForm />
      </main>
    );
  }
  ```
- **BookingForm Component (src/components/BookingForm.tsx):**  
  - Build a controlled form with fields for Name, Phone, WhatsApp, and Property Type.
  - Implement basic validation and error messages.
  ```tsx
  import { useState } from "react";

  export default function BookingForm() {
    const [formState, setFormState] = useState({ name: "", phone: "", whatsapp: "", propertyType: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formState.name || !formState.phone) {
        setError("Please fill required fields.");
        return;
      }
      setError("");
      try {
        // Simulate submission or call API endpoint
        alert("Booking submitted successfully!");
      } catch (err) {
        setError("Submission failed. Please try again.");
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" placeholder="Name" value={formState.name} onChange={handleChange} className="p-2 border rounded w-full" />
        <input name="phone" type="text" placeholder="Phone" value={formState.phone} onChange={handleChange} className="p-2 border rounded w-full" />
        <input name="whatsapp" type="text" placeholder="WhatsApp" value={formState.whatsapp} onChange={handleChange} className="p-2 border rounded w-full" />
        <input name="propertyType" type="text" placeholder="Property Type" value={formState.propertyType} onChange={handleChange} className="p-2 border rounded w-full" />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Submit</button>
      </form>
    );
  }
  ```

---

### 7. Investment Section (src/app/investment/page.tsx)
- **Chart and Statistics:**  
  - Use the existing Chart component (src/components/ui/chart.tsx) to display ROI, rental yields, and projected growth.
  - Render a short summary text beside the chart.
  ```tsx
  import Chart from "../../components/ui/chart";

  export default function InvestmentPage() {
    // Sample ROI data can be hardcoded or loaded from an API.
    const roiData = { labels: ["Year 1", "Year 3", "Year 5"], datasets: [{ label: "ROI", data: [5, 8, 12] }] };

    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Investment Opportunities</h1>
        <div className="mb-6">
          <p className="text-gray-700">
            Explore our special offers for investors with expected rental yields and property value projections after 5 years.
          </p>
        </div>
        <Chart data={roiData} />
      </main>
    );
  }
  ```

---

### 8. Real Estate Blog (src/app/blog/page.tsx)
- **Blog Listing Page:**  
  - Create a page that lists sample blog posts including articles like “Best Neighborhoods to Live In” and “Buying Tips.”
  - Use semantic HTML (article, header) for SEO.
  ```tsx
  const samplePosts = [
    { id: 1, title: "Best Neighborhoods to Live In", snippet: "Discover the top neighborhoods that offer great value...", date: "2023-08-01" },
    { id: 2, title: "Buying Tips", snippet: "Learn essential tips when buying your first property...", date: "2023-07-25" },
    // Additional posts…
  ];

  export default function BlogPage() {
    return (
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Real Estate Blog</h1>
        {samplePosts.map(post => (
          <article key={post.id} className="mb-6 p-4 border rounded hover:shadow-md">
            <header className="mb-2">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </header>
            <p className="text-gray-700">{post.snippet}</p>
            <a href="#" className="text-blue-600 hover:underline">Read More</a>
          </article>
        ))}
      </main>
    );
  }
  ```

---

### 9. AI Real Estate Chatbot
- **AIChatbot Component (src/components/AIChatbot.tsx):**  
  - Build a floating/sticky chat panel with a toggle button.  
  - Include a message history area and an input field.  
  - On submit, call the API endpoint (see next step) using async fetch with proper error handling.
  ```tsx
  import { useState } from "react";

  export default function AIChatbot() {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const sendMessage = async () => {
      if (!input.trim()) return;
      const newMessage = { sender: "user", text: input };
      setMessages([...messages, newMessage]);
      setInput("");
      try {
        const res = await fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newMessage.text })
        });
        const data = await res.json();
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } catch (err) {
        setError("Failed to get a response. Please try again.");
      }
    };

    return (
      <div className="fixed bottom-4 right-4 w-80 bg-white border rounded shadow-lg">
        <div className="p-4 border-b">
          <h3 className="font-bold">AI Chatbot</h3>
        </div>
        <div className="p-4 h-60 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className={`${msg.sender === "bot" ? "text-blue-600" : "text-gray-800"} mb-2`}>
              {msg.text}
            </div>
          ))}
          {error && <p className="text-red-600">{error}</p>}
        </div>
        <div className="p-4 border-t">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your question..."
            className="w-full p-2 border rounded mb-2"
          />
          <button onClick={sendMessage} className="w-full px-4 py-2 bg-blue-600 text-white rounded">
            Send
          </button>
        </div>
      </div>
    );
  }
  ```
- **Chat API Route (src/app/api/ai/chat/route.ts):**  
  - Create a Next.js API route to handle POST requests.  
  - Validate input, call the OpenAI API if an API key is provided (or use a rule-based fallback), and return a JSON reply.
  ```tsx
  import { NextResponse } from "next/server";

  export async function POST(req: Request) {
    try {
      const { message } = await req.json();
      if (!message) return NextResponse.json({ error: "No message provided" }, { status: 400 });

      // Example: If OpenAI API key is set in env, forward the query; else use a static response.
      const openAiKey = process.env.OPENAI_API_KEY;
      let reply = "This is a rule-based response example.";
      if (openAiKey) {
        // Call the real OpenAI API here. (Include try-catch and timeout handling.)
        // For brevity, we assume a successful API call and static reply.
        reply = "Based on your inquiry, here is a property suggestion.";
      }
      return NextResponse.json({ reply });
    } catch (error) {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  ```

---

### 10. Internationalization & Bilingual Support
- **Integrate a Language Toggle:**  
  - The global layout (src/app/layout.tsx) already includes a simple toggle.  
  - Replace text strings with a translation object or use a simple context/state solution for English/Arabic.  
  - Update components to read from the current language state (for now, manually adjust string literals for demonstration).

---

### 11. Additional Considerations & Best Practices
- **Error Handling:**  
  - Wrap API calls (both on the client and server) with try–catch; display user-friendly error messages.  
  - For image elements, set an onError handler to maintain layout integrity.  
- **Responsive & Modern UI:**  
  - Use Tailwind CSS classes consistently for spacing, typography, and color.  
  - Avoid external image services except for the placeholder images provided via https://placehold.co/.
- **Dependencies & Data:**  
  - Use sample data for properties and blog posts but structure the code so that real data from Firebase/MySQL can be integrated later.  
  - Validate forms and API responses as part of a robust user experience.
- **Testing:**  
  - Validate API routes using curl commands (as described in the guidelines
