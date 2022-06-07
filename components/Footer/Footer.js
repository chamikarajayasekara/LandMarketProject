import React from 'react';
import Section, {SectionColumn} from "../../layouts/container/sections/sections";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <Section className=" text-center" >
            <SectionColumn  className="w-full ">
                <div className="footer_div">
                    <div className="footer-left">
                        <div className=" cursor-pointer ml-2">
                            <Link href="/">
                                <div className={'image-container-footer'}>
                                    <Image  src="https://i.ibb.co/5Gq2r2P/27912719-1807638452863172-3791369841824212712-o.jpg"
                                            alt="Accessories Hub LOGO" layout="fill" className={'image'} />
                                </div>
                            </Link>
                        </div>
                        <div className="text-left mt-2 ml-1">&copy;Accessories Hub. All rights reserved {new Date().getFullYear()}</div>

                    </div>
                    <div className=" footer-center">
                        <div className="footer-links">
                            <div className="text-left mb-4">About</div>
                            <div className="text-left mb-4">Shipping & Returns</div>
                            <div className="text-left mb-4">Privacy Policy</div>
                            <div className="text-left mb-4">Terms of use</div>
                        </div>
                    </div>
                    {/*<div className="footer-right">*/}
                    {/*    <div className={'image-container-footer'}>*/}
                    {/*        <Image  src="https://i.ibb.co/1Z5WphG/pepper.png"*/}
                    {/*                alt="Romata LOGO" layout="fill" className={'image'} />*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>
            </SectionColumn>
        </Section>
    );
};

export default Footer;