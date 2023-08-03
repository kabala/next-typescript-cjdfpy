import { createServer } from 'miragejs';
import { GET_DATA } from './apiEndpoints';

export default function mockServer() {
  return createServer({
    routes() {
      this.get(GET_DATA, () => ({
        movies: [
          { id: 1, name: 'Inception', year: 2010 },
          { id: 2, name: 'Interstellar', year: 2014 },
          { id: 3, name: 'Dunkirk', year: 2017 },
        ],
      }));
    },
  });
}
