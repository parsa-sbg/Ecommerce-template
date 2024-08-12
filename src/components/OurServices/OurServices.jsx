import OurServicesItem from "./OurServicesItem"
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";





export default function OurServices() {
    return (
        <div className="flex justify-evenly items-center flex-wrap gap-10">
            <OurServicesItem title={'FREE AND FAST DELIVERY'} desc={'Free delivery for all orders over $140'} Icon={TbTruckDelivery} />
            <OurServicesItem title={'24/7 CUSTOMER SERVICE'} desc={'Friendly 24/7 customer support'} Icon={TfiHeadphoneAlt} />
            <OurServicesItem title={'MONEY BACK GUARANTEE'} desc={'We reurn money within 30 days'} Icon={RiShieldCheckLine} />
        </div>
    )
}
