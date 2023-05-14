import banner from '../assets/images/banner_image_2.jpg';
import home_grid_1 from '../assets/images/home_grid_1.jpg';
import home_grid_2 from '../assets/images/home_grid_2.jpg';
import home_grid_3 from '../assets/images/home_grid_3.jpg';
import home_grid_4 from '../assets/images/home_grid_4.jpg';
import home_grid_5 from '../assets/images/home_grid_5.jpg';
import home_grid_6 from '../assets/images/home_grid_6.jpg';
import home_grid_7 from '../assets/images/home_grid_7.jpg';
import home_grid_8 from '../assets/images/home_grid_8.jpg';
import Carousel from './Carousel';
import CarouselCategory from './CarouselCategory';
import HomePageCard from './HomePageCard';

const Home = () => {
    return (
        <div className="bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto">
                Home
                <Carousel />
                <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
                    <HomePageCard 
                        title={"We have a surprise for you"}
                        img={home_grid_1}
                        link={"See terms and conditions"}
                    />
                    <HomePageCard 
                        title={"Watch The Rings of Power"}
                        img={home_grid_2}
                        link={"Start streaming now"}
                    />
                    <HomePageCard 
                        title={"We have a surprise for you"}
                        img={home_grid_3}
                        link={"Find out more"}
                    />
                    <HomePageCard 
                        title={"We have a surprise for you"}
                        img={home_grid_4}
                        link={"Browse Knidle Unlimited"}
                    />
                    <HomePageCard 
                        title={"We have a surprise for you"}
                        img={home_grid_5}
                        link={"See more"}
                    />
                    <HomePageCard 
                        title={"We have a surprise for you"}
                        img={home_grid_6}
                        link={"See the deals"}
                    />
                    <HomePageCard 
                        title={"We have a surprise for you"}
                        img={home_grid_7}
                        link={"See more"}
                    />
                    <HomePageCard 
                        title={"We have a surprise for you"}
                        img={home_grid_8}
                        link={"Learn more"}
                    />
                    <div  className="m-3 pt-8">
                        <img 
                            src={banner} 
                            alt="banner-img" 
                            className="xl:hidden"    
                        />
                    </div>
                </div>
                <CarouselCategory />
            </div>
        </div>
    );
}

export default Home;
