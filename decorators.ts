function first() {
	console.log("first(): factory evalueted");
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor):void {
		console.log("first(): called");
		return;
	}
}

function second() {
	console.log("second(): factory evalueted");
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor):void {
		console.log("second(): called");
	}
}

class ExampleClass {
	@first()
	@second()
	method() {}
}

// const exampleClass = new ExampleClass();

// exampleClass.method();