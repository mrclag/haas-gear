import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 38px;
  height: 38px;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 10px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
