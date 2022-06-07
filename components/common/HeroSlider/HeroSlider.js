import React, {useEffect, useState} from 'react';
import Section, {SectionColumn, SectionRow} from "../../../layouts/container/sections/sections";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Tab} from "@material-ui/core";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import InputBase from "../../features/Search/InputBase/InputBase";
import {CartState} from "../../../context/context";
import { useRouter } from 'next/router'

const HeroSlider = () => {
    const router = useRouter()
    const { handleSelectedValues, clearFilterData } = CartState();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        handleSelectedValues();
    };
    useEffect(() =>{
        clearFilterData();
        if(router.pathname === "/rent"){
            setValue('2');
        }
    },[])

    return(
        <div className="hero-slider">
            <div className="desc">
                Let's Explore Properties
            </div>
            <div className=" tab ">
                    <TabContext value={value} >
                        <div className="tab-pane">
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Land For Sale" value="1" />
                                <Tab label="House For Rent" value="2" />
                            </TabList>
                        </div>
                        <TabPanel value="1">
                            <InputBase activeTabDetails="lands" />
                        </TabPanel>
                        <TabPanel value="2">
                            <InputBase activeTabDetails="homes"/>
                        </TabPanel>
                    </TabContext>
            </div>
        </div>
    )
}

export default HeroSlider;