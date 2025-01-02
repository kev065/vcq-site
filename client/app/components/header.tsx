import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/valcheq_logo.png"
            alt="Valcheq Technologies Logo"
            width={1918}
            height={314}
            className="h-8 w-auto"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/#services" className="hover:text-blue-200 transition-colors">Services</Link></li>
            <li><Link href="/#about" className="hover:text-blue-200 transition-colors">About</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
          <Link href="/#contact">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}

