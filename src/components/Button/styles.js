import styled from "styled-components";

export const Container = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 5px;

   width: 100%;
   font-weight: 500;
   background-color: ${({ theme }) => theme.COLORS.PINK};
   color: ${({ theme }) => theme.COLORS.BRACHGROUND_800};

   height: 56px;
   border: 0;
   padding: 0 16px;
   margin-top: 16px;
   border-radius: 10px;

   &:disabled {
      opacity: 0.5;
   }
`;
