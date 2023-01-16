import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavItems, NavStyles } from '../styles/NavStyles';
import Cart from './Cart';
import { useStateContext } from '../lib/context';
import User from './User';
import { useUser } from '@auth0/nextjs-auth0/client';

const { AnimatePresence, motion } = require('framer-motion');

export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();

  return (
    <NavStyles>
      <Link href={'/'}>Merch</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}
