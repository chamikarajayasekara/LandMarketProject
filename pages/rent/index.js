import React from 'react';
import Container from "../../layouts/container/baseContainer/baseContainer";
import Head from "next/head";
import HeroSlider from "../../components/common/HeroSlider/HeroSlider";

function Index(props) {
    return (
        <Container className="">
            <Head>
                <title>Geyak.lk | House For Rent</title>
            </Head>
            <HeroSlider/>
        </Container>
    );
}

export default Index;