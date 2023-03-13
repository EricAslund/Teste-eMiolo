import React, { useCallback, useEffect, useState } from 'react';

import { Card } from '../../components/CharacterCard';

import { api } from '../../services/api';

import { Container } from './styles';
import { Loading } from '../../components/Loading';
import { getUrlId } from '../../utils/getUrlId';
import { Film } from '../../types/Film.types';

export default function Films() {
  const [films, setFilms] = useState<Film[]>([]);
 
 
  const [isLoading, setIsLoading] = useState<boolean>(true);


  const getData = useCallback(async () => {
    try {
      const response = await api.get('films/');

      const returnedData = await response.data;

      setFilms(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

 
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);


  return (
    <Container>
      <div className="title">
        <h1>
          Filmes -
          {' '}
          <span>Star Wars</span>
        </h1>
      </div>

      {isLoading ? (
        <div className="loading">
          <Loading />
          <span>Carregando dados...</span>
        </div>
      ) :(
        <div className="cards">
          {films.map((film) => (
            <Card
              imageUrl={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                film.url,
              )}.jpg`}
              name={film.title}
              key={film.title}
              id={getUrlId(film.url)}
              type="films"
              
            />
          ))}
        </div>
      ) }
    </Container>
  );
}
