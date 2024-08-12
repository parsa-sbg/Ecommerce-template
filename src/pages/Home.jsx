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
      <div>
        <SectionHeader flagName='Today’s' title='Flash Sales' />
        <FlashSalesSlider />
        <div className="max-w-56 mx-auto">
          <SiteBtn text={'View All Products'} />
        </div>
      </div>

      {/* Categories */}
      <div>
        <SectionHeader flagName={'categories'} title={'Browse By Category'} />
        <div className="flex justify-between">
          <div className="w-48 h-40" ><CategoryItem Svg={CiMobile4} name={'Phones'} /></div>
          <div className="w-48 h-40" ><CategoryItem Svg={HiOutlineComputerDesktop} name={'Computers'} /></div>
          <div className="w-48 h-40" ><CategoryItem Svg={BsSmartwatch} name={'SmartWatch'} /></div>
          <div className="w-48 h-40" ><CategoryItem Svg={CiCamera} name={'Camera'} /></div>
          <div className="w-48 h-40" ><CategoryItem Svg={CiHeadphones} name={'HeadPhones'} /></div>
          <div className="w-48 h-40" ><CategoryItem Svg={LuGamepad} name={'Gaming'} /></div>
        </div>
      </div>

    </div>
  )
}
