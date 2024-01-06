import React from 'react'
import navClasses from './Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className={navClasses['main-nav']}>
            <Link href='/' className="">Playground</Link>
            <Link href='/' className="">Emoseh</Link>
            <Link href='/' className="">Tape</Link>
            <Link href='/' className="">YT</Link>
            <Link href='/' className="">Credits</Link>
        </nav>
    )
}

export default Navbar
