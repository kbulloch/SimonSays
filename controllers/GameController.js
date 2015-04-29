simon.controller("GameCtrl", function($scope) {

  var user_pattern = [];
  var simon_pattern = ["btn1", "btn2"];

  $scope.click = function(btn) {
    user_pattern.push(btn);
    console.log(user_pattern);
    user_pattern.length === simon_pattern.length ? match() : "";
  };

  function match() {
    for (var i in user_pattern) {
      if (user_pattern[i] != simon_pattern[i]) {
        console.log("fail");
        console.log("i = " + i);
        console.log("upl = " + user_pattern.length);
        if (i == user_pattern.length - 1) {
          console.log("i am in you ;)");
          user_pattern = [];
        }

      } else {
        if (i == user_pattern.length - 1) {
          user_pattern = [];
          addSimon();
        }
      }
    }
  }

  function addSimon() {
    var btns = ["btn1", "btn2", "btn3", "btn4"];
    simon_pattern.push(btns[Math.floor(Math.random() * btns.length)]);
    console.log("simon: " + simon_pattern);
  }

});
