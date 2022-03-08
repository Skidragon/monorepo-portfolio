import { GoBackLink } from '@sd/audiophile/feature';
import { Button, Price, RadioField, TextField } from '@sd/audiophile/ui';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CheckoutProps {}

const StyledCheckout = styled.div``;
const CheckoutSection = styled.section`
  background: white;
  padding: 2em;
  max-width: 80ch;
  width: 100%;
`;
const CheckoutForm = styled.form``;
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
`;
const SHIPPING_PRICE_IN_CENTS = 5000;
const VAT_IN_CENTS = 107900;
export function Checkout(props: CheckoutProps) {
  const { items, cartTotal } = useCart();
  return (
    <StyledCheckout>
      <main>
        <CheckoutSection>
          <GoBackLink style={{ marginRight: 'auto' }} />
          <h1>Checkout</h1>
          <CheckoutForm>
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
          </CheckoutForm>
        </CheckoutSection>
        <SummarySection>
          <h2>Summary</h2>
          <div>
            <ul>
              {items.map((item) => {
                return (
                  <li key={item.id}>
                    <div>
                      <Image
                        height={64}
                        width={64}
                        src={item.image.url}
                        alt=""
                      />
                      <div>{item.name}</div>
                      <Price cents={item.price} />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div>
              Total
              <Price cents={cartTotal} />
            </div>
            <div>
              Shipping
              <Price cents={SHIPPING_PRICE_IN_CENTS} />
            </div>
          </div>
          <div>
            VAT (Included)
            <Price cents={VAT_IN_CENTS} />
          </div>
          <div>
            Grand Total
            <Price cents={cartTotal + SHIPPING_PRICE_IN_CENTS} />
          </div>
          <Button type="submit">Continue & Pay</Button>
        </SummarySection>
      </main>
    </StyledCheckout>
  );
}

export default Checkout;
