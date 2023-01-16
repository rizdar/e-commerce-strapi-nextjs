import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import { DetailStyle, ProductInfo, Quantity, Buy } from '../../styles/ProductDetaills';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from '../../lib/context';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export default function ProductDetails() {
  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

  //fetch slug
  const { query } = useRouter();

  //reset qty
  useEffect(() => {
    setQty(1);
  }, []);

  //fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { title, description, image } = data.products.data[0].attributes;

  //create a toast
  const notify = () => {
    toast.success(`${title} added to your cart`, { duration: 1500 });
  };

  return (
    <DetailStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(data.products.data[0].attributes, qty);
            notify();
          }}
        >
          Add To Cart
        </Buy>
      </ProductInfo>
    </DetailStyle>
  );
}
