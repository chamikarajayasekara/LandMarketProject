import React from 'react';
import Link from 'next/link'
import Container from "../../../layouts/container/baseContainer/baseContainer";
import Image from "next/image";
import Searchbar from "../SearchBar/Searchbar";

const Navbar = () => {
    let links = null;
    return (
        <Container>
            <div className="nav flex flex-wrap justify-center content-center">
                <div className="flex  flex-row justify-start flex-1">
                    <Link href="/">
                        <a className="logo" aria-label="Logo">
                            <Link href="/">
                                <Image
                                    src="https://i.ibb.co/44QGYMg/romata-logo.png"
                                    alt="Romata LOGO"
                                    width={120}
                                    height={120}
                                    layout="intrinsic"
                                />
                            </Link>
                        </a>
                    </Link>
                    <nav className="navMenu">
                        <Link href="/">
                            <a className="link">All</a>
                        </Link>
                        <Link href="/shop">
                            <a className="link ml-5">Shop</a>
                        </Link>
                        {links?.map((l) => (
                            <Link href={l.href} key={l.href}>
                                <a className="link">{l.label}</a>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="justify-center flex-1 hidden lg:flex">
                    <Searchbar />
                </div>
                <div className="flex items-center justify-end flex-1 space-x-8">

                </div>
            </div>
        </Container>
    );
};

export default Navbar;