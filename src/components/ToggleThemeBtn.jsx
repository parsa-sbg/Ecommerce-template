import propTypes from 'prop-types'
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";



export default function ToggleThemeBtn({ isDark, setIsDark }) {


    const changeTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <div onClick={changeTheme} className="fixed bottom-2 left-2 md:bottom-8 md:left-8 z-40 bg-white dark:bg-black rounded-full p-2 border-2
         border-black dark:border-white cursor-pointer">
            {isDark ? <IoMdSunny size={45}/> : <IoMdMoon size={45}/>}
        </div>
    )
}

ToggleThemeBtn.propTypes = {
    isDark: propTypes.bool,
    setIsDark: propTypes.func
}
