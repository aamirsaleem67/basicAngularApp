angular.module("app",[]);

function ctrl($scope){
  $scope.rows = ['Paul','John','Lucie'];
  $scope.fatherRows=['Nagin','wilsson','Fighter'];
  $scope.ageRows=[22,23,24];
  $scope.temp = false;
  
  $scope.addRow = function(){
    if($scope.addName.length < 1  && $scope.fatherName.length < 1){
        window.alert("Please enter both fields.");
    }  
    $scope.temp = false;
    $scope.addName="";
    $scope.fatherName= "";
    $scope.age=""
  };
  
  $scope.deleteRow = function(row){
    $scope.rows.splice($scope.rows.indexOf(row),1);
  };
  
  $scope.plural = function (tab){
    return tab.length > 1 ? 's': ''; 
  };
  
  $scope.addTemp = function(){
    if($scope.temp){
          $scope.rows.pop();
           $scope.fatherRows.pop();
           $scope.ageRows.pop();

    } 
    else if($scope.addName && $scope.fatherName && $scope.age) $scope.temp = true;
    
    if($scope.addName && $scope.fatherName && $scope.age){

        $scope.rows.push($scope.addName);
        $scope.fatherRows.push($scope.fatherName);
        $scope.ageRows.push($scope.age);
    } 
    else $scope.temp = false;
  };
  
  $scope.isTemp = function(i){
    return i==$scope.rows.length-1 && $scope.temp;
  };
  
}

angular.module('app')
.controller('ctrl',ctrl);