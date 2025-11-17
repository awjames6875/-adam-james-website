'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DropdownItem {
  href: string
  label: string
  description?: string
}

interface NavLink {
  href?: string
  label: string
  dropdown?: DropdownItem[]
}

export interface NavigationProps {
  className?: string
}

const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const businessLinks: DropdownItem[] = [
    { 
      href: '/businesses/integrity-corporate-housing', 
      label: 'Integrity Corporate Housing',
      description: 'Premium corporate housing solutions'
    },
    { 
      href: '/businesses/safe-harbor-mental-health', 
      label: 'Safe Harbor Mental Health',
      description: 'Comprehensive mental health services'
    },
    { 
      href: '/businesses/growthgenix-ai', 
      label: 'GrowthGenix.ai',
      description: 'AI-powered business growth solutions'
    }
  ]

  const locationLinks: DropdownItem[] = [
    { href: '/locations/downtown-tulsa', label: 'Downtown Tulsa' },
    { href: '/locations/midtown-tulsa', label: 'Midtown Tulsa' },
    { href: '/locations/south-tulsa', label: 'South Tulsa' },
    { href: '/locations/north-tulsa', label: 'North Tulsa' },
    { href: '/locations/broken-arrow', label: 'Broken Arrow' },
    { href: '/locations/jenks', label: 'Jenks' },
    { href: '/locations/owasso', label: 'Owasso' },
    { href: '/locations/bixby', label: 'Bixby' }
  ]

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/my-story', label: 'My Story' },
    { label: 'Businesses', dropdown: businessLinks },
    { label: 'Locations', dropdown: locationLinks },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const closeAllMenus = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/98 backdrop-blur-md shadow-lg"
        : "bg-white/95 backdrop-blur-md shadow-sm",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllMenus}>
            <div className="relative">
              <span className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Adam James
              </span>
              <span className="absolute -bottom-1 left-0 text-xs lg:text-sm text-blue-600 font-semibold tracking-wider">
                TULSA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium rounded-lg hover:bg-gray-50"
                      aria-expanded={activeDropdown === link.label}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )} 
                      />
                    </button>
                    
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeAllMenus}
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="font-medium">{item.label}</div>
                            {item.description && (
                              <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={closeAllMenus}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              )
            })}
            
            <Link
              href="/contact"
              onClick={closeAllMenus}
              className="ml-4 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-t shadow-xl">
          <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="space-y-2">
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )} 
                      />
                    </button>
                    
                    {activeDropdown === link.label && (
                      <div className="ml-4 space-y-1 border-l-2 border-blue-100 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeAllMenus}
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg"
                          >
                            <div className="font-medium">{item.label}</div>
                            {item.description && (
                              <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={closeAllMenus}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
                >
                  {link.label}
                </Link>
              )
            })}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={closeAllMenus}
                className="block bg-blue-600 text-white text-center px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
