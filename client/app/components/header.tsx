import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
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

