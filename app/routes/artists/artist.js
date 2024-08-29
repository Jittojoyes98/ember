import Route from '@ember/routing/route';

export default class ArtistsArtistRoute extends Route {
  async model() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return data;
  }
}
