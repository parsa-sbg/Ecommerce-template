import { PiPhone } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import SiteBtn from '../components/SiteBtn'



export default function Contact() {
    return (
        <div className="grid w-full grid-cols-7 md:my-20 gap-10 md:gap-4 lg:gap-10">

            <div className="col-span-7 md:col-span-3 w-full p-7 flex flex-col gap-5 shadow-xl rounded-sm">
                <div className="flex flex-col w-full gap-2 border-b-4 border-b-gray-300 pb-5" >
                    <div className="flex w-full items-center gap-3">
                        <PiPhone className="bg-red-600 rounded-full p-2 text-white" size={40} />
                        <span className="w-full font-semibold">Call To Us</span>
                    </div>
                    <p className="w-full text-wrap">We are available 24/7, 7 days a week.</p>
                    <p className="w-full text-wrap">Phone: +8801611112222</p>
                </div>
                <div className="flex flex-col gap-2" >
                    <div className="flex w-full items-center gap-3">
                        <MdOutlineMail className="bg-red-600 rounded-full p-2 text-white" size={40} />
                        <span className="w-full font-semibold">Write To US</span>
                    </div>
                    <p className="w-full text-wrap">Fill out our form and we will contact you within 24 hours.</p>
                    <p className="w-full text-wrap">Emails: customer@exclusive.com</p>
                    <p className="w-full text-wrap">Emails: support@exclusive.com</p>
                </div>
            </div>

            <form className="col-span-7 md:col-span-4 w-full flex justify-between flex-col p-7 gap-5 shadow-xl rounded-sm"  onSubmit={e => {e.preventDefault()}}>
                <div className="grid grid-cols-12 gap-3">
                    <input className="col-span-6 w-full h-10 rounded-sm outline-none py-1 px-2 bg-gray-100 dark:bg-gray-600" placeholder="Your Name" type="text" />
                    <input className="col-span-6 w-full h-10 rounded-sm outline-none py-1 px-2 bg-gray-100 dark:bg-gray-600" placeholder="Your Phone" type="text" />
                    <input className="col-span-12 w-full h-10 rounded-sm outline-none py-1 px-2 bg-gray-100 dark:bg-gray-600" placeholder="Your Email" type="email" />
                </div>

                <textarea className="outline-none bg-gray-100 dark:bg-gray-600 py-1 px-2 resize-none h-full rounded-sm" placeholder="Your Massage" name="" id=""></textarea>

                <div className="h-fit col-span-12 ml-auto">
                    <SiteBtn noMargin text={'Send Massage'} />
                </div>
            </form>

        </div>
    )
}
