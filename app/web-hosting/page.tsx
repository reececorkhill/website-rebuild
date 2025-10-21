import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Server, Shield, Zap, Clock, Wifi, CheckCircle, X, Award, Users, Globe } from "lucide-react"

export default function WebHostingPage() {
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
                  <span className="gradient-text">Web Hosting</span>
                  <br />
                  <span className="text-foreground">That Never Sleeps</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-in-left animate-delay-200">
                  Reliable, fast, and secure hosting solutions that keep your website running smoothly 24/7. From shared
                  hosting to dedicated servers, we have the perfect solution for your needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animate-delay-300">
                <Button
                  size="lg"
                  className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button"
                >
                  Choose Your Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg border-border hover:bg-muted bg-transparent glow-button"
                >
                  Compare Plans
                </Button>
              </div>

              {/* Key Stats - Enhanced visual design */}
              <div className="grid grid-cols-3 gap-6 pt-4 animate-slide-in-left animate-delay-400">
                <Card className="text-center border-border bg-card/50 card-hover">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold gradient-text">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-border bg-card/50 card-hover">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold gradient-text">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-border bg-card/50 card-hover">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold gradient-text">Free</div>
                    <div className="text-sm text-muted-foreground">SSL</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-[#00ADE6]/10 to-[#00ADE6]/5 rounded-3xl flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ADE610_1px,transparent_1px),linear-gradient(to_bottom,#00ADE610_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <Server className="h-32 w-32 text-[#00ADE6] relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans - Enhanced with better visual hierarchy and modern card designs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Choose Your Hosting Plan</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              Scalable solutions that grow with your business, backed by enterprise-grade infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-border bg-card relative card-hover animate-slide-up animate-delay-100">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl gradient-text">Starter</CardTitle>
                <div className="text-4xl font-bold gradient-text">
                  £5<span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">Perfect for small websites</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    { feature: "1 Website", included: true },
                    { feature: "10GB SSD Storage", included: true },
                    { feature: "100GB Bandwidth", included: true },
                    { feature: "Free SSL Certificate", included: true },
                    { feature: "Email Accounts", included: true },
                    { feature: "24/7 Support", included: true },
                    { feature: "Daily Backups", included: false },
                    { feature: "CDN", included: false },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {item.included ? (
                        <CheckCircle className="h-5 w-5 text-[#00ADE6] flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={item.included ? "text-foreground" : "text-muted-foreground"}>
                        {item.feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white py-6 text-lg glow-button">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="border-[#00ADE6] bg-card relative card-hover scale-105 animate-slide-up animate-delay-200">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00ADE6] text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl gradient-text">Business</CardTitle>
                <div className="text-4xl font-bold gradient-text">
                  £15<span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">Ideal for growing businesses</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    { feature: "5 Websites", included: true },
                    { feature: "50GB SSD Storage", included: true },
                    { feature: "500GB Bandwidth", included: true },
                    { feature: "Free SSL Certificate", included: true },
                    { feature: "Unlimited Email Accounts", included: true },
                    { feature: "24/7 Priority Support", included: true },
                    { feature: "Daily Backups", included: true },
                    { feature: "CDN Included", included: true },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#00ADE6] flex-shrink-0" />
                      <span className="text-foreground">{item.feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white py-6 text-lg glow-button">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border bg-card relative card-hover animate-slide-up animate-delay-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl gradient-text">Enterprise</CardTitle>
                <div className="text-4xl font-bold gradient-text">
                  £50<span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">For high-traffic websites</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    { feature: "Unlimited Websites", included: true },
                    { feature: "200GB SSD Storage", included: true },
                    { feature: "Unlimited Bandwidth", included: true },
                    { feature: "Free SSL Certificate", included: true },
                    { feature: "Unlimited Email Accounts", included: true },
                    { feature: "24/7 Dedicated Support", included: true },
                    { feature: "Hourly Backups", included: true },
                    { feature: "Premium CDN", included: true },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#00ADE6] flex-shrink-0" />
                      <span className="text-foreground">{item.feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white py-6 text-lg glow-button">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features - Enhanced with better visual design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Why Choose Our Hosting?</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              Enterprise-grade infrastructure with personal service and unmatched reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "SSD storage and optimized servers ensure your site loads in milliseconds.",
              },
              {
                icon: Shield,
                title: "Secure & Protected",
                desc: "Advanced security measures and regular updates keep your data safe.",
              },
              {
                icon: Clock,
                title: "99.9% Uptime",
                desc: "Reliable infrastructure with redundant systems and monitoring.",
              },
              {
                icon: Wifi,
                title: "Global CDN",
                desc: "Content delivery network ensures fast loading worldwide.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center border-border bg-card card-hover group animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-[#00ADE6]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold gradient-text">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications - Enhanced layout and content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Technical Specifications</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  Our hosting infrastructure is built on enterprise-grade hardware and software for maximum performance
                  and reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold gradient-text">Server Specifications</h3>
                  <div className="space-y-4">
                    {[
                      "Latest Intel Xeon processors",
                      "NVMe SSD storage",
                      "DDR4 ECC memory",
                      "1Gbps network connectivity",
                    ].map((spec, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 animate-slide-in-left animate-delay-${(index + 2) * 100}`}
                      >
                        <div className="w-2 h-2 bg-[#00ADE6] rounded-full"></div>
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold gradient-text">Software & Security</h3>
                  <div className="space-y-4">
                    {["Latest PHP, MySQL, Node.js", "Free SSL certificates", "DDoS protection", "Malware scanning"].map(
                      (spec, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 animate-slide-in-left animate-delay-${(index + 6) * 100}`}
                        >
                          <div className="w-2 h-2 bg-[#00ADE6] rounded-full"></div>
                          <span className="text-muted-foreground">{spec}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <Card className="border-border bg-card card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Need Custom Hosting?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    For high-traffic websites or specific requirements, we offer custom hosting solutions tailored to
                    your needs.
                  </p>
                  <div className="space-y-4">
                    {["Dedicated servers", "Cloud hosting solutions", "Load balancing", "Custom configurations"].map(
                      (feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-[#00ADE6] flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                  <Button className="w-full bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white py-6 text-lg glow-button">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support - Enhanced with better visual design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">24/7 Expert Support</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              Our hosting experts are always available to help you with any questions or issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Live Chat", desc: "Instant support via live chat", time: "24/7", icon: Users },
              { title: "Email Support", desc: "Detailed help via email", time: "< 2 hours", icon: Award },
              { title: "Phone Support", desc: "Direct phone assistance", time: "Business hours", icon: Globe },
            ].map((support, index) => (
              <Card
                key={index}
                className={`border-border bg-card card-hover group animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-[#00ADE6]/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-[#00ADE6]/20 transition-colors duration-300">
                    <support.icon className="h-8 w-8 text-[#00ADE6]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold gradient-text">{support.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{support.desc}</p>
                    <div className="text-[#00ADE6] font-bold text-lg">{support.time}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Ready to host your website?</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Choose the perfect hosting plan for your needs and get online in minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-200">
            <Button size="lg" className="bg-[#00ADE6] hover:bg-[#00ADE6]/90 text-white px-8 py-6 text-lg glow-button">
              Choose Your Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border hover:bg-muted bg-transparent glow-button"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
