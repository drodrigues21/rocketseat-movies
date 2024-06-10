import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export default function New() {
   return (
      <Container>
         <Header />

         <main>
            <Form>
               <Link to="/">
                  <FiArrowLeft />
                  voltar
               </Link>
               <header>
                  <h1>Novo Filme</h1>
               </header>

               <div className="titulo-nota">
                  <Input placeholder="Título" />
                  <Input placeholder="Sua nota (de 0 a 5)" />
               </div>

               <Textarea placeholder="Observacoes" />

               <Section title="Marcadores">
                  <div className="tags">
                     <NoteItem value="Ficção Científica" />
                     <NoteItem isNew placeholder="Novo marcador" />
                  </div>
               </Section>

               <div className="romeve-add-btn">
                  <Button title="Excluir filme" />
                  <Button title="Salvar" />
               </div>
            </Form>
         </main>
      </Container>
   );
}
