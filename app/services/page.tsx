import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Server, Smartphone, Zap, Shield, Users, Clock, Award, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Updated hero content for SEO optimization */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-7xl mx-auto text-center space-y-8 relative animate-slide-up">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="gradient-text">Professional Web Development</span>
              <br />
              <span className="text-foreground">Services & Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
              Expert web design, custom development, and reliable hosting services. Smart IT delivers comprehensive
              digital solutions that help businesses succeed online and rank higher on Google.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-delay-300">
            <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button">
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border hover:bg-muted bg-transparent glow-button"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Service Stats - Updated stats with SEO-focused metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "500+", desc: "Websites Developed", icon: CheckCircle },
              { stat: "99.9%", desc: "Hosting Uptime", icon: Star },
              { stat: "24/7", desc: "Technical Support", icon: Shield },
              { stat: "5+", desc: "Years Experience", icon: Award },
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

      {/* Main Services - Enhanced service descriptions with SEO keywords */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Web Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-2xl flex items-center justify-center hover:bg-[#00ADE6]/20 transition-colors duration-300">
                <Smartphone className="h-8 w-8 text-[#00ADE6]" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Responsive Web Design</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  Professional web design services that create stunning, mobile-responsive websites optimized for user
                  experience and search engines. Our designers craft conversion-focused layouts that engage visitors and
                  drive business growth across all devices.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mobile-First Design",
                  "UX/UI Optimization",
                  "Brand Integration",
                  "WCAG Accessibility",
                  "Core Web Vitals",
                  "SEO-Friendly Structure",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 animate-slide-in-left animate-delay-${(index + 2) * 100}`}
                  >
                    <div className="w-2 h-2 bg-[#00ADE6] rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/web-design">
                <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white glow-button">
                  Explore Web Design Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-[#00ADE6]/10 to-[#00ADE6]/5 rounded-3xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ADE610_1px,transparent_1px),linear-gradient(to_bottom,#00ADE610_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <Smartphone className="h-32 w-32 text-[#00ADE6] relative z-10" />
              </div>
            </div>
          </div>

          {/* Web Hosting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 animate-slide-in-left">
              <div className="aspect-square bg-gradient-to-br from-[#00ADE6]/10 to-[#00ADE6]/5 rounded-3xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ADE610_1px,transparent_1px),linear-gradient(to_bottom,#00ADE610_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <Server className="h-32 w-32 text-[#00ADE6] relative z-10" />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2 animate-slide-in-right">
              <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-2xl flex items-center justify-center hover:bg-[#00ADE6]/20 transition-colors duration-300">
                <Server className="h-8 w-8 text-[#00ADE6]" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Premium Web Hosting</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  Fast, secure, and reliable web hosting solutions with 99.9% uptime guarantee. Our managed hosting
                  services include SSD storage, CDN integration, SSL certificates, and 24/7 monitoring to ensure optimal
                  website performance and search engine rankings.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "99.9% Uptime SLA",
                  "Free SSL Certificate",
                  "Automated Backups",
                  "24/7 Expert Support",
                  "Scalable Resources",
                  "Lightning Fast SSD",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 animate-slide-in-right animate-delay-${(index + 2) * 100}`}
                  >
                    <div className="w-2 h-2 bg-[#00ADE6] rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/web-hosting">
                <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white glow-button">
                  View Hosting Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Web Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-2xl flex items-center justify-center hover:bg-[#00ADE6]/20 transition-colors duration-300">
                <Code className="h-8 w-8 text-[#00ADE6]" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Custom Web Development</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  Full-stack web development services using modern technologies like React, Next.js, and Node.js. We
                  build scalable web applications, e-commerce platforms, content management systems, and custom
                  solutions tailored to your specific business requirements.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "React & Next.js Apps",
                  "E-commerce Solutions",
                  "WordPress Development",
                  "API Integrations",
                  "Progressive Web Apps",
                  "Database Architecture",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 animate-slide-in-left animate-delay-${(index + 2) * 100}`}
                  >
                    <div className="w-2 h-2 bg-[#00ADE6] rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/web-development">
                <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white glow-button">
                  Explore Development Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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

      {/* Process Section - Enhanced process descriptions for SEO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Web Development Process</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              A proven methodology that delivers high-quality websites and web applications on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "Comprehensive analysis of your business goals, target audience, and technical requirements",
                icon: Users,
              },
              {
                step: "02",
                title: "Design & Planning",
                desc: "Creating wireframes, mockups, and detailed project roadmaps with timeline milestones",
                icon: Clock,
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "Building your solution using modern technologies with rigorous quality assurance testing",
                icon: Code,
              },
              {
                step: "04",
                title: "Launch & Optimization",
                desc: "Deployment, performance optimization, SEO setup, and ongoing maintenance support",
                icon: Zap,
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className={`text-center border-border bg-card card-hover group animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                    <phase.icon className="h-8 w-8 text-[#00ADE6]" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{phase.step}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced benefits with SEO-focused content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose Smart IT for Web Development?
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional web solutions that drive
              business growth and improve search engine rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Experts",
                desc: "Our team of certified web developers and designers stays current with the latest technologies, SEO best practices, and industry standards to deliver cutting-edge solutions.",
              },
              {
                icon: Zap,
                title: "Fast Project Delivery",
                desc: "Agile development methodologies and efficient workflows ensure your website or web application is delivered on time without compromising quality or performance.",
              },
              {
                icon: Shield,
                title: "Quality & Security",
                desc: "Comprehensive testing, security audits, and performance optimization guarantee reliable, secure, and fast-loading websites that rank well on search engines.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={`text-center border-border bg-card card-hover group animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 bg-[#00ADE6]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                    <benefit.icon className="h-10 w-10 text-[#00ADE6]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold gradient-text">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{benefit.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated CTA with conversion-focused copy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Ready to Transform Your Online Presence?</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Get a free consultation and discover how our professional web development services can help your business
              grow online and outrank competitors on Google.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-200">
            <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button">
              Get Free Quote Today
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
