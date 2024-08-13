import { memo, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";


export default memo(function HomeMenu() {

    const [openMenuIds, setOpenMenuIds] = useState([])

    const allMenus = [
        {
            id: 1,
            name: 'Woman’s Fashion',
            subMenus: [
                {
                    id: 10,
                    name: 'sub menu 1',
                },

                {
                    id: 11,
                    name: 'sub menu 2',
                    subSubMenus: [
                        {
                            id: 10020,
                            name: 'sub sub menu 1'
                        }
                    ]
                },
                {
                    id: 30,
                    name: 'sub menu 3',
                }
            ]
        },
        {
            id: 2,
            name: 'Men’s Fashion',
            subMenus: [
                {
                    id: 13,
                    name: 'subMenu 4',
                    subSubMenus: [
                        {
                            id: 100,
                            name: 'sub sub menu 2'
                        }
                    ]
                }
            ]
        },
        {
            id: 1000,
            name: 'Electronics'
        },
        {
            id: 1001,
            name: 'Home & Lifestyle'
        },
        {
            id: 1002,
            name: 'Medicine'
        },
        {
            id: 1003,
            name: 'Sports & Outdoor'
        }
    ]

    function toggleMenu(menuId) {
        setOpenMenuIds(prevState => {
            if (prevState.some(id => id == menuId)) {
                return prevState.filter(item => item != menuId)
            } else {
                return [...prevState, menuId]
            }
        })
    }


    return (
        <ul className="w-full  flex flex-col gap-2">

            {/* menu */}
            {allMenus.map(menu => (
                <li key={menu.id}>
                    <span className="flex justify-between items-center cursor-pointer hover:text-red-600 transition-colors" onClick={() => { menu.subMenus && toggleMenu(menu.id) }}>{menu.name} {menu.subMenus ? <FaAngleRight className={` transition-transform ${openMenuIds.includes(menu.id) ? 'rotate-90' : ''}`} size={12} /> : ''} </span>

                    {/* submenu */}
                    <ul className={`transition-all flex flex-col ml-5 pl-1 overflow-hidden max-h-0 ${openMenuIds.includes(menu.id) ? 'max-h-36 border-l py-1' : ''}`}>
                        {menu.subMenus?.map(submenu => <li key={submenu.id}>
                            <span className="flex justify-between items-center cursor-pointer hover:text-red-600 transition-colors" onClick={() => { submenu.subSubMenus && toggleMenu(submenu.id) }}>{submenu.name} {submenu.subSubMenus ? <FaAngleRight className={` transition-transform ${openMenuIds.includes(submenu.id) ? 'rotate-90' : ''}`} size={12} /> : ''} </span>

                            {/* sub sub menu */}
                            <ul className={`transition-all flex flex-col ml-5 pl-1 overflow-hidden max-h-0 ${openMenuIds.includes(submenu.id) ? 'max-h-36 border-l py-1' : ''}`}>
                                {submenu.subSubMenus?.map(subSubMenu => <li key={subSubMenu.id}>
                                    <span className="flex justify-between items-center cursor-pointer hover:text-red-600 transition-colors" onClick={() => { subSubMenu.subsubsubMenus && toggleMenu(subSubMenu.id) }}>{subSubMenu.name} {subSubMenu.subsubsubMenus ? <FaAngleRight size={12} /> : ''} </span>
                                </li>)}
                            </ul>

                        </li>)}
                    </ul>

                </li>
            ))}

        </ul>
    )
})