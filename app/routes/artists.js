import Route from '@ember/routing/route';

export default class ArtistsRoute extends Route {
  async model() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return data;
  }
  //   afterModel;
}
