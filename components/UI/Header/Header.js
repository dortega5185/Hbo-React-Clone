import Link from 'next/link'
import { useStateContext } from '../../HBOProvider'
import Account from '../Account/Account'
import SearchModal from '../SearchModal/SearchModal'

const Header = (props) => {
  const globalState = useStateContext()

  return (
    <>
      <header
        className={`top-header ${
          globalState.accountModalOpen || globalState.sideNavOpen
            ? 'top-header--menu-open'
            : ''
        } `}
      >
        <div className='top-header__left-side'>
          <div
            className='top-header__menu-btn'
            onClick={() => globalState.setSideNavOpenAction(true)}
          >
            <i className='fas fa-bars' />
          </div>
          <div
            className='top-header__search-btn'
            onClick={() => globalState.setSearchOpenAction(true)}
          >
            <i className='fas fa-search' />
          </div>
        </div>
        <Link href='/'>
          <a>
            <div className='top-header__logo'></div>
          </a>
        </Link>

        <div
          className='top-header__account'
          onClick={() =>
            globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
          }
        >
          <img
            src='/img/man1.jpg'
            alt='Picture of random person'
            className='top-header__user-img'
          />
          <div className='top-header__user-name'>{globalState.user}</div>
        </div>
        <Account />
        <SearchModal />
      </header>
    </>
  )
}

export default Header
