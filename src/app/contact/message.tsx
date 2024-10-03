"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function MessageForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwRDi4_KKPvllYZJMCWCzoPe_Vep7orqAlSO9x79rIJyEHLef2jQWQQdT3ntDIe0v5S/exec',{
        method:'Post',
        mode:'cors',
        headers:{'Content-Type':'text/plain',
          'Access-Control-Request-Method':'POST'
        },
        body: JSON.stringify(formData)
      });
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full max-w-md mx-auto border border-gray-500 p-6 rounded-lg shadow-md hover:shadow-2xl hover:border-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        Email us with any questions or inquiries or use our contact data.
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Email us with any questions or inquiries or use our contact data.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Enter your phone (e.g. +14155552675)"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="h-32"
          />
        </div>
        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
          SUBMIT
        </Button>
      </form>
    </div>
  )
}