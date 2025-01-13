import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: "Azure Data Engineer Associate",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/azure%20data%20engineer%20associate-YgxT54H6v6yAu25mAoiohNrjwvzez9.png",
    credentials: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamSachinKulkarni-0273/CB714DDD08954473?sharingId=BFF6CFEF73BFBAA1"
  },
  {
    title: "Azure Fundamentals",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/azure%20fundamentals-XM4g1aSjkSrimmm1QH64iwEPnLHaJe.png",
    credentials: "https://learn.microsoft.com/api/credentials/share/en-gb/ShubhamSachinKulkarni-0273/885DCAC017EE344C?sharingId"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col items-center p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={cert.image}
                alt={`${cert.title} Certification`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <CardContent className="text-center pt-0">
              <Button asChild variant="outline">
                <a 
                  href={cert.credentials} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Credentials
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

