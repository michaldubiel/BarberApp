!function(){"use strict";function a(a,b){a.when("/",{templateUrl:"/Views/Activity/list.html",controller:"ActivitiesListController"}).when("/activities/add",{templateUrl:"/Views/Activity/add.html",controller:"ActivitiesAddController"}).when("/activities/edit/:id",{templateUrl:"/Views/Activity/edit.html",controller:"ActivitiesEditController"}).when("/activities/delete/:id",{templateUrl:"/Views/Activity/delete.html",controller:"ActivitiesDeleteController"}).when("/employees/list",{templateUrl:"/Views/Employee/list.html",controller:"EmployeesListController"}).when("/employees/add",{templateUrl:"/Views/Employee/add.html",controller:"EmployeesAddController"}).when("/employees/edit/:id",{templateUrl:"/Views/Employee/edit.html",controller:"EmployeesEditController"}).when("/employees/delete/:id",{templateUrl:"/Views/Employee/delete.html",controller:"EmployeesDeleteController"}).when("/employees/:id",{templateUrl:"/Views/Employee/details.html",controller:"EmployeesDetailsController"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}a.$inject=["$routeProvider","$locationProvider"],angular.module("barberApp",["ngRoute","ui.bootstrap","activitiesServices","employeesServices","sharedDatesServices"]).config(a)}(),function(){"use strict";function a(a,b){a.activities=b.query()}function b(a,b,c,d){a.activity=new c,a.time=null,a.employees=d.query(),console.log(a.employees),a.add=function(){console.log(a.activity),this.activity.Date.setHours(this.time.split(":")[0]),this.activity.Date.setMinutes(this.time.split(":")[0]),a.activity.$save(function(){b.path("/")})}}function c(a,b,c,d,e){a.activity=d.get({id:b.id},function(b){a.time=b.Date.split("T")[1].slice(0,5),a.activity.Date=b.Date.replace(/T.*/,""),a.activity.Date=Date.parse(a.activity.Date),a.activity.Date=new Date(a.activity.Date)}),a.employees=e.query(),a.edit=function(){console.log(this.activity.Date),this.activity.Date.setHours(this.time.split(":")[0]),this.activity.Date.setMinutes(this.time.split(":")[0]),console.log(a.activity),a.activity.$save(function(){c.path("/")})}}function d(a,b,c,d){a.activity=d.get({id:b.id}),a.remove=function(){a.activity.$remove({id:a.activity.Id},function(){c.path("/")})}}angular.module("barberApp").controller("ActivitiesListController",a).controller("ActivitiesAddController",b).controller("ActivitiesEditController",c).controller("ActivitiesDeleteController",d),a.$inject=["$scope","Activity"],b.$inject=["$scope","$location","Activity","Employee"],c.$inject=["$scope","$routeParams","$location","Activity","Employee"],d.$inject=["$scope","$routeParams","$location","Activity"]}(),function(){"use strict";function a(a){a.today=function(){a.dt=new Date.UTC},a.clear=function(){a.dt=null},a.disabled=function(a,b){return"day"===b&&(0===a.getDay()||6===a.getDay())},a.toggleMin=function(){a.minDate=a.minDate?null:new Date},a.toggleMin(),a.maxDate=new Date(2030,12,31),a.open=function(){a.popup.opened=!0},a.setDate=function(b,c,d){a.dt=new Date(b,c,d)},a.dateOptions={formatYear:"yy",startingDay:1},a.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],a.format=a.formats[0],a.altInputFormats=["M!/d!/yyyy"],a.popup={opened:!1}}angular.module("barberApp").controller("DatepickerController",a),a.$inject=["$scope"]}(),function(){"use strict";function a(a,b){a.employees=b.query(),console.log(a.employees)}function b(a,b,c){a.employee=new c,a.add=function(){a.employee.$save(function(){b.path("/")})}}function c(a,b,c,d){a.employee=d.get({id:b.id}),a.edit=function(){a.employee.$save(function(){c.path("/")})}}function d(a,b,c,d){a.employee=d.get({id:b.id}),a.remove=function(){a.employee.$remove({id:a.employee.Id},function(){c.path("/")})}}function e(a,b,c,d,e){a.employee=d.get({id:b.id})}angular.module("barberApp").controller("EmployeesListController",a).controller("EmployeesAddController",b).controller("EmployeesEditController",c).controller("EmployeesDeleteController",d).controller("EmployeesDetailsController",e),a.$inject=["$scope","Employee"],b.$inject=["$scope","$location","Employee"],c.$inject=["$scope","$routeParams","$location","Employee"],d.$inject=["$scope","$routeParams","$location","Employee"],e.$inject=["$scope","$routeParams","$location","Employee","Activity"]}(),function(){"use strict";function a(a){return a("/api/activities/:id")}angular.module("activitiesServices",["ngResource"]).factory("Activity",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){return a("/api/employees/:id")}angular.module("employeesServices",["ngResource"]).factory("Employee",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){var b=null;return{getDate:function(){return b},setDate:function(a){b=a}}}angular.module("sharedDatesServices",["ngResource"]).factory("sharedDate",a),a.$inject=["$resource"]}();