import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/slices/siderbarSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState('Stay')

  const handleOpen = () => {
    dispatch(sidebarActions.toggleOpen())
  }

  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    isDarkMode: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY <= 100) {
        setScrollState({ isScrolling: true, isDarkMode: false });
      } else if (window.scrollY > 100) {
        setScrollState({ isScrolling: true, isDarkMode: true });
      } else {
        setScrollState({ isScrolling: false, isDarkMode: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        ${scrollState.isScrolling ? 'z-[100] fixed w-full p-mobile' : 'z-[100] fixed w-full p-mobile'}
        ${scrollState.isScrolling && !scrollState.isDarkMode ? '' : ''}
        ${scrollState.isDarkMode ? 'backdrop-blur-lg bg-opacity-75 bg-white' : ''}
        transition-all duration-300
      `}
    >
      <div className='flex items-center bg-transparent justify-between w-full p-nav'>
        <div className={`btn h-[2em] hover:shadow-md lg:h-[var(--btn-height-small)] ${scrollState.isDarkMode ? 'bg-[var(--color-butterflygreen-900)] text-white' : ''}`}>
        </div>
        
          <div className='logo'>
          <Link to={'/'}>
            <div className={`inline-block text-4xl h-[1.25rem] transition-all has-sticky-header:!text-primary ${scrollState.isDarkMode ? 'text-red-600' : 'text-white'}`}>
              𝐀&𝐊
            </div>
            </Link>
          </div>

        <div>
          <nav className='flex items-center gap-nav'>
            <ul className={`lg:flex hidden ${scrollState.isDarkMode ? 'text-[var(--color-dark)]' : 'text-[var(--color-white)]'}`}>
              {['Solutions', 'Dining', 'Relax', 'Discover'].map((item, index) => (
                <li key={index} className='nav-a'>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className='flex-custom-center relative overflow-hidden group uppercase'
                  >
                    <span className='nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-[var(--color-accent)]'>
                      <span className={`text-5 ${scrollState.isDarkMode ? 'dark-underline' : 'hover-underline'}`}>
                        {item}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* <div className={`${scrollState.isDarkMode ? 'bg-[var(--color-border)] border-bottom' : 'border-bottom'}`}></div> */}
    </header >
  )
}

export default Header