import { useState } from 'react';
import { AiOutlineMenuUnfold,AiFillCloseCircle } from 'react-icons/ai';

const Navbar = () => {

    const routes = [
        { id: 1, route: '/home', name: 'Home' },
        { id: 2, route: '/about', name: 'About' },
        { id: 3, route: '/services', name: 'Services' },
        { id: 4, route: '/products', name: 'Products' },
        { id: 5, route: '/contact', name: 'Contact' },
      ];

      const [open, setOpen] = useState(false)


    return (
        <nav className='p-10' >
            <div onClick={()=>setOpen(!open)}>
        {
            open === true? <AiFillCloseCircle className='text-2xl'></AiFillCloseCircle>
            : <AiOutlineMenuUnfold className='text-2xl md:hidden'></AiOutlineMenuUnfold>
        }
            
                
            </div>
             
           <ul className={`md:flex gap-5 p-5 shadow-xl md:shadow-none md:static
           ${open? 'top-16': '-left-[500px]'} absolute 
           
           `}>
           {
                routes.map(route => <li className='hover:bg-gray-300 p-2' key={route.id}> <a href={route.route}>{route.name}</a> </li>)
            }
           </ul>
           
        </nav>
    );
};

export default Navbar;