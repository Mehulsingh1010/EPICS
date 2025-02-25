import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  { name: "Team Member 1", role: "Project Lead" },
  { name: "Team Member 2", role: "Hardware Engineer" },
  { name: "Team Member 3", role: "Software Developer" },
  { name: "Team Member 4", role: "Research Analyst" },
  { name: "Team Member 5", role: "Design Engineer" },
  { name: "Team Member 6", role: "Documentation Lead" },
  { name: "Team Member 7", role: "Testing Engineer" },
  { name: "Team Member 8", role: "Quality Assurance" },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="backdrop-blur-md bg-black/30 border-0">
            <CardContent className="p-6">
              <div className="aspect-square relative mb-4">
                <Image src="/placeholder.svg" alt={member.name} fill className="rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-400 text-center">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

