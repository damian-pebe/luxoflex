import { Button } from '@/components/ui/button'

export default function Socials() {
  return (
    <div className="flex flex-row items-center self-center justify-center">
            <Button variant="link" className="text-background">
              <i className="bi bi-whatsapp text-background hover:text-green-600 transition-colors duration-1000 text-xl lg:text-2xl"></i>
            </Button>
            <Button variant="link" className="text-background">
              <i className="bi bi-instagram text-background hover:text-pink-600 transition-colors duration-1000 text-xl lg:text-2xl"></i>
            </Button>
            <Button variant="link" className="text-background">
              <i className="bi bi-facebook text-background hover:text-blue-800 transition-colors duration-1000 text-xl lg:text-2xl"></i>
            </Button>
          </div>
  )
}
