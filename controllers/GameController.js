simon.controller("GameCtrl", function($scope, $timeout) {

  $scope.btn1 = "btn1";
  $scope.btn2 = "btn2";
  $scope.btn3 = "btn3";
  $scope.btn4 = "btn4";

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
    for (var i in simon_pattern) {
      $scope[simon_pattern[i]] = simon_pattern[i] + "b";
      $timeout(function() {
        console.log(simon_pattern[i].substring(0, simon_pattern[i].length));
        $scope[simon_pattern[i]] = simon_pattern[i].substring(0, simon_pattern[i].length);
      }, 1000);
    }

  }

});
