simon.controller("GameCtrl", function($scope, $timeout) {

  $scope.btn1 = "btn1";
  $scope.btn2 = "btn2";
  $scope.btn3 = "btn3";
  $scope.btn4 = "btn4";

  var user_pattern = [];
  var simon_pattern = [];
  $scope.fail = false;
  $scope.score = 0;
  $scope.starting = true;
  $scope.active = true;
  $scope.btnActive = "btn-active";


  $scope.start = function() {
    user_pattern = [];
    simon_pattern = [];
    $scope.fail = false;
    $scope.starting = false;
    $scope.score = 0;
    addSimon();
    flashSimon();
  };

  $scope.click = function(btn) {
    user_pattern.push(btn);
    user_pattern.length === simon_pattern.length ? match() : "";
  };

  function match() {
    for (var i in user_pattern) {
      if (user_pattern[i] != simon_pattern[i]) {
        if (i == user_pattern.length - 1) {
          user_pattern = [];
          simon_pattern = [];
          $scope.fail = true;
          $scope.starting = true;
        }
      } else if (i == user_pattern.length - 1) {
        $scope.score++;
        user_pattern = [];
        addSimon();
        deactivateBtns();
        flashSimon();
        activateBtns();
      }
    }
  }

  function deactivateBtns() {
    $scope.active = false;
    // can add deactive button click css (xxx) later
    $scope.btnActive = "xxx";
  }

  function activateBtns() {
    (function() {
      $timeout(function() {
        $scope.active = true;
        $scope.btnActive = "btn-active";
      }, $scope.speed * 100 * (simon_pattern.length + 1));
    })();
  }

  function addSimon() {
    var btns = ["btn1", "btn2", "btn3", "btn4"];
    simon_pattern.push(btns[Math.floor(Math.random() * btns.length)]);
  }

  function  flashSimon() {
    (function() {
      $timeout(function() {
        for (var i in simon_pattern) {
          (function(i) {
            $timeout(function() {
              $scope[simon_pattern[i]] = simon_pattern[i] + "b";
            }, $scope.speed * 100 * i);
          })(i);

          (function(i) {
            $timeout(function() {
              $scope[simon_pattern[i]] = simon_pattern[i];
            }, $scope.speed * 10 * (i + 5));
          })(i);
        }
      }, $scope.speed * 100);
    })();
  }

});
