import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  Send,
} from "lucide-react";
import {
  COMPANY_EMAIL_ADDRESS,
  COMPANY_FACTORY_ADDRESS_LINE1,
  PHONE_NUMBER,
  WHATSAPP_MESSAGE,
  COMPANY_FACTORY_ADDRESS_LINE2,
  COMPANY_FACTORY_ADDRESS_LINE3,
  COMPANY_BRANCH_OFFICE_ADDRESS_LINE1,
  COMPANY_BRANCH_OFFICE_ADDRESS_LINE2,
  COMPANY_BRANCH_OFFICE_ADDRESS_LINE3,
  COMPANY_BRANCH_OFFICE_ADDRESS_LINE4,
  PHONE_NUMBER_AMIT,
  PHONE_NUMBER_RANJEET,
  PHONE_NUMBER_PRADEEP,
} from "../utils/constant";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = PHONE_NUMBER;
    const message = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your email
    const emailTo = COMPANY_EMAIL_ADDRESS;
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(`
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `);
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-16">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:+91 6200861130"
                    className="text-gray-400 hover:text-white"
                  >
                    <p className="text-gray-600">Deekay: {PHONE_NUMBER}</p>{" "}
                  </a>
                  <a
                    href="tel:+91 8840942891"
                    className="text-gray-400 hover:text-white"
                  >
                    <p className="text-gray-600">Amit Singh: {PHONE_NUMBER_AMIT}</p>{" "}
                  </a>
                  <a
                    href="tel:+91 9723194999"
                    className="text-gray-400 hover:text-white"
                  >
                    <p className="text-gray-600">Ranjeet Singh: {PHONE_NUMBER_RANJEET}</p>{" "}
                  </a>
                  <a
                    href="tel:+91 9833993682"
                    className="text-gray-400 hover:text-white"
                  >
                    <p className="text-gray-600">Pradeep Shetty: {PHONE_NUMBER_PRADEEP}</p>{" "}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:sales.graphico.in@gmail.com"
                    className="text-gray-400 hover:text-white"
                  >
                    <p className="text-gray-600">{COMPANY_EMAIL_ADDRESS}</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Main office(Silvassa)</h3>
                  <p className="text-gray-600">
                    {COMPANY_FACTORY_ADDRESS_LINE1} <br />
                    {COMPANY_FACTORY_ADDRESS_LINE2} <br />
                    {COMPANY_FACTORY_ADDRESS_LINE3} <br />
                  </p>
                </div>
                <div>
                  <br />
                  <h3 className="font-semibold">Branch office(Delhi)</h3>
                  <p className="text-gray-600">
                    {COMPANY_BRANCH_OFFICE_ADDRESS_LINE1} <br />
                    {COMPANY_BRANCH_OFFICE_ADDRESS_LINE2} <br />
                    {COMPANY_BRANCH_OFFICE_ADDRESS_LINE3} <br />
                    {COMPANY_BRANCH_OFFICE_ADDRESS_LINE4} <br />
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
              <div className="mt-8 pt-8 border-t">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
                >
                  <MessageCircle size={20} />
                  <span>Message us on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
