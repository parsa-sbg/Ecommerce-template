import HomeMenu from "../components/Home/HomeMenu"
import HomeSlider from "../components/Home/HomeSlider/HomeSlider"


export default function Home() {
  return (
    <div className="mt-5">

      {/* home section */}
      <div className="grid grid-cols-12 gap-7">

        <div className="hidden md:block md:col-span-3 lg:col-span-3">
          <HomeMenu />
        </div>

        <div className="col-span-12 md:col-span-9 lg:col-span-9">
          <HomeSlider />
        </div> 

      </div>


    </div>
  )
}
