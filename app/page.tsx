import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Globe, Server, Smartphone, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                <span className="gradient-text">Professional Web Development</span>
                <br />
                <span className="text-foreground">Services That Drive Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                Smart IT delivers custom web development, responsive design, and reliable hosting solutions. Transform
                your digital presence with our expert team of developers and designers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-delay-300">
              <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button">
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-border hover:bg-muted bg-transparent glow-button"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Client Success Stories</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              See how our web development expertise has helped businesses grow online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Smart IT's web development team created a stunning e-commerce site that boosted our online sales by 400%. Their SEO optimization got us ranking #1 for our main keywords.",
                author: "Sarah Johnson",
                company: "TechStart Solutions",
                rating: 5,
              },
              {
                quote:
                  "Outstanding web design and development services. Our new responsive website loads 3x faster and converts 250% better than our old site.",
                author: "Michael Chen",
                company: "Global Retail Corp",
                rating: 5,
              },
              {
                quote:
                  "Best web hosting service we've used. 99.9% uptime, lightning-fast speeds, and their WordPress development expertise is unmatched.",
                author: "Emma Williams",
                company: "Creative Agency Ltd",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`border-border bg-card card-hover animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">
                        ⭐
                      </div>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-[#00ADE6]">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "500+", desc: "websites developed", company: "PROJECTS COMPLETED" },
              { stat: "99.9%", desc: "hosting uptime guarantee", company: "RELIABILITY" },
              { stat: "3x", desc: "faster page load speeds", company: "PERFORMANCE" },
              { stat: "24/7", desc: "technical support", company: "SUPPORT" },
            ].map((item, index) => (
              <Card
                key={index}
                className={`border-border bg-card card-hover animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-1">{item.stat}</div>
                    <div className="text-muted-foreground text-sm">{item.desc}</div>
                  </div>
                  <div className="text-xs font-semibold text-foreground tracking-wider">{item.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Web Development Services</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Full-service web development company offering custom solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Design */}
            <Card className="group card-hover transition-all duration-500 border-border bg-card relative overflow-hidden animate-slide-in-left animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 space-y-6 relative">
                <div className="w-14 h-14 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                  <Smartphone className="h-7 w-7 text-[#00ADE6]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold gradient-text">Responsive Web Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mobile-first responsive web design that looks perfect on all devices. Our UI/UX designers create
                    conversion-focused layouts that engage users and drive business growth.
                  </p>
                </div>
                <Link
                  href="/web-design"
                  className="inline-flex items-center text-[#00ADE6] hover:text-[#00ADE6]/80 transition-colors font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Web Hosting */}
            <Card className="group card-hover transition-all duration-500 border-border bg-card relative overflow-hidden animate-slide-up animate-delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 space-y-6 relative">
                <div className="w-14 h-14 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                  <Server className="h-7 w-7 text-[#00ADE6]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold gradient-text">Premium Web Hosting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fast, secure, and reliable web hosting with 99.9% uptime guarantee. SSD storage, CDN integration,
                    and 24/7 monitoring ensure your website performs at its best.
                  </p>
                </div>
                <Link
                  href="/web-hosting"
                  className="inline-flex items-center text-[#00ADE6] hover:text-[#00ADE6]/80 transition-colors font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="group card-hover transition-all duration-500 border-border bg-card relative overflow-hidden animate-slide-in-right animate-delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 space-y-6 relative">
                <div className="w-14 h-14 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                  <Code className="h-7 w-7 text-[#00ADE6]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold gradient-text">Custom Web Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Full-stack web development using modern technologies like React, Next.js, and Node.js. We build
                    scalable web applications, e-commerce sites, and custom CMS solutions.
                  </p>
                </div>
                <Link
                  href="/web-development"
                  className="inline-flex items-center text-[#00ADE6] hover:text-[#00ADE6]/80 transition-colors font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Modern Web Technologies</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We use industry-leading frameworks and tools to build fast, secure, and scalable websites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              {
                name: "React",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#61DAFB">
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12,1C18.5,1 24,6.5 24,12C24,17.5 18.5,23 12,23C5.5,23 0,17.5 0,12C0,6.5 5.5,1 12,1M12,3C7.6,3 4,6.6 4,11C4,15.4 7.6,19 12,19C16.4,19 20,15.4 20,11C20,6.6 16.4,3 12,3Z" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      fill="none"
                      stroke="#61DAFB"
                      strokeWidth="1"
                      transform="rotate(60 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      fill="none"
                      stroke="#61DAFB"
                      strokeWidth="1"
                      transform="rotate(120 12 12)"
                    />
                  </svg>
                ),
                desc: "Component-based UI library",
              },
              {
                name: "Next.js",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.568L9.216 6.216h1.568L18.432 16.568h-0.864zM6.216 6.216v11.568L17.784 6.216H6.216z" />
                  </svg>
                ),
                desc: "React production framework",
              },
              {
                name: "Tailwind CSS",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#06B6D4">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                  </svg>
                ),
                desc: "Utility-first CSS framework",
              },
              {
                name: "Node.js",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#339933">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm-.2 3.05c.2 0 .4.05.6.15l5.65 3.25c.35.2.35.7 0 .9L12.4 12.45c-.2.1-.4.15-.6.15s-.4-.05-.6-.15L5.55 9.2c-.35-.2-.35-.7 0-.9L11.2 5.05c.2-.1.4-.15.6-.15z" />
                  </svg>
                ),
                desc: "JavaScript runtime environment",
              },
              {
                name: "WordPress",
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#21759B">
                    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-.963 0-1.641.84-1.641 1.742 0 .811.467 1.499 1.014 2.313.405.51.435 1.193.435 1.688 0 .435-.057.96-.435 2.24l-.96 3.17L12.828 6.93zm-.78 3.527l-3.077 8.93c.92.27 1.888.42 2.888.42.849 0 1.681-.087 2.460-.26-.018-.003-.091-.009-.141-.009-.963 0-1.641.84-1.641 1.742 0 .811.467 1.499 1.014 2.313.405.51.435 1.193.435 1.688 0 .435-.057.96-.435 2.24l-.96 3.17L12.828 6.93zm-.78 3.527l-5.272-15.23C2.46 5.406 1.215 8.528 1.215 12c0 3.363 1.183 6.447 3.141 8.879.015-.015.029-.030.045-.045z" />
                  </svg>
                ),
                desc: "Content management system",
              },
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className={`group card-hover transition-all duration-300 border-border bg-card animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{tech.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Expert Web Development.</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground">Proven Results.</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose Smart IT for professional web development services that deliver measurable results. Our
                experienced team combines technical expertise with creative design to build websites that perform.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast Websites",
                    desc: "Optimized for Core Web Vitals and search engine rankings",
                  },
                  {
                    icon: Shield,
                    title: "Secure & Reliable",
                    desc: "Enterprise-grade security with SSL certificates and regular backups",
                  },
                  {
                    icon: Globe,
                    title: "SEO Optimized",
                    desc: "Built-in SEO best practices to help you rank higher on Google",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 animate-slide-in-left animate-delay-${(index + 2) * 100}`}
                  >
                    <div className="w-10 h-10 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="h-5 w-5 text-[#00ADE6]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-lg">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-[#00ADE6]/10 to-[#00ADE6]/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ADE610_1px,transparent_1px),linear-gradient(to_bottom,#00ADE610_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="text-center space-y-6 relative z-10">
                  <Code className="h-20 w-20 text-[#00ADE6] mx-auto" />
                  <div className="space-y-2">
                    <p className="text-[#00ADE6] font-bold text-xl">Clean, maintainable code</p>
                    <p className="text-muted-foreground">Built for scale and performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Web Development Process</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Our proven 4-step methodology ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description:
                  "Comprehensive discovery phase including competitor analysis, target audience research, and technical requirements gathering to create the perfect web development strategy.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "User-centered design process with wireframes, mockups, and interactive prototypes. We focus on conversion optimization and mobile-first responsive design.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Clean, semantic code built with modern web technologies. Rigorous testing across devices and browsers ensures optimal performance and accessibility.",
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description:
                  "Seamless deployment with performance monitoring, SEO optimization, and ongoing maintenance. We provide training and long-term support for your success.",
              },
            ].map((process, index) => (
              <div key={index} className={`text-center space-y-4 animate-scale-in animate-delay-${(index + 1) * 100}`}>
                <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#00ADE6]/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-[#00ADE6]">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold gradient-text">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Ready to Grow Your Business Online?</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Get a free consultation and discover how our web development services can transform your digital presence.
              Let's build something amazing together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-200">
            <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border hover:bg-muted bg-transparent glow-button"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
