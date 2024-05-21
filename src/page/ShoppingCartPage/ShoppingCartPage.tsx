import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { NavigationBar, PageTitle, FooterButton, ErrorFallback } from '../../components/common';
import { CartContainer } from '../../components/shoppingCart';
import * as Styled from './ShoppingCartPage.style';

import { ENDPOINT } from '../../routes/router.constants';

import { checkedCartItemsState, fetchErrorState } from '../../recoil/atoms';

export default function ShoppingCartPage() {
  const navigate = useNavigate();

  const totalCheckedCartItems = useRecoilValue(checkedCartItemsState);
  const fetchError = useRecoilValue(fetchErrorState);

  const isConfirmButtonDisabled = fetchError !== null || totalCheckedCartItems.length === 0;

  const handleClickConfirmButton = () => {
    navigate(ENDPOINT.confirmOrder, {
      state: {
        isFromCartPage: true,
      },
    });
  };

  return (
    <>
      <NavigationBar>SHOP</NavigationBar>
      <Styled.CartContent>
        <PageTitle title="장바구니" />
        <ErrorBoundary FallbackComponent={({ error }) => <ErrorFallback error={error} />}>
          <Suspense fallback={<div>로딩 중입니다...</div>}>
            <CartContainer />
          </Suspense>
        </ErrorBoundary>
      </Styled.CartContent>
      <FooterButton
        type="button"
        buttonText="주문 확인"
        disabled={isConfirmButtonDisabled}
        onClick={handleClickConfirmButton}
      />
    </>
  );
}
