import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const experiences = [
  {
    title: "Software Development Engineer",
    company: "CANTONICA",
    location: "New York, NY",
    date: "May 2024 – Present",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cantonica-reAxW6pkZd9MmDRJFFbS71fQS28KpN.jpeg",
    responsibilities: [
      "Spearheaded the development of a real-time event processing system",
      "Integrated Apache Kafka with a Python-based processing pipeline",
      "Optimized data storage in MongoDB",
      "Collaborated with cross-functional teams",
      "Designed and deployed an app-recommendation system"
    ]
  },
  {
    title: "Data Engineer",
    company: "Datametica Solutions Pvt. Ltd.",
    location: "Pune, India",
    date: "Sep 2021 – Dec 2022",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/datametica-yhdUsq4JfD7N7aQaVJyWOOXbvNhfHf.jpeg",
    responsibilities: [
      "Engineered a Flask-based Ingestion Framework",
      "Automated the generation of property files",
      "Integrated dynamic directed acyclic graph (DAG) file generation",
      "Developed a synthetic data generation tool",
      "Streamlined ETL pipelines"
    ]
  },
  {
    title: "Machine Learning Engineer",
    company: "Q.I. Square Pvt. Ltd.",
    location: "Remote, Singapore",
    date: "Jul 2020 – Feb 2021",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qisquare-DJxkmEoxoqGXS8yW01ET1REjmwMYii.jpeg",
    responsibilities: [
      "Orchestrated the extraction of over 10,000 OpenStreetMap (OSM) identifiers",
      "Employed critical datasets in the development of ML models"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center">
              {/* Content and logo container */}
              <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{exp.company} | {exp.location}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.date}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Company logo */}
              <div className={`flex justify-center order-${index % 2 === 0 ? '2' : '1'}`}>
                <div className="relative w-48 h-48">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="rounded-full border-4 border-white bg-white object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

