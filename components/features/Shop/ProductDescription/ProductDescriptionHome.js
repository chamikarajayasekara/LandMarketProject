import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Section, {SectionColumn} from "../../../../layouts/container/sections/sections";
import Image from "next/image";
import QuantityHandler from "../QTYHandler/QuantityHandler";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductDescriptionHome({open, setOpen,product}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                fullWidth={true}
                maxWidth={'md'}
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <div>
                        <Section className="mb-5 mt-5">
                            {/*row01*/}
                            <SectionColumn className="w-6/12 ">
                                <div className="left-col">
                                    <div className="flex flex-wrap justify-center">
                                        <div className={'image-container'}>
                                            <Image src={product.imgUrl} layout="fill" className={'image'} />
                                        </div>
                                    </div>
                                </div>
                            </SectionColumn>
                            <SectionColumn className="w-6/12 ">
                                <div className="product-desc-head">
                                    {product.name}
                                </div>
                                <div className="product-description">
                                    {product.description}
                                </div>
                                <Section>
                                    <SectionColumn className="w-6/12 "><QuantityHandler/></SectionColumn>
                                    <SectionColumn className="w-6/12  mt-5 mb-5">
                                        <div className="product-price">
                                            {product.price}
                                        </div>
                                    </SectionColumn>
                                </Section>

                                <AddToCart/>
                            </SectionColumn>
                        </Section>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
}