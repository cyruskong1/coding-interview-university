(function IIFE() {

	function C() {
		console.log("OOPS!");
	}

	function E(f) {
		console.log("E");
		f();
		var f = F;
	}

	function A() {
		console.log("A");
		B();
	};

	var C;

	function G() {
		console.log("G");
		H();

		function H() {
			console.log("H");
			I();
		};
	}

	function D() {
		console.log("D");
		E(F);
	}

	function I() {
		console.log("I");
		J();
	}

	function B() {
		console.log("B");
		C();
	};

	function F() {
		console.log("F");
		G();
	};

	
	var rest = "KLMNOPQRSTUVWXYZ".split(""), obj = {};
		for (var i=0; i<rest.length; i++) {
		(function (i){
			// define the current function
			obj[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					// TODO: call the next function
					obj[rest[i + 1]]();
				}
			};
		})(i);
	}


	function J() {
		function J() {
			console.log("J");
			obj.K();
		};
		J();
	};

	function C() {
		console.log("C");
		D();
	};

A();

})()