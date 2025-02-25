import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-xl mx-auto backdrop-blur-md bg-black/30 p-8 rounded-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your name" className="bg-black/50 border-white/20" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" className="bg-black/50 border-white/20" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" className="bg-black/50 border-white/20" rows={6} />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

