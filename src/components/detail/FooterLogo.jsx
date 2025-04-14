import React from 'react';
import styled from 'styled-components';
import logo from '@/assets/img/detail/logo.png'; // 确保路径正确

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px; /* 32vw ≈ 120px (基于375px设计稿) */
  img {
    width: 123px; /* 32.8vw ≈ 123px */
  }
  .text {
    margin-top: 12px; /* 3.2vw ≈ 12px */
    font-size: 12px; /* 3.2vw ≈ 12px */
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