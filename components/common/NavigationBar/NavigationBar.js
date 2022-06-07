import React, {useEffect} from 'react';
import Link from 'next/link'
import {FaShoppingBag} from "react-icons/fa";
import Image from "next/image";
import Searchbar from "../SearchBar/Searchbar";
import ShopCartWrapper from "../../features/Cart/ShopCartWrapper";


const NavigationBar = () => {
    return (
        <header className=" navbar">
            <div className="left1">
                <div className=" cursor-pointer">
                    <Link href="/">
                        <div className={'image-container-footer'}>
                            {/*<Image  src="https://i.ibb.co/5Gq2r2P/27912719-1807638452863172-3791369841824212712-o.jpg"*/}
                            {/*        alt="Accessories Hub LOGO" layout="fill" className={'image'} />*/}
                            <h3>Geyak.lk</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="center1"></div>
            <div className="right1 ">
                <ul className="cursor-pointer nav-list">
                    <li  className="list-none inline-block  li-text home">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li  className="list-none inline-block  li-text">
                        <Link href="/buy">
                            <a>Buy</a>
                        </Link>
                    </li>
                    <li  className="list-none inline-block  li-text ">
                        <Link href="/rent">
                            <a>Rent</a>
                        </Link>
                    </li>
                    <li  className="list-none inline-block  li-text ">Projects</li>
                    <li  className="list-none inline-block li-text">Contact</li>
                </ul>
            </div>
        </header>
    );
};

export default NavigationBar;