"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6 overflow-x-auto pb-2 scrollbar-hide">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('experience')}
            className="whitespace-nowrap"
          >
            Experience
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('education')}
            className="whitespace-nowrap"
          >
            Education
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('skills')}
            className="whitespace-nowrap"
          >
            Skills
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('certifications')}
            className="whitespace-nowrap"
          >
            Certifications
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('projects')}
            className="whitespace-nowrap"
          >
            Projects
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contact')}
            className="whitespace-nowrap"
          >
            Contact
          </Button>
        </nav>
        <div className="flex-1" />
        <ThemeToggle />
      </div>
    </header>
  )
}

