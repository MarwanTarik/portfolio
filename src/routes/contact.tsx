import { createFileRoute } from '@tanstack/react-router'
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useId } from 'react'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 w-full justify-center items-center mx-auto max-w-7xl px-8 py-16">
      <div className="w-full h-fit p-8 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 shadow-lg">
        <p className="font-extrabold font-mono text-4xl text-secondary-foreground text-center tracking-tight">
          Get In Touch
        </p>
        <p className="text-center text-muted-foreground mt-2 text-sm">
          Let's build something amazing together
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        <ContactForm />

        <div className="space-y-6">
          <ContactInfo />
          <ContactLinks />
        </div>      
      </div>
    </div>
  )
}

function ContactForm() {
  const nameId = useId()
  const emailId = useId()
  const subjectId = useId()
  const messageId = useId()

  return (
  <Card className="border border-border/50 bg-secondary/50 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Send a Message</h2>
        
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor={nameId} className="text-sm font-medium">
              Name
            </label>
            <input
              id={nameId}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-secondary*2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor={emailId} className="text-sm font-medium">
              Email
            </label>
            <input
              id={emailId}
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-secondary*2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor={subjectId} className="text-sm font-medium">
              Subject
            </label>
            <input
              id={subjectId}
              type="text"
              placeholder="What's this about?"
              className="w-full px-4 py-3 rounded-lg border border-border bg-secondary*2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor={messageId} className="text-sm font-medium">
              Message
            </label>
            <textarea
              id={messageId}
              rows={5}
              placeholder="Tell me about your project or question..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-secondary*2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 shadow-lg hover:shadow-xl"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
function ContactLinks() {
  return (
      <Card className="border border-border/50 bg-secondary/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h2>
          
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <Linkedin className="w-6 h-6 text-primary" />
              <div className="flex-1">
                <p className="font-semibold group-hover:text-primary transition-colors">LinkedIn</p>
                <p className="text-xs text-muted-foreground">Let's connect professionally</p>
              </div>
            </a>

            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <Github className="w-6 h-6 text-primary" />
              <div className="flex-1">
                <p className="font-semibold group-hover:text-primary transition-colors">GitHub</p>
                <p className="text-xs text-muted-foreground">Check out my projects</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
  );
}

function ContactInfo() {
  return (
     <Card className="border border-border/50 bg-secondary/50 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Email</h3>
              <a 
                href="mailto:your.email@example.com" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                your.email@example.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                Available for remote opportunities worldwide
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}