import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [
    { name: 'Income', href: '/navigator?tab=0' },
    { name: 'Outcome', href: '/navigator?tab=1' },
    { name: 'Loan', href: '/navigator?tab=2' },
    { name: 'Investment', href: '/navigator?tab=3' },
  ]
  
    
  
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           
          </div>
        </nav>
  )
}
