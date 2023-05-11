import { useState, useEffect } from 'react'

import { NavLink } from '.'
import { userService } from 'services'

export { Nav }

function Nav() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const subscription = userService.user.subscribe((x) => setUser(x))
        return () => subscription.unsubscribe()
    }, [])

    // only show nav when logged in
    if (!user) return null

    return (
        <nav
            className="bg-black fixed w-full top-0 z-50 align-items-center"
            style={{ height: '80px' }}
        >
            <div className="h-[100%] flex items-center  ml-12 justify-between">
                <NavLink href="/" exact>
                    <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Home
                    </span>
                </NavLink>
                <NavLink href="/howtouse" exact>
                    <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        How to Use
                    </span>
                </NavLink>
                <NavLink href="/users">
                    <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Users
                    </span>
                </NavLink>
                <NavLink href="/fighters">
                    <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Fighters
                    </span>
                </NavLink>
                <NavLink href="/fights">
                    <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Add Fight
                    </span>
                </NavLink>
                <NavLink href="/stats">
                    <span className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-300 ease-in-out">
                        Stats
                    </span>
                </NavLink>
                <button
                    onClick={userService.logout}
                    className="px-4 py-2 h-[100%] bg-red-600 hover:bg-red-500 text-white text-lg font-bold transition-colors duration-300 ease-in-out"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}
