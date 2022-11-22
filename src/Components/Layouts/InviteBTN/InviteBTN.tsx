import React from "react";
import styled from "styled-components";

const InvBTN = styled.button`
  padding: 1rem 3rem;
  border-radius: 5rem;
  text-transform: capitalize;
  background: ${({ theme }) => theme.utils["primary-gradient"]};
  box-shadow: ${({ theme }) => theme.utils["shadow-sm"]};
  color: ${({ theme }) => theme.color["light-gray"]};
  font-weight: ${({ theme }) => theme.weight.regullar};
`;

const InviteBTN: React.FC = () => {
  return <InvBTN data-invite-btn>request invite</InvBTN>;
};

export default InviteBTN;
