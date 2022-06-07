import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts'
import Container from "../layouts/container/baseContainer/baseContainer";
import HeroSlider from "../components/common/HeroSlider/HeroSlider";
import TrendingProducts from "../components/features/TrendingProducts/TrendingProducts";
import TodoList from "../components/TodoList";
import ExploreSection from "../components/common/LandingPage/ExploreSection";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
  return (
      <Container className="">
        <Head>
          <title>Geyak.lk | Search Real state</title>
        </Head>
        <HeroSlider/>
        <ExploreSection/>
      </Container>
  )
}