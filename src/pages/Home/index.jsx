import { FiPlus } from "react-icons/fi";
import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { Note } from "../../components/Note";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export default function Home() {
   return (
      <Container>
         <Header />

         <Content>
            <Section title="Meus filmes">
               <Link to="/new">
                  <Button title="Adicionar filme" icon={FiPlus} />
               </Link>
            </Section>
            <Link to="/details/:id">
               <Note
                  data={{
                     title: "Interestellar",
                     description:
                        "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
                     rating: "4",
                     tags: [
                        { id: "1", name: "Ficção Científica" },
                        { id: "2", name: "Drama" },
                        { id: "3", name: "Familia" },
                     ],
                  }}
               />
            </Link>
         </Content>
      </Container>
   );
}
