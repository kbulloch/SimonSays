simon.controller("GameCtrl", function($scope, $timeout) {

  $scope.btn1 = "btn1";
  $scope.btn2 = "btn2";
  $scope.btn3 = "btn3";
  $scope.btn4 = "btn4";

  var user_pattern = [];
  var simon_pattern = ["btn1", "btn2", "btn4"];

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
        }, 100 * (i + 1));
      })(i);
    }

/*
0000
1000
2000

1000
2000
3000
*/




    // for (var i in simon_pattern) {
    //   console.log("now on " + simon_pattern[i]);
    //   $scope[simon_pattern[i]] = simon_pattern[i] + "b";
    //   console.log("transformed to " + $scope[simon_pattern[i]]);
    //   (function(i) {
    //     $timeout(function() {
    //       $scope[simon_pattern[i]] = simon_pattern[i];
    //       console.log("turned back to " + $scope[simon_pattern[i]]);
    //     }, 1000 * i);
    //   })(i);
    //
    // }
  }


  // function addSimon() {
  //   var btns = ["btn1", "btn2", "btn3", "btn4"];
  //   simon_pattern.push(btns[Math.floor(Math.random() * btns.length)]);
  //   console.log("simon: " + simon_pattern);
  //
  //   var sequence = simon_pattern;
  //   for (var i in simon_pattern) {
  //     console.log("now on " + simon_pattern[i]);
  //     $scope[simon_pattern[i]] = simon_pattern[i] + "b";
  //     console.log("transformed to " + $scope[simon_pattern[i]]);
  //
  //     $timeout(function() {
  //       $scope[sequence[0]] = sequence[0];
  //       console.log("turned back to " + $scope[sequence[0]]);
  //       sequence.shift();
  //     }, 1000);
  //   }
  // }

});
