var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
/*
  var togglec = function() {
    console.log("calling toogle from contact");
    $scope.logstyle = {
      "display" : "block"
  }
  $scope.contactstyle = {
    "display" : "node"
  }
  };

*/
var refresh = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("getting contact from refresh");
    $scope.contactlist = response;
    $scope.contact = "";
    $scope.contactstyle = {
      "display" : "none"
    }
    $scope.logstyle = {
      "display" : "block"
    }
  });
};



refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  });
};

//refresh();



$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contactlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/contactlist/' + id).success(function(response) {
    $scope.contact = response;
  });
};  




$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
}


//cc

var refresh2 = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("getting contact from refresh2");
    $scope.contactlist = response;
    $scope.contact = "";
    $scope.logstyle = {
      "display" : "none"
    };
    $scope.myval=true;
    console.log("style changed from refresh2");
    $scope.contactstyle = {
      "display" : "block"
    };
    console.log("style changed from refresh2");
  });
};

  $scope.adduser = function() {
    console.log($scope.users);
    $http.post('/register', $scope.users).success(function(response) {
      console.log(response);
      //refresh2();
    });
  };

  


  $scope.login = function() {
    $http.post('/login', $scope.user).success(function(response) {
    
    var username=$scope.user.username; 
    $scope.contactstyle = {
      "display" : "block"
    }
    $scope.myval=true;
    refresh2();
    console.log("logged successfully"+username);  
    });
  
    
  };

//cc



}]);




/*
myApp.controller('logCtrl', ['$scope', '$http', function($scope, $http) {

  
var refresh2 = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("getting contact from login controll");
    $scope.contactlist = response;
    $scope.contact = "";
    $scope.contactstyle = {
      "display" : "block !important"
    }
  });
};

  $scope.adduser = function() {
    console.log($scope.users);
    $http.post('/register', $scope.users).success(function(response) {
      console.log(response);
      refresh2();
    });
  };

  var togglel = function() {
    console.log("calling toogle from login" );
    $scope.logstyle = {
      "display" : "none"
  }
  $scope.contactstyle = {
    "display" : "block"
  }
  };

$scope.login = function() {
  $http.post('/login', $scope.user).success(function(response) {
  
  var username=$scope.user.username;
  console.log("logged successfully"+username);   
  $scope.logstyle = {
    "display" : "none"
  }
  togglel(); 
  refresh2();
  });

  
};

}]);

*/



