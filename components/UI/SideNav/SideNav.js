import Link from 'next/link'
import { useStateContext } from '../../HBOProvider'

const SideNav = (props) => {
  const globalState = useStateContext()

  return (
    <div
      className={`side-nav ${
        globalState.sideNavOpen ? 'side-nav--active' : ''
      }`}
    >
      <div
        className='side-nav__close-btn'
        onClick={() => globalState.setSideNavOpenAction(false)}
      >
        <i className='fas fa-times' />
      </div>
      <ul className='side-nav__main'>
        <li>
          <Link href='/home'>
            <a className='active'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Series</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Movies</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Originals</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Just Added</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Last Chance</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Coming Soon</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Trending Now</a>
          </Link>
        </li>
      </ul>
      <div className='side-nav__divider' />
      <ul className='side-nav__main'>
        <li>
          <Link href='/'>
            <a>Action</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Animation</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Comedy</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Crime</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Documentaries</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Drama</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Fantasy & Sci-fi</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Horror</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>International</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Kids & Family</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Latino</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Music</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>News/Talk</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Reality</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Romance</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Shorts</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Sports</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Suspense</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
