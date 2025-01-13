import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-2">Shubham Kulkarni</h1>
          <p className="text-xl text-muted-foreground mb-4">Software Development Engineer</p>
          <p className="mb-4">New York, NY | 551-727-6704 | shubhamk1805@gmail.com</p>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a 
                href="https://www.linkedin.com/in/shubham-s-kulkarni/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a 
                href="https://github.com/Shubham-andy7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub Profile</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a 
                href="mailto:shubhamk1805@gmail.com"
                className="hover:scale-110 transition-transform"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email Me</span>
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

