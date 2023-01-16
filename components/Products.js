import { ProductStyles } from '../styles/ProductStyle';
import Link from 'next/link';

export default function Products({ product }) {
  //Extract the info from props
  const { title, price, image, slug } = product.attributes;

  return (
    <ProductStyles>
      <Link href={`/products/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt={title} />
        </div>
      </Link>
      <Link href={`/products/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <h3>{price}</h3>
    </ProductStyles>
  );
}
