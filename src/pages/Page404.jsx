import { Link } from 'react-router-dom'
import SiteBtn from '../components/SiteBtn'


export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-7xl font-semibold">404 Not Found</h1>
      <span className="text-xl mt-5">Your visited page not found. You may go home page.</span>
      <Link to={'/'}>
        <SiteBtn text={'Back to home page'} />
      </Link>
    </div>
  )
}
