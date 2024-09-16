"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PrinterIcon, FileTextIcon, BookOpenIcon, GlobeIcon, PackageIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"



const services = [
    {
      name: "Packaging Service",
      description: "Custom packaging solutions for your products",
      price: 175.00,
      icon: PackageIcon,
      image: [
        "packing1",
        "packing2",
        "packing3",
      ]
    },
    {
    name: "Business Card Printing",
    description: "High-quality business card printing services",
    price: 50.00,
    icon: PrinterIcon,
    image: [
        "business1",
        "business2",
        "business3",
    ]
  },
  {
    name: "Flyer Printing",
    description: "Professional flyer printing services",
    price: 100.00,
    icon: FileTextIcon,
    image: [
        "flyer1",
        "flyer2",        
    ]
  },
  {
    name: "Global Services",
    description: "Various global printing services",
    price: 200.00,
    icon: GlobeIcon,
    image: [
        "global1",
        "global2",
    ]
  },
  {
    name: "Brochure Printing",
    description: "Custom brochure printing services",
    price: 150.00,
    icon: BookOpenIcon,
    image: [
        "brochure1",
        "brochure2",
        "brochure3",
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
              <Image src={"/services/"+service.image[currentImages[index]]+".png"} width={500} height={500} alt={service.name} className="w-full h-full object-cover transition-opacity duration-500" />
              <button 
                onClick={() => changeImage(index, 'prev')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => changeImage(index, 'next')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full"
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