$(() => {
  const $logInForm = $(`
  <form class="form-signin">
    <div class="text-center mb-4">
      <img class="mb-4" src="../images/APP-LOGO.png" alt="" width="150"
        height="150">
      <h1 class="h3 mb-3 font-weight-normal">Map It!</h1>
    </div>

    <div class="form-label-group">
      <input type="email" id="inputEmail" name="email" class="form-control" placeholder="Email address" required>
      <label for="inputEmail">Email address</label>
    </div>

    <div class="form-label-group">
      <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
      <label for="inputPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-light" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-center">&copy; 2021</p>
  </form>
  `);

  window.$logInForm = $logInForm;

  $logInForm.on("submit", function (event) {
    event.preventDefault();

    const data = $(this).serialize();
    logIn(data)
      .then((json) => {
        if (!json.user) {
          views_manager.show("error", "Failed to login");
          return;
        }
        header.update(json.user);
      })
      .then(getMaps)
      .then((maps) => {
        mapLists.appendMaps(maps);
        views_manager.show("mainMap");
      });
  });
});
