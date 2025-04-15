import React from 'react';
import styled from 'styled-components';
import logo from '@/assets/img/detail/logo.png';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  img {
    width: 123px;
  }
  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
`;

const FooterLogo = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="弘源旅途logo" />
      <div className="text">弘源旅途, 永无止境!</div>
    </FooterContainer>
  );
};

export default FooterLogo;