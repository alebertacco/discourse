import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Admin - Users Badges", function (needs) {
  needs.authenticatedUser();

  test("lists badges", async (assert) => {
    await visit("/admin/users/1/eviltrout/badges");

    assert.ok(exists(`span[data-badge-name="Badge 8"]`));
  });
});
