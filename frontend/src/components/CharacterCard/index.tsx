
import { Link } from 'react-router-dom';
import { Container } from './styles';



interface ICardProps {
  imageUrl: string;
  name: string;
  id: string;
  type: 'characters' | 'films' | 'starships' | 'vehicles' | 'planets';

}

export function Card({
  type,
  imageUrl,
  name,
  id 
}: ICardProps) {
  return (
    <Container>
      
      <img src={imageUrl} alt={`Imagem de ${name}`} />

      <div className="card-name">
        <Link to={`/${type}/${id}`} >
          <span>{name}</span>
        </Link>
      </div>
    </Container>
  );
}
