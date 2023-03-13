
import { useCallback, useEffect, useState } from 'react';
import {CharacterContainer, Container } from './styles';
import {Image ,Card,Row,Col} from 'react-bootstrap'

import { backend } from '../../services/backend';
import { Loading } from '../../components/Loading';

interface User {
    _id: string;
    name: string;
    email: string;
    avatar: string;
  }
export default function ListaVisitasPage() {
    
    const [visitas, setVisitas] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
      const getVisitas = useCallback(async () => {
        try{
            const response = await backend.get('/')
            console.log(response.data)
        setVisitas(response.data)
        }catch{
        }finally{
            setIsLoading(false);
        }
        },[])

useEffect(() => {
        getVisitas();
      }, [getVisitas])

return(
    <Container> 
         <div className="title">
        <h1>
        Visitas
        </h1>
      </div>
        <CharacterContainer>
        {isLoading ? (
        <div className="loading">
          <Loading />
          <span>Carregando dados...</span>
        </div>
      ) :  (
     <div className="character-data-others-data">
                      <ul>
                        {visitas.map((visita) => (
                          <li key={visita._id}  style={{margin: ' 1rem 0'}}>
                            <Card className="character-data-others-data">
                           <Row >
      <Col sm={3}>
          <Image src={visita.avatar} className="rounded-full"  roundedCircle={true} style={{margin: '1rem'}} />
          </Col >
          <Col style={{margin: ' 1rem 0'}}>
          <h1 style={{fontSize: '2rem'}}>
            {visita.name}
          </h1>
          <h1 style={{fontSize: '2rem'}} >
            {visita.email}
          </h1>
          </Col>
          
          </Row>
          </Card>
                          </li>
                        ))}
                      </ul>
                   
                  </div>
      )}
                  </CharacterContainer>
    </Container>
);
}