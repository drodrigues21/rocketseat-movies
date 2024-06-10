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
      overflow-y: auto;
      padding: 0 100px;
   }

   .tags {
      display: flex;
      /* align-items: center; */
      gap: 20px;

      background-color: #0d0c0f;
      padding: 15px 15px 10px;
      border-radius: 10px;
   }

   form a {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-bottom: 25px;
   }
`;

export const Form = styled.form`
   max-width: 1980px;
   margin: 38px auto;

   > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 36px;

      a {
         font-size: 20px;
         color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
   }

   > section h2 {
      font-size: 20px;
      color: #999591;
      margin-bottom: 0;
   }

   > .titulo-nota {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 50px;
      margin-bottom: 20px;
   }

   > .romeve-add-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 50px;
      margin-bottom: 20px;
   }

   > .romeve-add-btn button:first-child {
      background-color: #0d0c0f;
      color: ${({ theme }) => theme.COLORS.PINK};
   }
`;
