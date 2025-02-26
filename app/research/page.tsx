import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    slug: "post-1",
    title: "Psycho-physiological Training Approach for Amputee Rehabilitation",
    description: "An innovative project that revolutionizes the way we interact with technology.",
    date: "2024-11-19",
  },
  {
    slug: "post-2",
    title: "Analysis of Digital Filtering Design Based on Surface EMG Signals",
    description:
      "An innovative project that revolutionizes the way we interact with technology by designing a Butterworth IIR digital filter to obtain desirable surface EMG signals.",
    date: "2024-11-21",
  },
  {
    slug: "post-3",
    title: "Fundamental Concepts in EMG Signal Acquisition for Prosthetic Arm Development",
    description:
      "An in-depth guide to understanding and applying EMG signal acquisition for developing advanced prosthetic arms.",
    date: "2024-11-18",
  },
  {
    slug: "post-4",
    title: "Electromyography (EMG) Signal Acquisition and Processing: A Comprehensive Review",
    description:
      "A detailed review of EMG signal acquisition and processing techniques, highlighting their applications in medical diagnostics, speech recognition, and robotic control.",
    date: "2024-11-24",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6  bg-opacity-50 p-4 rounded-xl" style={{ backdropFilter: "blur(10px)" }}>
        Research Papers and References
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="bg-opacity-20 bg-gray-900 backdrop-blur-md border border-gray-700 shadow-lg  hover:border-green-500 transition-transform rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl text-green-300 font-semibold">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{post.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/research/${post.slug}`}>
                <Button className="bg-white text-black hover:bg-gray-200">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
