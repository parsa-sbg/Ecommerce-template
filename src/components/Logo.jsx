import { memo } from "react"
import { Link } from "react-router-dom"

export default memo(function Logo() {
  return (
    <Link to={'/'} className="font-bold text-xl sm:text-2xl">Exclusive</Link>
  )
})
