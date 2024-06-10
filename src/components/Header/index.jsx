import { FiSearch } from "react-icons/fi";
import { Container, Profile, Logout, Brand } from "./styles";
import { Input } from "../Input";

export function Header() {
   return (
      <Container>
         <Brand>
            <h1>RocketMovies</h1>
         </Brand>

         <Input icon={FiSearch} placeholder="Buscar filme" />

         <Profile to="/profile">
            <div>
               <strong>David Rodrigues</strong>
               <Logout>sair</Logout>
            </div>
            <img
               src="https://github.com/drodrigues21.png"
               alt="Foto do usuario"
            />
         </Profile>
      </Container>
   );
}
