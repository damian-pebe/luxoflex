import {
    Whatsapp,
    EnvelopeFill,
    TelephoneFill,
    Facebook,
    Instagram,
    Globe,
  } from "react-bootstrap-icons";
export default function Socials() {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
        <a 
          href="https://facebook.com/yourpage" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
        >
          <Facebook className="h-6 w-6 text-blue-600" />
        </a>
        
        <a 
          href="https://wa.me/523322052692" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900 transition-all duration-300 transform hover:scale-110"
        >
          <Whatsapp className="h-6 w-6 text-green-600" />
        </a>
        
        <a 
          href="https://instagram.com/yourpage" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-pink-100 dark:bg-gray-800 dark:hover:bg-pink-900 transition-all duration-300 transform hover:scale-110"
        >
          <Instagram className="h-6 w-6 text-pink-600" />
        </a>
        
        <a 
          href="https://yourwebsite.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 dark:bg-gray-800 dark:hover:bg-purple-900 transition-all duration-300 transform hover:scale-110"
        >
          <Globe className="h-6 w-6 text-purple-600" />
        </a>
        
        <a 
          href="mailto:contacto@empresa.com"
          className="p-3 rounded-full bg-gray-100 hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-red-900 transition-all duration-300 transform hover:scale-110"
        >
          <EnvelopeFill className="h-6 w-6 text-red-600" />
        </a>
        
        <a 
          href="tel:+525551234567"
          className="p-3 rounded-full bg-gray-100 hover:bg-teal-100 dark:bg-gray-800 dark:hover:bg-teal-900 transition-all duration-300 transform hover:scale-110"
        >
          <TelephoneFill className="h-6 w-6 text-teal-600" />
        </a>
      </div>
    )
}