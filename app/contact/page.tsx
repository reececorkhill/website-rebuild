import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, FileText } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Enhanced with modern gradient background and better typography */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-7xl mx-auto text-center space-y-8 relative animate-slide-up">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="gradient-text">Get Your Quote</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
              Ready to start your project? Get in touch and we'll provide you with a detailed quote tailored to your
              needs within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Enhanced layout and visual design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-border bg-card card-hover animate-slide-in-left">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl gradient-text">Send us a message</CardTitle>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-left animate-delay-200">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-foreground font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="h-12 border-border focus:border-[#00ADE6] transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-foreground font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="h-12 border-border focus:border-[#00ADE6] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 animate-slide-in-left animate-delay-300">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 border-border focus:border-[#00ADE6] transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-3 animate-slide-in-left animate-delay-400">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 123 456 7890"
                      className="h-12 border-border focus:border-[#00ADE6] transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-3 animate-slide-in-left animate-delay-500">
                    <Label htmlFor="service" className="text-foreground font-medium">
                      Service Interested In
                    </Label>
                    <select
                      id="service"
                      className="w-full h-12 px-4 bg-background border border-border rounded-md text-foreground focus:border-[#00ADE6] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="web-hosting">Web Hosting</option>
                      <option value="web-development">Web Development</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-3 animate-slide-in-left animate-delay-600">
                    <Label htmlFor="budget" className="text-foreground font-medium">
                      Budget Range
                    </Label>
                    <select
                      id="budget"
                      className="w-full h-12 px-4 bg-background border border-border rounded-md text-foreground focus:border-[#00ADE6] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under £1,000</option>
                      <option value="1k-5k">£1,000 - £5,000</option>
                      <option value="5k-10k">£5,000 - £10,000</option>
                      <option value="10k-25k">£10,000 - £25,000</option>
                      <option value="25k-plus">£25,000+</option>
                    </select>
                  </div>

                  <div className="space-y-3 animate-slide-in-left animate-delay-700">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                      rows={6}
                      className="border-border focus:border-[#00ADE6] resize-none transition-colors duration-300"
                    />
                  </div>

                  <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white h-12 text-lg font-medium glow-button animate-slide-in-left animate-delay-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information - Enhanced with better visual hierarchy */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold gradient-text">Get in touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're here to help bring your digital vision to life. Whether you need a simple website or a complex
                  web application, our team is ready to discuss your project and provide expert guidance.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border bg-card card-hover group animate-slide-in-right animate-delay-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                        <Mail className="h-6 w-6 text-[#00ADE6]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold gradient-text text-lg">Email</h3>
                        <p className="text-foreground font-medium">hello@smartit-webdevelopment.co.uk</p>
                        <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card card-hover group animate-slide-in-right animate-delay-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                        <Phone className="h-6 w-6 text-[#00ADE6]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold gradient-text text-lg">Phone</h3>
                        <p className="text-foreground font-medium">+44 (0) 123 456 7890</p>
                        <p className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm GMT</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card card-hover group animate-slide-in-right animate-delay-400">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-[#00ADE6]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold gradient-text text-lg">Location</h3>
                        <p className="text-foreground font-medium">United Kingdom</p>
                        <p className="text-muted-foreground text-sm">Serving clients worldwide</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card card-hover group animate-slide-in-right animate-delay-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                        <Clock className="h-6 w-6 text-[#00ADE6]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold gradient-text text-lg">Response Time</h3>
                        <p className="text-foreground font-medium">Within 24 hours</p>
                        <p className="text-muted-foreground text-sm">Usually much faster!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Process Steps - Enhanced with better visual design */}
              <Card className="border-[#00ADE6]/20 bg-gradient-to-br from-[#00ADE6]/5 to-transparent card-hover animate-slide-in-right animate-delay-600">
                <CardContent className="p-8">
                  <h3 className="font-bold gradient-text text-xl mb-6">What happens next?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 animate-slide-in-right animate-delay-700">
                      <div className="w-10 h-10 bg-[#00ADE6]/10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#00ADE6]/20 transition-colors duration-300">
                        <MessageCircle className="h-5 w-5 text-[#00ADE6]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">We'll review your requirements</h4>
                        <p className="text-muted-foreground text-sm">
                          Our team analyzes your project details and requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 animate-slide-in-right animate-delay-800">
                      <div className="w-10 h-10 bg-[#00ADE6]/10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#00ADE6]/20 transition-colors duration-300">
                        <Calendar className="h-5 w-5 text-[#00ADE6]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">Schedule a consultation call</h4>
                        <p className="text-muted-foreground text-sm">
                          Free 30-minute consultation to discuss your project
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 animate-slide-in-right animate-delay-900">
                      <div className="w-10 h-10 bg-[#00ADE6]/10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#00ADE6]/20 transition-colors duration-300">
                        <FileText className="h-5 w-5 text-[#00ADE6]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">Receive detailed proposal & quote</h4>
                        <p className="text-muted-foreground text-sm">
                          Comprehensive proposal with timeline and fixed pricing
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
