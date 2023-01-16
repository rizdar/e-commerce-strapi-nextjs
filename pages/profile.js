import { useRouter } from 'next/router';
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

export default function Profile({ user, orders }) {
  const route = useRouter();
  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders.map((order) => (
            <Order>
              <h1>Order Number : {order.id}</h1>
              <h2>Amount : {formatMoney(order.amount)}</h2>
              <h2>Receipt Email : {user.email}</h2>
            </Order>
          ))}
        </div>
        <Logout onClick={() => route.push('/api/auth/logout')}>Logout</Logout>
      </div>
    )
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return {
      props: { orders: paymentIntents.data },
    };
  },
});

const Order = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logout = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  background: var(--primary);
  color: #fff;
`;
