
export default function About() {
  return (
    <div className="mt-20">


        {/* our story section */}
        <div className="grid grid-cols-2 gap-5 ">
            <div className="flex flex-col justify-center col-span-2 sm:col-span-1 order-1">
                <h1 className="font-bold text-4xl">Our Story</h1>
                <p className="mt-5 text-lg">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p className="mt-5 text-lg">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className="col-span-2 sm:col-span-1 sm:order-3">
                <img className="w-full h-full " src="/src/assets/images/ourstoryImages/ourstory.png" alt="" />
            </div>
        </div>

    </div>
  )
}
