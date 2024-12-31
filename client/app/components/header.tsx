import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/valcheq_logo.png"
            alt="Valcheq Technologies Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-gray-800">Valcheq Technologies</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/#services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link href="/#about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link href="/#contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
        <Button asChild>
          <Link href="/#contact">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}

