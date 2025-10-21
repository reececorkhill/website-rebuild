import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/web-design"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/web-hosting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bespoke Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Technologies</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">React</li>
              <li className="text-muted-foreground">Next.js</li>
              <li className="text-muted-foreground">TailwindCSS</li>
              <li className="text-muted-foreground">Vite</li>
              <li className="text-muted-foreground">WordPress</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span><a href="mailto:reece@smartit-webdevelopment.co.uk">reece@smartit-webdevelopment.co.uk</a></span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+44 7749 710226</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Smart-IT-Web-Development"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/smart-it-web-development/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:reece@smartit-webdevelopment.co.uk"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Smart IT Web Development Limited © 2025. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
