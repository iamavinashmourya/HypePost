import AnimationWrapper from "../common/page-animation";
import InPageNavigation from "../components/inpage-navigation.component";

const HomePage = () => {
    return (
        <AnimationWrapper>
            <section className="h-cover flex justify-center gap-10">
                {/* lastest blog */}
                <div className="w-full">

                    <InPageNavigation routes={["home", "trending blogs"]} defaultHidden={["trending blogs"]}>

                        <h1>Latest Blogs Here</h1>

                        <h1>Trending Blogs Here</h1>

                    </InPageNavigation>

                </div>

                {/* filters and trending blogs */}
                <div>

                </div>
            </section>
        </AnimationWrapper>
    )
}

export default HomePage;