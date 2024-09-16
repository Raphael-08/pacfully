"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PrinterIcon, FileTextIcon, BookOpenIcon, GlobeIcon, PackageIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'



const services = [
    {
      name: "Packaging Service",
      description: "Custom packaging solutions for your products",
      price: 175.00,
      icon: PackageIcon,
      image: [
        "https://image.fluxpro.ai/custom/209fa902-8d5a-44f2-8611-26e4b2a9a2ca.jpg",
        "https://image.fluxpro.ai/custom/3089d90b-6243-48d5-8a79-5a21b37f5c3f.jpg",
        "https://image.fluxpro.ai/custom/a6a607ba-af94-4ed0-8430-bd77a3a3cd75.jpg",

      ]
    },
    {
    name: "Business Card Printing",
    description: "High-quality business card printing services",
    price: 50.00,
    icon: PrinterIcon,
    image: [
        "https://image.fluxpro.ai/custom/17255f89-ca6d-4002-9869-c0e1fc501044.jpg",
        "https://image.fluxpro.ai/custom/666232f4-9ae1-4171-8071-29446a60d2ed.jpg",
        "https://image.fluxpro.ai/custom/546890e2-5b5f-43f6-97bf-586fc18311e2.jpg",
    ]
  },
  {
    name: "Flyer Printing",
    description: "Professional flyer printing services",
    price: 100.00,
    icon: FileTextIcon,
    image: [
        "https://image.fluxpro.ai/custom/9c4fc44d-8699-4323-a888-e5d5825acafe.jpg",
        "https://image.fluxpro.ai/custom/40867a53-de1b-4702-95da-7daf55268c12.jpg",
        
    ]
  },
  {
    name: "Global Services",
    description: "Various global printing services",
    price: 200.00,
    icon: GlobeIcon,
    image: [
        "https://image.fluxpro.ai/custom/2a4246bc-7512-4263-9aa2-5a6d826746b7.jpg",
        "https://image.fluxpro.ai/custom/b77d506a-0c1b-4607-a990-90c8f70a5dbb.jpg",
    ]
  },
  {
    name: "Brochure Printing",
    description: "Custom brochure printing services",
    price: 150.00,
    icon: BookOpenIcon,
    image: [
        "https://image.fluxpro.ai/custom/cc43dc9b-8741-4f26-8fec-08f48e0ccfb6.jpg",
        "https://image.fluxpro.ai/custom/66a19917-163e-4d8e-a0a3-4668972c3aaf.jpg",
        "https://image.fluxpro.ai/custom/66a19917-163e-4d8e-a0a3-4668972c3aaf.jpg"
    ]
  }
]

export default function Component() {
    const [currentImages, setCurrentImages] = useState(services.map(service => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevIndices => 
        prevIndices.map((index, serviceIndex) => (index + 1) % services[serviceIndex].image.length)
      )
    }, 5000) // Change image for every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const changeImage = (serviceIndex: number, direction: 'prev' | 'next') => {
    setCurrentImages(prevIndices => 
      prevIndices.map((index, i) => {
        if (i === serviceIndex) {
          const newIndex = direction === 'next' 
            ? (index + 1) % services[i].image.length
            : (index - 1 + services[i].image.length) % services[i].image.length
          return newIndex
        }
        return index
      })
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Printing Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <div className="relative h-48">
              <img 
                src={service.image[currentImages[index]]} 
                alt={service.name} 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <button 
                onClick={() => changeImage(index, 'prev')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => changeImage(index, 'next')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-2xl font-bold">${service.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Order Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}