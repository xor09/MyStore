import React,{ Fragment } from 'react'
import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

  const {data : items} = useSelector((state) => state.cart)

  return (
    <Disclosure as="nav" className="bg-indigo-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden rounded-full"
                    src="https://cdn.dribbble.com/users/4843167/screenshots/14540242/dribbble-min_4x.jpg"
                    alt="My Store"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block rounded-full"
                    src="https://cdn.dribbble.com/users/4843167/screenshots/14540242/dribbble-min_4x.jpg"
                    alt="My Store"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link className={'text-white font-medium rounded-md'} to="/">Home</Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  className="rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  to="/cart"
                >
                  <span className="sr-only">View notifications</span>
                  <div className='flex'>
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                    {items.length ? <p className='text-amber-400'>{items.length}</p> : <></>}
                  </div>
                </Link>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 inline-flex flex-col">
              <Disclosure.Button>
                <Link className={'text-white font-medium rounded-md'} to="/">Home</Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;


