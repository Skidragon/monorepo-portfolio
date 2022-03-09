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
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
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
const PaymentMethodFieldset = styled(Fieldset)<{ hasError: boolean }>`
  border: ${(props) =>
    props.hasError ? '2px solid var(--error, red)' : 'none'};
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
type PaymentMethod = 'cashOnDelivery' | 'eMoney';
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: PaymentMethod;
  eMoneyNumber?: number;
  eMoneyPin?: number;
};
const REQUIRED_MESSAGE = 'Required';
export function Checkout(props: CheckoutProps) {
  const { items, isEmpty, cartTotal } = useCart();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
  } = useForm<Inputs>({
    mode: 'onChange',
  });
  const paymentMethod = watch('paymentMethod');
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
          {process.env.NODE_ENV === 'development' ? (
            <DevTool control={control} placement="bottom-right" />
          ) : null}
          {/* set up the dev tool */}
          <CheckoutForm
            onSubmit={handleSubmit(async () => {
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
            })}
          >
            <CheckoutSection>
              <GoBackLink style={{ marginRight: 'auto' }} />
              <h1>Checkout</h1>
              <Fieldset>
                <Legend>Billing Details</Legend>

                <TextField
                  isRequired={true}
                  id="first-name"
                  label="First Name"
                  placeholder="Alexei"
                  hasError={Boolean(errors.firstName)}
                  errorMessage={errors.firstName?.message}
                  {...register('firstName', { required: REQUIRED_MESSAGE })}
                />
                <TextField
                  isRequired={true}
                  id="last-name"
                  label="Last Name"
                  placeholder="Ward"
                  hasError={Boolean(errors.lastName)}
                  errorMessage={errors.lastName?.message}
                  {...register('lastName', { required: REQUIRED_MESSAGE })}
                />
                <TextField
                  isRequired={true}
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="alexei@email.com"
                  hasError={Boolean(errors.email)}
                  errorMessage={errors.email?.message}
                  {...register('email', { required: REQUIRED_MESSAGE })}
                />
                <TextField
                  isRequired={true}
                  id="phone-number"
                  label="Phone Number"
                  placeholder="+1 202-555-0316"
                  hasError={Boolean(errors.phoneNumber)}
                  errorMessage={errors.phoneNumber?.message}
                  {...register('phoneNumber', { required: REQUIRED_MESSAGE })}
                />
              </Fieldset>
              <Fieldset>
                <Legend>Shipping Info</Legend>
                <TextField
                  isRequired={true}
                  id="your-address"
                  label="Your Address"
                  placeholder="1137 Williams Avenue"
                  hasError={Boolean(errors.address)}
                  errorMessage={errors.address?.message}
                  {...register('address', { required: REQUIRED_MESSAGE })}
                />
                <TextField
                  isRequired={true}
                  id="zip-code"
                  label="Zip Code"
                  placeholder="10001"
                  hasError={Boolean(errors.zipCode)}
                  errorMessage={errors.zipCode?.message}
                  {...register('zipCode', { required: REQUIRED_MESSAGE })}
                />
                <TextField
                  isRequired={true}
                  id="city"
                  label="City"
                  placeholder="New York"
                  hasError={Boolean(errors.city)}
                  errorMessage={errors.city?.message}
                  {...register('city', { required: REQUIRED_MESSAGE })}
                />
                <TextField
                  isRequired={true}
                  id="country"
                  label="Country"
                  placeholder="United States"
                  hasError={Boolean(errors.country)}
                  errorMessage={errors.country?.message}
                  {...register('country', { required: REQUIRED_MESSAGE })}
                />
              </Fieldset>
              <Fieldset>
                <Legend>Payment Details</Legend>
                <PaymentMethodFieldset
                  hasError={Boolean(errors.paymentMethod)}
                  id="payment-method"
                >
                  <legend>Payment Method*</legend>
                  <RadioField
                    label="e-Money"
                    id="e-money"
                    name="payment-method"
                    value={'eMoney'}
                    {...register('paymentMethod', {
                      required: REQUIRED_MESSAGE,
                    })}
                  />
                  <RadioField
                    label="Cash on Delivery"
                    id="cash-on-delivery"
                    name="payment-method"
                    value="cash"
                    {...register('paymentMethod', {
                      required: REQUIRED_MESSAGE,
                    })}
                  />
                </PaymentMethodFieldset>
                {paymentMethod === 'eMoney' ? (
                  <>
                    <TextField
                      isRequired={true}
                      id="e-money-number"
                      label="e-Money Number"
                      placeholder="238521993"
                      hasError={Boolean(errors.eMoneyNumber)}
                      errorMessage={errors.eMoneyNumber?.message}
                      {...register('eMoneyNumber', {
                        required: REQUIRED_MESSAGE,
                      })}
                    />
                    <TextField
                      isRequired={true}
                      id="e-money-pin"
                      label="e-Money PIN"
                      placeholder="6891"
                      hasError={Boolean(errors.eMoneyPin)}
                      errorMessage={errors.eMoneyPin?.message}
                      {...register('eMoneyPin', { required: REQUIRED_MESSAGE })}
                    />
                  </>
                ) : null}
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
              <PayButton type="submit" isSubmitting={isSubmitting}>
                {isSubmitting ? 'Processing Order' : 'Continue & Pay'}
              </PayButton>
            </SummarySection>
          </CheckoutForm>
        </main>
      )}
      <Footer categories={props.categories} />
    </StyledCheckout>
  );
}

export default Checkout;
