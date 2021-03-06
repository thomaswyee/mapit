$(() => {
  const $main = $("#main-content");

  window.views_manager = {};

  window.views_manager.show = function (item) {
    $logInForm.detach();
    $signUpForm.detach();
    $mapList.detach();
    $mapForm.detach();
    $newMarkerForm.detach();
    $modifyMarkerForm.detach();

    switch (item) {
      case "logIn":
        $mainMap.detach();
        $logInForm.appendTo($main);
        break;
      case "signUp":
        $mainMap.detach();
        $signUpForm.appendTo($main);
        break;
      case "mainMap":
        //main map will have general list with the map
        $mainMap.appendTo($main);
        $mapList.appendTo($main);
        break;
      case "mapList":
        $mapList.appendTo($main);
        break;
      case "newMarkerForm":
        $newMarkerForm.appendTo($main);
        break;
      case "updateMarkerForm":
        $modifyMarkerForm.appendTo($main);
        break;
      case "mapForm":
        $mapForm.appendTo($main);
        break;
      case "error": {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo("body");
        $mainMap.detach();
        setTimeout(() => {
          $error.remove();
          views_manager.show("mainMap");
        }, 2000);
        break;
      }
    }
  };
});
