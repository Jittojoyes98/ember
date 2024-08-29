import { module, test } from 'qunit';
import { setupTest } from 'ember-start/tests/helpers';

module('Unit | Route | artists', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:artists');
    assert.ok(route);
  });
});
