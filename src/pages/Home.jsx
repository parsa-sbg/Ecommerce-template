import HomeMenu from "../components/Home/HomeMenu"
import HomeSlider from "../components/Home/HomeSlider/HomeSlider"
import SectionHeader from "../components/Home/SectionHeader"
import FlashSalesSlider from "../components/Home/FlashSalesSlider"
import SiteBtn from "../components/SiteBtn"


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


    </div>
  )
}
