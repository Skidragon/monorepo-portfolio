import {
  Footer,
  GoBackLink,
  Navbar,
  ShopCategories,
} from '@sd/audiophile/feature';
import { Button, Price, RadioField, TextField } from '@sd/audiophile/ui';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import axios from 'axios';
import { CategoriesQuery } from '@sd/audiophile/types';
/* eslint-disable-next-line */
export interface CheckoutProps {
  categories: CategoriesQuery['categories'];
}

export async function getStaticProps() {
  const { data } = await axios.get<CategoriesQuery>(
    `${process.env.API_URL}/categories`
  );
  return {
    props: {
      categories: data.categories,
    },
  };
}
const StyledCheckout = styled.div``;
const CheckoutSection = styled.section`
  background: white;
  padding: 2em;
  max-width: 80ch;
  width: 100%;
`;
const CheckoutForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`;
const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  border: none;
  padding: 2rem 0;
`;
const Legend = styled.legend`
  color: orange;
  text-transform: uppercase;
  font-weight: 700;
`;
const SummarySection = styled.section`
  background: white;
  padding: 2em;
  max-width: 80ch;
  width: 100%;
  & > * + * {
    margin-top: 2rem;
  }
`;
const ProductList = styled.ul`
  display: grid;
  grid-gap: 1rem;
`;
const ProductLine = styled.div`
  display: flex;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 1rem;
`;
const Quantity = styled.div``;
const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PayButton = styled(Button)`
  width: 100%;
`;
const SHIPPING_PRICE_IN_CENTS = 5000;
const VAT_IN_CENTS = 107900;

export function Checkout(props: CheckoutProps) {
  const { items, isEmpty, cartTotal } = useCart();

  return (
    <StyledCheckout>
      <Navbar categories={props.categories} />
      {isEmpty ? (
        <CheckoutForm>
          <h1 style={{ marginTop: '1rem' }}>
            It seems like your cart is empty.
          </h1>
          <ShopCategories data={props.categories} />
        </CheckoutForm>
      ) : (
        <main>
          <CheckoutForm
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const { data } = await axios.post(
                  `${process.env.NEXT_PUBLIC_API_URL}/order`
                );
                alert('Order Succesful! (Placeholder)');
                console.log(data);
              } catch (err) {
                alert('Order Failed! (Placeholder)');
                console.log(err);
              }
            }}
          >
            <CheckoutSection>
              <GoBackLink style={{ marginRight: 'auto' }} />
              <h1>Checkout</h1>
              <Fieldset>
                <Legend>Billing Details</Legend>

                <TextField
                  id="name"
                  label="Name"
                  placeholder="Alexei Ward"
                  hasError={false}
                  errorMessage={'Required'}
                />
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="alexei@email.com"
                  hasError={false}
                  errorMessage={'Required'}
                />
                <TextField
                  id="phone-number"
                  label="Phone Number"
                  placeholder="+1 202-555-0316"
                  hasError={false}
                  errorMessage={'Required'}
                />
              </Fieldset>
              <Fieldset>
                <Legend>Shipping Info</Legend>
                <TextField
                  id="your-address"
                  label="Your Address"
                  placeholder="1137 Williams Avenue"
                  hasError={false}
                  errorMessage={'Required'}
                />
                <TextField
                  id="zip-code"
                  label="Zip Code"
                  placeholder="10001"
                  hasError={false}
                  errorMessage={'Required'}
                />
                <TextField
                  id="city"
                  label="City"
                  placeholder="New York"
                  hasError={false}
                  errorMessage={'Required'}
                />
                <TextField
                  id="country"
                  label="Country"
                  placeholder="United States"
                  hasError={false}
                  errorMessage={'Required'}
                />
              </Fieldset>
              <Fieldset>
                <Legend>Payment Details</Legend>
                <Fieldset id="payment-method">
                  <legend>Payment Method</legend>
                  <RadioField
                    label="e-Money"
                    id="e-money"
                    name="payment-method"
                  />
                  <RadioField
                    label="Cash on Delivery"
                    id="cash-on-delivery"
                    name="payment-method"
                  />
                </Fieldset>
                <TextField
                  id="e-money-number"
                  label="e-Money Number"
                  placeholder="238521993"
                  hasError={false}
                  errorMessage={'Required'}
                />
                <TextField
                  id="e-money-pin"
                  label="e-Money PIN"
                  placeholder="6891"
                  hasError={false}
                  errorMessage={'Required'}
                />
              </Fieldset>
            </CheckoutSection>
            <SummarySection>
              <h2>Summary</h2>
              <div>
                <ProductList>
                  {items.map((item) => {
                    return (
                      <li key={item.id}>
                        <ProductLine>
                          <Image
                            height={64}
                            width={64}
                            src={item.image.url}
                            alt=""
                          />
                          <ProductInfo>
                            <div>
                              <div>{item.name}</div>
                              <Price cents={item.price} />
                            </div>
                            <Quantity>x{item.quantity}</Quantity>
                          </ProductInfo>
                        </ProductLine>
                      </li>
                    );
                  })}
                </ProductList>
              </div>
              <ul>
                <PriceLine>
                  Total
                  <Price cents={cartTotal} />
                </PriceLine>
                <PriceLine>
                  Shipping
                  <Price cents={SHIPPING_PRICE_IN_CENTS} />
                </PriceLine>
                <PriceLine>
                  VAT (Included)
                  <Price cents={VAT_IN_CENTS} />
                </PriceLine>
                <PriceLine>
                  Grand Total
                  <Price cents={cartTotal + SHIPPING_PRICE_IN_CENTS} />
                </PriceLine>
              </ul>
              <PayButton type="submit">Continue & Pay</PayButton>
            </SummarySection>
          </CheckoutForm>
        </main>
      )}
      <Footer categories={props.categories} />
    </StyledCheckout>
  );
}

export default Checkout;
