import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const education = [
  {
    school: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    degree: "Master of Science in Computer Science",
    gpa: "GPA: 3.70/4.0",
    date: "May 2024",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stevens-P5p8lIzro4HcTCtdIP8Wn4Bjln8TXm.jpeg",
    details: [
      "Graduate Teaching Assistant for Machine Learning CS556",
      "Graduate Research Assistant for Deep Learning CS583"
    ]
  },
  {
    school: "Vishwakarma University",
    location: "Pune, India",
    degree: "Bachelor of Technology in Computer Engineering",
    gpa: "GPA: 3.60/4.0",
    date: "May 2022",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vu-kACPMwMpKvcv5mCte1QJ2ACaMLIy61.jpeg",
    details: [
      "Member for Atom Robotics and Revolution Software Development Clubs"
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex-grow">
              <div className="flex justify-center mb-4">
                <Image
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <CardTitle className="text-center">{edu.school}</CardTitle>
              <p className="text-sm text-muted-foreground text-center">{edu.location}</p>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{edu.degree}</p>
              <p>{edu.gpa}</p>
              <p className="mb-2">{edu.date}</p>
              <ul className="list-disc pl-5">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-sm">{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

