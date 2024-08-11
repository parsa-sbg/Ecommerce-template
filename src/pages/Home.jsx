import HomeMenu from "../components/Home/HomeMenu"


export default function Home() {
  return (
    <div className="mt-5">

      {/* home section */}
      <div className="grid grid-cols-12">
        
        <div className="col-span-4 hidden md:block lg:col-span-2">
          <HomeMenu  />
        </div>

      </div>


    </div>
  )
}
