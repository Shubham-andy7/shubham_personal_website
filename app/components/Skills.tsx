'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import Image from 'next/image'

const skills = [
  { name: 'Python', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/python-agd69LHvwWplkne0PiC4CByDJMZe0k.png' },
  { name: 'Java', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/java-qt2NuaqMpTvubf5qjulscXdAZ4yL4x.png' },
  { name: 'AWS', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aws-0dXfcDeg7zTIA0FPDIcx3jgHsbl3xC.png' },
  { name: 'Azure', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/azure-dX1BmgqeLfki6HuDjkuVz2MTw1Q4yl.png' },
  { name: 'GCP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gcp-TR60ul9SgquH8IM8D31iveKtJKew1d.png' },
  { name: 'Docker', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/docker-0y6HfGxGmBwm2thcHmlnODm0EYKLuW.webp' },
  { name: 'Git', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-asLE4u5lh3gG4FK87rLO2oaHRZA3M5.png' },
  { name: 'Airflow', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airflow-N9qtyUaiG2iEVmN8fAo7sIWLhTv3wL.png' },
  { name: 'MySQL', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mysql-WU4ecHL6BqMRjPDHOIVpklf8CjXkLB.png' },
  { name: 'Apache Kafka', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apachekafka-4cf1JwRfyHQ4RIY3aGsLAiiyWvlzSS.png' },
  { name: 'Apache Spark', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apachespark-zc9ZagsbgdugyjfAPVZVSUlWzeAAbp.png' },
  { name: 'C', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c-zFlRCkLWCENnMssG3TN9MzJgnnnEeQ.png' },
  { name: 'C++', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c++-ZuZIQdXKanzry0RKeekonsxPTQCzrt.png' },
  { name: 'Golang', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/golang-xeDZlpGGPJwP1KQ6f9sd4XZYC5YuHe.png' },
  { name: 'Node.js', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodejs-QWBvM8VDdUuhNmuHXGes4IrArA2DNH.png' },
  { name: 'Hadoop', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hadoop-s2ftnzYHnYtSG7tejYCaxghBQhxUgO.png' },
  { name: 'PostgreSQL', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postgres-X8r3qN0AWrTArkKR8tlToBefpF2QG5.png' },
  { name: 'MongoDB', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mongodb-Gq3PGm2oEq8MCugxMgZ8lA6MXnOENi.png' },
  { name: 'R', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R-3wgdU9L4dsYqsjdHwYwMnZJ14unZyg.png' },
  { name: 'Kubernetes', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kubernetes-73AicZsDXWeonqnilgT5lstmNJWB5H.png' },
  { name: 'Snowflake', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snowflake-b034eMPP7NnDREwLLq9uCGTxM3Xno4.png' },
  { name: 'SQL Server', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/microsoftsqlserver-cD0X0FapNLmKVh4frhUexTmZKK8tw9.png' },
  { name: 'Shell Script', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shellscript-ctU8HF4ZAIMo4GJ2XB2hUNIYwpED1F.png' },
  { name: 'TensorFlow', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tensorflow-EGUo1KCxX76g7b559rlsjbUVNiYMDL.png' },
  { name: 'TypeScript', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/typescript-rNDEz2oWMWutGuf153R6cuUVz1N7Z7.png' },
  { name: 'React', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-BxGetis8cq3DfkQZTJcWh7p73ZuqpQ.png' },
  { name: 'SQL', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sql-AXnP6OLEukuKcvTns3lXx4tHhWM2By.webp' },
  { name: 'PyTorch', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pytorch-4E3AiTb4sC11FPXbPNEFciJtNurWBZ.png' },
  { name: 'Keras', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/keras-yOdq88ZNlSyzim2UEgJRdD7kiwEU9K.png' },
  { name: 'Scikit-learn', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scikitlearn-ibWyEYMwL3P0CJm080bbjq0CO3WIjA.png' }
]

function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center gap-2 transform hover:scale-110 transition-transform">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg">
            <Image
              src={skill.image}
              alt={skill.name}
              fill
              className="p-2 object-contain"
            />
          </div>
          <span className="text-xs font-medium text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  )
}

function SkillIcon({ position, skill }) {
  return (
    <Html position={position} transform occlude>
      <div className="relative w-10 h-10 rounded-full bg-white shadow-lg transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={skill.image}
          alt={skill.name}
          fill
          className="p-1.5 object-contain"
        />
      </div>
    </Html>
  )
}

function fibonacciSphere(samples: number, radius: number) {
  const points = []
  const phi = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2
    const radiusAtY = Math.sqrt(1 - y * y)
    const theta = phi * i

    const x = Math.cos(theta) * radiusAtY
    const z = Math.sin(theta) * radiusAtY

    points.push([x * radius, y * radius, z * radius])
  }

  return points
}

function RotatingSkills() {
  const groupRef = useRef()
  const positions = fibonacciSphere(skills.length, 3.5)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillIcon 
          key={skill.name} 
          position={positions[i]} 
          skill={skill}
        />
      ))}
      <mesh>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshStandardMaterial color="#f0f0f0" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="hidden md:block h-[450px] mb-8">
        <Canvas camera={{ position: [0, 0, 11], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingSkills />
          <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI * 3/4}
          />
        </Canvas>
      </div>
      <div className="md:hidden">
        <SkillsGrid />
      </div>
    </section>
  )
}

