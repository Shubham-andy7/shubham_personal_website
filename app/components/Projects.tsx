import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "AI Interactive Learning Framework",
    technologies: "Python, Fetch.AI, Claude API, OpenAI, NLP",
    description: "Conceptualized an AI-driven learning platform using Fetch.AI's uAgents, OpenAI APIs, and Claude, delivering adaptive, emotionally intelligent user assessments and skill-based learning paths.",
    github: "https://github.com/Shubham-andy7/NOW-YOU-KNOW-AI-HACKATHON",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20agents-JREvTia8DJcblcvl89ibGVTjIqqcSf.png"
  },
  {
    title: "YouTube Data Analysis using AWS",
    technologies: "Python, AWS (Athena, S3, Lambda, QuickSight)",
    description: "Developed an ETL pipeline to ingest 50,000+ daily YouTube records into an S3 data lake, leveraging Athena and QuickSight for trend analysis and dashboard creation, reducing server management efforts by 40%.",
    github: "https://github.com/Shubham-andy7/YouTube_Analysis_AWS",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube%20data%20analysis-oLe968l75NImUI69xmxmFfSdRu64G9.png"
  },
  {
    title: "Sales & Customer Insights on Azure",
    technologies: "Python, Azure (Data factory, Data Lake Storage, Databricks, Synapse Analytics, Power BI, Key Vault), SQL",
    description: "This project addresses a critical business need by building a comprehensive data pipeline on Azure. The goal is to extract customer and sales data from an on-premises SQL database, transform it in the cloud, and generate actionable insights through a Power BI dashboard.",
    github: "https://github.com/Shubham-andy7/AZ-end-to-end-data-engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sales%20&%20Customer%20Insights.jpg-Wnsga6sxsHLuXJUmilkmlLbcMcJBxi.jpeg"
  },
  {
    title: "Real-Time Event Tracking and Data Processing System",
    technologies: "Python, MongoDB, Apache Spark, Apache Kafka, Flask",
    description: "Developed a high-performance real-time event tracker that processes over 1,000 actions per second using Kafka, with logs stored in MongoDB, and optimized the system by containerizing it with Docker, reducing deployment time by 30% while ensuring 99.9% uptime through integration with Spark Streaming.",
    github: "https://github.com/Shubham-andy7/Kafka-Event-Processing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-time%20event%20processing%20system.jpg-1Swr4cbi5lji3m3KanzuTluF7TXYS8.jpeg"
  },
  {
    title: "Text Summarization",
    technologies: "Python, NLP",
    description: "This project focuses on developing an advanced Text Summarization model utilizing the T5 architecture. Our goal is to create efficient and accurate summaries for long text passages using Natural Language Processing (NLP) techniques.",
    github: "https://github.com/Shubham-andy7/Text_Summarization",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/text%20summarization-E35MmcuNDBBz9POrsSmLoaZgdZsMke.png"
  },
  {
    title: "Credit Score Classification",
    technologies: "Python, Machine Learning models",
    description: "This project implements a machine learning-based Credit Score Classification system using a Kaggle dataset, employing various algorithms like Random Forest and XGBoost to accurately classify individuals into credit score categories after thorough data preprocessing and handling of imbalances.",
    github: "https://github.com/Shubham-andy7/Credit_Score_Classification",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/credit%20score%20classification.jpg-C9FFhhhU71pyjfwHdA0FrhM85G9Oa1.jpeg"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.technologies}</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="mb-4 flex-grow">{project.description}</p>
              <Button variant="outline" size="sm" className="self-start" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

