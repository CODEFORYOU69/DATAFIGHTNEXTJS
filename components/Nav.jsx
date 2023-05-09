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
        <nav className="bg-blue-500 fixed w-full top-0 z-50">
            <div className="flex items-center ml-12 justify-between">
                <NavLink href="/" exact>
                    Home
                </NavLink>
                <NavLink href="/howtouse" exact>
                    How to Use
                </NavLink>
                <NavLink href="/users">Users</NavLink>
                <NavLink href="/fighters">Fighters</NavLink>
                <NavLink href="/fights">Add Fight</NavLink>
                <NavLink href="/Stats">Stats</NavLink>
                <button
                    onClick={userService.logout}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white transition-colors duration-300 ease-in-out"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}
