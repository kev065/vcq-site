import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Valcheq Technologies</h3>
            <p className="text-blue-200">Empowering businesses with cutting-edge web development, data analytics, and AI solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-blue-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-blue-200">Email: kelvin@valcheq.com</p>
            <p className="text-blue-200">Phone: +254 703 649833</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-300">&copy; 2024 Valcheq Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

