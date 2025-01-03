"use client"

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import { VisuallyHidden } from "@/components/ui/visually-hidden"

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = useCallback((event: React.MouseEvent) => {
    const href = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (href) {
      event.preventDefault();
      setOpen(false);
  
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80; // header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300); // 300ms delay to allow the sheet to close
    }
  }, []);

  // Prevent body scroll when sheet is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
  

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-500">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <VisuallyHidden>
          <h2>Navigation Menu</h2>
        </VisuallyHidden>
        <nav className="flex flex-col gap-4">
          <SheetClose asChild>
            <Link href="#services" className="text-lg font-semibold hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              Services
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#about" className="text-lg font-semibold hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#contact" className="text-lg font-semibold hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              Contact
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild className="mt-4" onClick={handleLinkClick}>
              <Link href="#contact">Get Started</Link>
            </Button>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

