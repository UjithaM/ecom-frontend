import { Facebook, Twitter, Instagram, YoutubeIcon as YouTube } from "lucide-react"
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";


const footerLinks = [
    {
        title: "Shop",
        links: [
            { name: "Women's Fashion", href: "/womens" },
            { name: "Men's Fashion", href: "/mens" },
            { name: "Accessories", href: "/accessories" },
            { name: "Shoes", href: "/shoes" },
            { name: "New Arrivals", href: "/new-arrivals" },
        ],
    },
    {
        title: "Customer Service",
        links: [
            { name: "Contact Us", href: "/contact" },
            { name: "Shipping & Returns", href: "/shipping-returns" },
            { name: "FAQ", href: "/faq" },
            { name: "Size Guide", href: "/size-guide" },
            { name: "Track Order", href: "/track-order" },
        ],
    },
    {
        title: "About Us",
        links: [
            { name: "Our Story", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Press", href: "/press" },
            { name: "Sustainability", href: "/sustainability" },
            { name: "Affiliates", href: "/affiliates" },
        ],
    },
]

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "YouTube", icon: YouTube, href: "https://youtube.com" },
]

export default function Footer() {
    return (
        <footer className="bg-muted mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
                        <p className="text-muted-foreground mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <Input type="email" placeholder="Enter your email" className="flex-grow" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="h-6 w-6" />
                                    <span className="sr-only">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-muted-foreground/20 mt-12 pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <a href="/privacy-policy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="hover:text-primary transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

