
import {
    Bars3Icon,
    BellIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ turnToHidden }) => {

    const [isActive, setIsActive] = useState(false)


    // Function to active navbar menu
    const handleMenuToggle = () => {
        setIsActive(prevState => !prevState)
    }

    return (
        <nav className="w-full bg-white h-20 flex items-center justify-between px-8">
            <div>
                <Bars3Icon onClick={turnToHidden} className="w-6 h-6 cursor-pointe lg:hidden" />
            </div>
            <div className='flex items-center text-sm gap-4'>
                <BellIcon className="w-6 h-6 cursor-pointer" />

                <span className='hidden lg:block'>Eduardo Quiñonez</span>

                <div className="relative inline-block text-left">
                    <div className={`px-2 py-1 rounded-md border ${isActive ? 'border-gray-400' : 'border-gray-200'}`}>
                        <div className='flex items-center cursor-pointer' onClick={handleMenuToggle}>
                            <img src="https://picsum.photos/seed/picsum/40/40"
                                className="rounded-full mr-3"
                                alt=""
                            />
                            <ChevronDownIcon className="w-3 h-3" />
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div className={`hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                        ${isActive ? 'd-block' : 'd-none'}`}
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            <Link to="/"
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                             disabled>
                                Perfil
                            </Link>
                            <Link to="/"
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            >
                                Ajustes
                            </Link>
                            <Link to="/"
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                            >
                                Salir
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;