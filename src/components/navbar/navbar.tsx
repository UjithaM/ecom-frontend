import { useState } from "react"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import {Button} from "@/components/ui/button.tsx";
import {NavLink} from "react-router-dom";


const navLinks = [
    { name: "Home", href: "/" },
    { name: "Women", href: "/women" },
    { name: "Men", href: "/men" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sale", href: "/sale" },
    { name: "New Arrivals", href: "/new" },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-background border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <span className="text-xl font-bold">BRAND</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} to={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-4">
                        <button className="hidden md:flex items-center text-sm font-medium hover:text-primary">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </button>

                        <a href="/account" className="hover:text-primary">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </a>

                        <a href="/cart" className="relative hover:text-primary">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] flex items-center justify-center bg-primary text-primary-foreground rounded-full">
                3
              </span>
                            <span className="sr-only">Cart</span>
                        </a>

                        {/* Mobile menu button */}
                        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            <span className="sr-only">Menu</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 border-t">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="px-3 py-2">
                        <div className="relative mt-3">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

