import { FilmFavorite } from './film-favorite';

describe('FilmFavorite', () => {
  it('should create an instance', () => {
    expect(new FilmFavorite('', '', '', '')).toBeTruthy();
  });
});
