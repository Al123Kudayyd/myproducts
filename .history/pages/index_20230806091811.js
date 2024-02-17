import Nav from '@/Components/Nav'
import Banner from '@/Components/Banner'
import Products from '@/Components/Products'
import Login from '@/Modals/Login'
import Reviews from '@/Components/Reviews'
import Signup from '@/Modals/Signup'
import Reviewers from '@/Modals/Reviewers'


export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <Login />
      <Reviews />
      <Reviewers />
    </div>
  )
}
