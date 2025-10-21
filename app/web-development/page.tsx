import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  Shield,
  CheckCircle,
  Layers,
  Settings,
  Users,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Enhanced with modern gradient background and better typography */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                  <span className="gradient-text">Web Development</span>
                  <br />
                  <span className="text-foreground">& Bespoke Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-in-left animate-delay-200">
                  Custom web applications and bespoke solutions tailored to your specific needs. From simple websites to
                  complex platforms, we build scalable solutions that grow with your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animate-delay-300">
                <Button
                  size="lg"
                  className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button"
                >
                  Start Your Project
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

              {/* Tech Stack Preview - Enhanced visual design */}
              <div className="flex flex-wrap gap-3 pt-4 animate-slide-in-left animate-delay-400">
                {["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS"].map((tech, index) => (
                  <div
                    key={tech}
                    className={`px-4 py-2 bg-[#00ADE6]/10 text-[#00ADE6] text-sm rounded-full font-medium border border-[#00ADE6]/20 hover:bg-[#00ADE6]/20 transition-colors duration-300 animate-scale-in animate-delay-${(index + 5) * 100}`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-[#00ADE6]/10 to-[#00ADE6]/5 rounded-3xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ADE610_1px,transparent_1px),linear-gradient(to_bottom,#00ADE610_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <Code className="h-32 w-32 text-[#00ADE6] relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Stats - Added impressive stats section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "200+", desc: "Applications Built", icon: Code },
              { stat: "99.9%", desc: "Uptime Achieved", icon: TrendingUp },
              { stat: "2 Weeks", desc: "Average Delivery", icon: Clock },
              { stat: "100%", desc: "Client Satisfaction", icon: Award },
            ].map((item, index) => (
              <Card
                key={index}
                className={`border-border bg-card card-hover text-center animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-[#00ADE6]/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-[#00ADE6]" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{item.stat}</div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced with better visual hierarchy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Development Services</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              Comprehensive development solutions for every business need, built with modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Custom Websites",
                desc: "Bespoke websites built from scratch with modern technologies and best practices.",
                features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
              },
              {
                icon: Smartphone,
                title: "Web Applications",
                desc: "Complex web apps with advanced functionality, user authentication, and database integration.",
                features: ["User Authentication", "Database Integration", "API Development", "Real-time Features"],
              },
              {
                icon: Database,
                title: "E-commerce Solutions",
                desc: "Full-featured online stores with payment processing, inventory management, and analytics.",
                features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
              },
              {
                icon: Settings,
                title: "API Development",
                desc: "RESTful APIs and microservices for seamless integration with third-party systems.",
                features: ["RESTful APIs", "GraphQL", "Microservices", "Third-party Integration"],
              },
              {
                icon: Layers,
                title: "Progressive Web Apps",
                desc: "Modern PWAs that work offline and provide native app-like experiences.",
                features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"],
              },
              {
                icon: Users,
                title: "Content Management",
                desc: "Custom CMS solutions and WordPress development for easy content management.",
                features: ["Custom CMS", "WordPress", "Content Workflows", "User Roles"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group card-hover transition-all duration-500 border-border bg-card relative overflow-hidden animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 space-y-6 relative">
                  <div className="w-14 h-14 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-[#00ADE6]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold gradient-text">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#00ADE6] rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack - Enhanced with better visual design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Technology Stack</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              We use cutting-edge technologies to build modern, scalable applications that stand the test of time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vite"],
                icon: "🎨",
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Express", "Python", "PHP", "GraphQL"],
                icon: "⚙️",
              },
              {
                category: "Database",
                technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
                icon: "🗄️",
              },
              {
                category: "Tools & Services",
                technologies: ["AWS", "Vercel", "Docker", "Git", "WordPress"],
                icon: "🛠️",
              },
            ].map((stack, index) => (
              <Card
                key={index}
                className={`border-border bg-card card-hover group animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader className="pb-4 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stack.icon}
                  </div>
                  <CardTitle className="text-xl gradient-text">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {stack.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="text-center py-2 px-3 bg-muted/50 rounded-lg text-sm text-foreground font-medium hover:bg-muted/70 transition-colors duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process - Enhanced with better visual hierarchy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Development Process</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              A proven methodology that ensures quality results and client satisfaction every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                desc: "Understanding your business needs and technical requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Architecture Design",
                desc: "Creating scalable system architecture and technical specifications for your project.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your application using agile methodologies with regular progress updates.",
              },
              {
                step: "04",
                title: "Testing & QA",
                desc: "Comprehensive testing including unit tests, integration tests, and user acceptance testing.",
              },
              {
                step: "05",
                title: "Deployment & Support",
                desc: "Launching your application and providing ongoing maintenance and support.",
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className={`text-center border-border bg-card card-hover group animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                    <span className="text-2xl font-bold text-[#00ADE6]">{phase.step}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold gradient-text">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{phase.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types & Pricing - Enhanced pricing cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Project Types & Investment</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              Transparent pricing for different types of development projects with clear deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Simple Website",
                price: "£1,500 - £3,000",
                timeline: "2-4 weeks",
                features: ["5-10 pages", "Responsive design", "Contact forms", "Basic SEO", "CMS integration"],
                popular: false,
              },
              {
                type: "Web Application",
                price: "£5,000 - £15,000",
                timeline: "6-12 weeks",
                features: [
                  "User authentication",
                  "Database integration",
                  "Admin dashboard",
                  "API development",
                  "Advanced features",
                ],
                popular: true,
              },
              {
                type: "E-commerce Platform",
                price: "£8,000 - £25,000",
                timeline: "8-16 weeks",
                features: [
                  "Product catalog",
                  "Payment processing",
                  "Order management",
                  "Inventory system",
                  "Analytics dashboard",
                ],
                popular: false,
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`border-border bg-card card-hover ${project.popular ? "border-[#00ADE6] scale-105" : ""} animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                {project.popular && (
                  <div className="bg-[#00ADE6] text-white text-center py-2 text-sm font-medium">Most Popular</div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl gradient-text">{project.type}</CardTitle>
                  <div className="text-3xl font-bold gradient-text">{project.price}</div>
                  <p className="text-muted-foreground">{project.timeline}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#00ADE6] flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white py-6 text-lg glow-button">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced layout and content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Why Choose Smart IT for Development?</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  We combine technical expertise with business understanding to deliver solutions that drive real
                  results.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Code,
                    title: "Clean, Maintainable Code",
                    desc: "We write code that's easy to understand, maintain, and scale as your business grows.",
                  },
                  {
                    icon: Zap,
                    title: "Performance Optimized",
                    desc: "Every application is optimized for speed, SEO, and user experience from day one.",
                  },
                  {
                    icon: Shield,
                    title: "Security First",
                    desc: "Built-in security measures and best practices protect your data and users.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 animate-slide-in-left animate-delay-${(index + 2) * 100}`}
                  >
                    <div className="w-12 h-12 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <benefit.icon className="h-6 w-6 text-[#00ADE6]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold gradient-text text-lg">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <Card className="border-border bg-card card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Ready to Start Your Project?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Let's discuss your requirements and create a custom solution that fits your needs and budget.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Free consultation",
                      "Detailed project proposal",
                      "Fixed-price quotes",
                      "Ongoing support included",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#00ADE6]" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white py-6 text-lg glow-button">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with modern design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Ready to build something amazing?</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              From concept to deployment, we'll help you create a web solution that drives your business forward.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-200">
            <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border hover:bg-muted bg-transparent glow-button"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
