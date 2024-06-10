import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 100%;
   max-width: 1980px;
   height: 100vh;

   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas:
      "header"
      "content";

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   margin: 0 auto;

   .home-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .home-btn h2 {
      margin: 0;
      padding: 0;
   }

   .home-btn button {
      width: 210px;
      margin-top: 0;
   }
`;

export const Content = styled.div`
   grid-area: content;
   padding: 30px 100px;
   overflow-y: auto;
`;
