const angular=require('angular');
let app = angular.module('app');

app
.controller('HomeCtrl', function($scope, $state){
    console.log("HomeControl");
    $scope.addBookingDetails = function(){
        $state.go('booking')
    }
})



.controller('BookingCtrl', function($scope, $state, $http){
    $scope.user = {
        "billNumber" : "test",
        "consignorParty" : "test",
        "consignorGst" : "test",
        "consigneeParty" : "test",
        "consigneeGst" : "test",
        "location" : "",
        "weight" : "test",
        "cartoon" : "test",
        "rate" : "test",
        "otherCharge" : "test",
        "totalAmount" : "test",
    }
    $scope.saveBookingDetails = function(){
        console.log("user in front end");
        $http({
            url: "/api/getBooking",
            method: "POST",
            data: $scope.user,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data, status, headers, config, response){
            console.log("user from backend");
            console.log(response.data);
            $state.go('home');
        },function(data, status, headers, config){
            $state.go('home');
            console.log("error");
        })
    }
})