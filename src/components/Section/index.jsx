import { Container } from "./styles";

export function Section({ title, children }) {
   return (
      <Container className="home-btn">
         <h2>{title}</h2>
         {children}
      </Container>
   );
}
