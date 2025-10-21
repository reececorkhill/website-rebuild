import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Smartphone, Palette, Users, Eye, Zap, CheckCircle, Award, TrendingUp } from "lucide-react"

export default function WebDesignPage() {
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
                  <span className="gradient-text">Web Design</span>
                  <br />
                  <span className="text-foreground">That Converts</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-in-left animate-delay-200">
                  Beautiful, responsive designs that captivate your audience and drive results. Every pixel crafted with
                  purpose, every interaction designed for conversion.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animate-delay-300">
                <Button
                  size="lg"
                  className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button"
                >
                  Start Your Design Project
                  <ArrowRight className="ml-2 h-5 w-5" />
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

            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-[#00ADE6]/10 to-[#00ADE6]/5 rounded-3xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ADE610_1px,transparent_1px),linear-gradient(to_bottom,#00ADE610_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <Palette className="h-32 w-32 text-[#00ADE6] relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Added impressive results section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Design Results That Matter</h2>
            <p className="text-muted-foreground text-lg">
              Our designs don't just look good - they deliver measurable business results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "300%", desc: "Average conversion increase", icon: TrendingUp },
              { stat: "2.5s", desc: "Average load time", icon: Zap },
              { stat: "98%", desc: "Mobile responsiveness score", icon: Smartphone },
              { stat: "150+", desc: "Successful projects", icon: Award },
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

      {/* What We Offer - Enhanced with better visual design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">What We Offer</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive design services that cover every aspect of your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Designs that look perfect on every device, from mobile phones to desktop computers.",
              },
              {
                icon: Users,
                title: "User Experience (UX)",
                desc: "Intuitive interfaces that guide users naturally toward your desired actions.",
              },
              {
                icon: Eye,
                title: "Visual Identity",
                desc: "Cohesive brand representation that builds trust and recognition.",
              },
              {
                icon: Zap,
                title: "Performance Focused",
                desc: "Fast-loading designs optimized for speed and search engine rankings.",
              },
              {
                icon: Palette,
                title: "Custom Graphics",
                desc: "Unique visual elements and illustrations tailored to your brand.",
              },
              {
                icon: CheckCircle,
                title: "Accessibility",
                desc: "Inclusive designs that work for users of all abilities and assistive technologies.",
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process - Enhanced with better visual hierarchy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Design Process</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research & Discovery",
                desc: "Understanding your brand, audience, and goals through comprehensive research and stakeholder interviews.",
              },
              {
                step: "02",
                title: "Wireframing",
                desc: "Creating structural blueprints that map out user journeys and content hierarchy.",
              },
              {
                step: "03",
                title: "Visual Design",
                desc: "Crafting beautiful interfaces with your brand colors, typography, and visual elements.",
              },
              {
                step: "04",
                title: "Prototype & Test",
                desc: "Building interactive prototypes and gathering feedback to refine the design.",
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
                    <h3 className="text-xl font-bold gradient-text">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits - Enhanced layout and pricing section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Why Our Designs Work</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  We don't just create beautiful websites – we create digital experiences that drive business results.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Mobile-first approach ensures perfect mobile experience",
                  "Conversion-focused layouts that guide users to action",
                  "SEO-optimized structure for better search rankings",
                  "Fast loading times for better user experience",
                  "Cross-browser compatibility guaranteed",
                  "Ongoing support and maintenance available",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 animate-slide-in-left animate-delay-${(index + 2) * 100}`}
                  >
                    <div className="w-6 h-6 bg-[#00ADE6]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-[#00ADE6]" />
                    </div>
                    <span className="text-muted-foreground text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <Card className="border-border bg-card card-hover">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold gradient-text">Design Packages</h3>
                      <p className="text-muted-foreground">Professional design solutions for every budget</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                        <div>
                          <span className="text-foreground font-medium">Landing Page</span>
                          <p className="text-sm text-muted-foreground">Single page design</p>
                        </div>
                        <span className="text-[#00ADE6] font-bold text-lg">From £500</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                        <div>
                          <span className="text-foreground font-medium">Business Website</span>
                          <p className="text-sm text-muted-foreground">Multi-page site</p>
                        </div>
                        <span className="text-[#00ADE6] font-bold text-lg">From £1,200</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                        <div>
                          <span className="text-foreground font-medium">E-commerce Design</span>
                          <p className="text-sm text-muted-foreground">Online store</p>
                        </div>
                        <span className="text-[#00ADE6] font-bold text-lg">From £2,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                        <div>
                          <span className="text-foreground font-medium">Custom Web App</span>
                          <p className="text-sm text-muted-foreground">Complex application</p>
                        </div>
                        <span className="text-[#00ADE6] font-bold text-lg">From £3,500</span>
                      </div>
                    </div>
                    <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white py-6 text-lg glow-button">
                      Get Custom Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies - Enhanced with better visual design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Design Tools & Technologies</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We use industry-leading tools to create exceptional designs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Figma", desc: "Design & Prototyping", icon: "🎨" },
              { name: "Adobe XD", desc: "UI/UX Design", icon: "✨" },
              { name: "Sketch", desc: "Interface Design", icon: "📐" },
              { name: "Photoshop", desc: "Image Editing", icon: "🖼️" },
              { name: "Illustrator", desc: "Vector Graphics", icon: "🎯" },
              { name: "InVision", desc: "Prototyping", icon: "🔮" },
            ].map((tool, index) => (
              <Card
                key={index}
                className={`text-center border-border bg-card card-hover group animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                  <div className="space-y-1">
                    <p className="text-foreground font-bold">{tool.name}</p>
                    <p className="text-muted-foreground text-xs">{tool.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with modern design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Ready to transform your digital presence?</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Let's create a design that not only looks amazing but drives real business results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-200">
            <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button">
              Start Your Design Project
              <ArrowRight className="ml-2 h-5 w-5" />
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
      </section>

      <Footer />
    </div>
  )
}
