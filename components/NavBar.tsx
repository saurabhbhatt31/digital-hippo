import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from './NavItems'

function NavBar() {
    return (
        <div className='bg-white sticky z-50 top-0 inset-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* TODO : Mobile Nav */}

                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'>
                                   <Icons.logo className='h-10 w-10'/>
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:block lg:ml-8 lg:self-stretch">
                                <NavItems/>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default NavBar