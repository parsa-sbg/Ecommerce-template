import HomeMenu from "../components/Home/HomeMenu"
import HomeSlider from "../components/Home/HomeSlider/HomeSlider"
import SectionHeader from "../components/Home/SectionHeader"
import FlashSalesSlider from "../components/Home/FlashSalesSlider"
import SiteBtn from "../components/SiteBtn"

import CategoryItem from "../components/Home/CategoryItem"
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

import ProductBox from "../components/Home/ProductBox"
import NewArrivalBox from "../components/Home/NewArrivalBox"
import OurServices from "../components/OurServices/OurServices"


export default function Home() {
  return (
    <div className="mt-5 pb-48">


      {/* home section */}
      <div className="grid grid-cols-12 gap-7">

        <div className="hidden md:block md:col-span-3 lg:col-span-3">
          <HomeMenu />
        </div>

        <div className="col-span-12 md:col-span-9 lg:col-span-9">
          <HomeSlider />
        </div>

      </div>


      {/* flash sales */}
      <div className="mt-10">

        <SectionHeader flagName='Today’s' title='Flash Sales' />
        <FlashSalesSlider />
        <div className="max-w-56 mx-auto">
          <SiteBtn text={'View All Products'} />
        </div>
      </div>


      {/* Categories */}
      <div className="border-y border-stone-400 mt-14 py-20">
        <SectionHeader flagName={'categories'} title={'Browse By Category'} />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={CiMobile4} name={'Phones'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={HiOutlineComputerDesktop} name={'Computers'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={BsSmartwatch} name={'SmartWatch'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={CiCamera} name={'Camera'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={CiHeadphones} name={'HeadPhones'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2" ><CategoryItem Svg={LuGamepad} name={'Gaming'} /></div>
        </div>
      </div>


      {/* best selling */}
      <div className="mt-14">
        <SectionHeader isNeedViewAllBtn={true} flagName={'This Month'} title={'Best Selling Products'} />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/bookself.png'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/bag.png'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/coat.png'} /></div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 "> <ProductBox title={'Gucci duffle bag'} price={960} priceBeforeOff={1160} imageUrl={'/src/assets/images/bestsellingImages/cooler.png'} /></div>
        </div>
      </div>


      {/* Our Products */}
      <div className="mt-28">
        <SectionHeader flagName={'Our Products'} title={'Explore Our Products'} />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'Breed Dry Dog Food'} isNew price={100} imageUrl={'/src/assets/images/ourproductsImages/dog-food.png'} /> </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'CANON EOS DSLR Camera'} price={360} imageUrl={'/src/assets/images/ourproductsImages/camera.png'} /> </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'ASUS FHD Gaming Laptop'} price={700} imageUrl={'/src/assets/images/ourproductsImages/laptop.png'} /> </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'Curology Product Set '} price={500} imageUrl={'/src/assets/images/ourproductsImages/product-set.png'} /> </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'Kids Electric Car'} isNew price={960} imageUrl={'/src/assets/images/ourproductsImages/car.png'} /> </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'Jr. Zoom Soccer Cleats'} price={1160} imageUrl={'/src/assets/images/ourproductsImages/Soccer-Cleats.png'} /> </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'GP11 Shooter USB Gamepad'} isNew price={660} imageUrl={'/src/assets/images/ourproductsImages/Gamepad.png'} /> </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3"> <ProductBox title={'Quilted Satin Jacket'} price={660} imageUrl={'/src/assets/images/ourproductsImages/Jacket.png'} /> </div>
        </div>
        <div className="max-w-56 mx-auto">
          <SiteBtn text={'View All Products'} />
        </div>
      </div>


      {/* New Arrival */}
      <div className="mt-28">
        <SectionHeader title={'New Arrival'} flagName={'Featured'} />

        <div className="grid grid-cols-12 gap-5 ">

          <div className="bg-black max-h-[500px] col-span-12 sm:col-span-6">
            <NewArrivalBox title={'PlayStation 5'} desc={'Black and White version of the PS5 coming out on sale.'} imageUrl={'/src/assets/images/newarrivalImages/playstation.png'} />
          </div>

          <div className="col-span-12 sm:col-span-6 max-h-[500px] grid grid-cols-2 gap-5 grid-rows-2">
            <div className="bg-black col-span-2">
              <NewArrivalBox imageRight title={'Women’s Collections'} desc={'Featured woman collections that give you another vibe.'} imageUrl={'/src/assets/images/newarrivalImages/womens-collections.png'} />
            </div>

            <div className="bg-black " >
              <NewArrivalBox title={'Speakers'} desc={'Amazon wireless speakers'} imageUrl={'/src/assets/images/newarrivalImages/speakers.png'} />
            </div>
            <div className="bg-black " >
              <NewArrivalBox title={'Perfume'} desc={'GUCCI INTENSE OUD EDP'} imageUrl={'/src/assets/images/newarrivalImages/perfume.png'} />
            </div>
          </div>

        </div>

      </div>

      {/* our services */}
      <div className="mt-28">
        <OurServices />
      </div>

    </div>
  )
}
