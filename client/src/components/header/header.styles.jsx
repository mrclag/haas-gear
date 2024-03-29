import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 300px;
  padding: 0px;

  @media screen and (max-width: 800px) {
    width: 40%;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.5rem;

  &:last-of-type {
    margin-right: 30px;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 5px;
    font-size: 1rem;

    &:last-of-type {
      margin-right: unset;
    }
  }
`;
