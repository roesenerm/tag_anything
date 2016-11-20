"use strict";

(function(){
	angular
	.module("tagAnything", [
		"ui.router"
	])
	.config(Router)
	.controller("productsIndexController", productsIndexCtrl)
	.controller("productsShowController", produtsShowCtrl);

	Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
	function Router($stateProvider, $locationProvider, $urlRouterProvider){
		$locationProvider.html5Mode(true);
		$stateProvider
		.state("productsIndex", {
			url: "/",
			templateUrl: "/html/products-index.html",
			controller: "productsIndexController",
			controllerAs: "pIndexVM"
		})
		.state("productsShow", {
			url: "/products/:name",
			templateUrl: "/html/products-show.html",
			controller: "productsShowController",
			controllerAs: "pShowVM"
		});
		$urlRouterProvider.otherwise("/");
	}

	function productsIndexCtrl() {
		var vm = this;
		vm.products = [
			{name: "Product 1"},
			{name: "Product 2"},
			{name: "Product 3"}
		];
	}

	productsShowCtrl.$inject = ["$stateParams"];
	function produtsShowCtrl($stateParams) {
		var vm = this;
		vm.product = $stateParams;
	}
})();