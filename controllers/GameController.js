simon.controller("GameCtrl", function($scope, $timeout) {

  $scope.btn1 = "btn1";
  $scope.btn2 = "btn2";
  $scope.btn3 = "btn3";
  $scope.btn4 = "btn4";

  var user_pattern = [];
  var simon_pattern = [];
  $scope.fail = false;
  $scope.score = 0;

  $scope.start = function() {
    user_pattern = [];
    simon_pattern = [];
    $scope.fail = false;
    $scope.score = 0;
    addSimon();
    flashSimon();
  }

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
          simon_pattern = [];
          $scope.fail = true;
        }

      } else {
        if (i == user_pattern.length - 1) {
          $scope.score++;
          user_pattern = [];
          addSimon();
          flashSimon();
        }
      }
    }
  }

  function addSimon() {
    var btns = ["btn1", "btn2", "btn3", "btn4"];
    simon_pattern.push(btns[Math.floor(Math.random() * btns.length)]);
    console.log("simon: " + simon_pattern);
  }

  function  flashSimon() {
    for (var i in simon_pattern) {
      (function(i) {
        $timeout(function() {
          console.log("now on " + simon_pattern[i]);
          $scope[simon_pattern[i]] = simon_pattern[i] + "b";
          console.log("transformed to " + $scope[simon_pattern[i]]);
        }, 1000 * i);
      })(i);

      (function(i) {
        $timeout(function() {
          $scope[simon_pattern[i]] = simon_pattern[i];
          console.log("turned back to " + $scope[simon_pattern[i]]);
        }, 100 * (i + 5));
      })(i);
    }
  }

});
