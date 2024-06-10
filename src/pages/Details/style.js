import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas:
      "header"
      "content";

   > main {
      grid-area: content;
      overflow-y: scroll;
      padding: 64px 0;
   }

   > main div a {
      display: flex;
      align-items: center;
      gap: 7px;

      color: ${({ theme }) => theme.COLORS.PINK};
   }
`;

export const Links = styled.ul`
   list-style: none;

   > li {
      margin-top: 12px;

      a {
         color: ${({ theme }) => theme.COLORS.WHITE};
      }
   }
`;

export const Content = styled.div`
   max-width: 1980px;
   margin: 0 auto;
   padding: 0 100px;
   display: flex;
   flex-direction: column;

   > button:first-child {
      align-self: start;
   }

   > h1 {
      font-size: 36px;
      font-weight: 500;
      padding-top: 30px;
   }

   > p {
      font-size: 16px;
      margin-top: 16px;
      text-align: justify;
   }
`;
