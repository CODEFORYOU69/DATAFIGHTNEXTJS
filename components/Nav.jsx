import { useState, useEffect } from 'react'
import { NavLink } from '.'
import { userService } from 'services'
import Image from 'next/image'

/**
 * Cette fonction retourne la direction de défilement de la page.
 * @returns {boolean} true si la page défile vers le haut, false sinon.
 */
function useScrollDirection() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            window.requestAnimationFrame(() => {
                const st = window.scrollY || document.documentElement.scrollTop;
        
                if (st > lastScrollTop) {
                    setIsScrollingUp(false);
                } else {
                    setIsScrollingUp(true);
                }
                setLastScrollTop(st <= 0 ? 0 : st);
            });
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return isScrollingUp;
}



export function Nav() {
    const [user, setUser] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const isScrollingUp = useScrollDirection();

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
// subscribe to user observable so can show/hide nav bar elements based on login status
    useEffect(() => {
        const subscription = userService.user.subscribe((x) => setUser(x))
        return () => subscription.unsubscribe()
    }, [])

    // only show nav when logged in
    if (!user) return null

    return (
        <nav
            className={`bg-black fixed w-full top-0 z-50  transition-transform duration-500 ease-in-out ${isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
        >

            <div className={`h-[100%]  ml-4 items-center  justify-between ${isOpen ? 'flex-col ' : 'flex-row mb-0'}`}>
                
                <div className="md:hidden ml-auto">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="flex flex-col text-gray-500 hover:text-white focus:text-white focus:outline-none"
                    >
                        {isOpen ? (
                            <Image
                                className='mr-4 mt-4'
                                src="uploads/cross.svg"
                                alt="Cross icon"
                                width={24}
                                height={24}
                            />
                        ) : (
                            <Image
                                className='mr-4 pt-4 pb-4'
                                src="uploads/burger-menu.svg"
                                alt="Burger menu icon"
                                width={24}
                                height={24}
                            />
                        )}
                    </button>
                </div>
                <div
                    className={`md:flex md:flex-row md:justify-between md:items-center  ${
                        isOpen ? 'flex flex-col items-center' : 'hidden'
                    }`}
                >
                    <div>
                    <NavLink href="/" exact>
                    <span className={`text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out ${isOpen ? 'ml-0' : 'ml-4'}`}>
                        Home
                    </span>
                </NavLink>
                    </div>
                    <div>
                        <NavLink href="/howtouse" exact>
                            <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                                How to Use
                            </span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink href="/users">
                            <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                                Users
                            </span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink href="/fighters">
                            <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                                Fighters
                            </span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink href="/fights">
                            <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                                Add Fight
                            </span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink href="/stats">
                            <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                                Stats
                            </span>
                        </NavLink>
                    </div>
                    <div>
                        <button
                            onClick={userService.logout}
                            className="px-4 py-2 h-[100%] bg-red-600 hover:bg-red-500 text-white text-lg font-bold transition-colors duration-300 ease-in-out"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

