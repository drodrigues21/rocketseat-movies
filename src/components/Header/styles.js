import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
   grid-area: header;

   width: 100%;
   max-width: 1980px;
   height: 116px;

   border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 80px;
   padding: 0 100px;
   margin: 0 auto;
`;

export const Brand = styled.div`
   display: flex;
   align-items: center;

   > h1 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
   }
`;

export const Profile = styled(Link)`
   width: 320px;
   display: flex;
   align-items: center;

   > img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
   }
   > div {
      display: flex;
      flex-direction: column;
      margin-right: 16px;
      line-height: 24px;

      span {
         font-size: 14px;
         color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      strong {
         font-size: 18px;
         color: ${({ theme }) => theme.COLORS.WHITE};
      }
   }
`;

export const Logout = styled.button`
   font-size: 16px;
   color: ${({ theme }) => theme.COLORS.GRAY_100};
   border: none;
   background: none;
   text-align: end;
`;
