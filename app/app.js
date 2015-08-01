import { createStore } from 'redux';

/**
 * (VERY) Basic Redux Example
 * In Redux, we create functions to describe how the state of our application will be manipulated.
 * Throughout the documentation you will see these described as 'reducers' and 'pure functions'.
 * Pure functions are simply functions which always return the same output given the same input.
 * In this example, we are providing a default state of "Hello Friend!"
 * Remember our initial state can be anything from a nested object, array, or even a basic string!
 * Foggy on the meaning or use of pure functions or reducers? Check out the links below!
 * Pure Functions: https://github.com/DrBoolean/mostly-adequate-guide/blob/master/ch3.md#the-case-for-purity
 * Reducers: https://en.wikipedia.org/wiki/Fold_(higher-order_function)
 */
function message(state = "Hello Friend!", action){
	switch(action.type){
		case 'GOODBYE':
			//When making modifications we always return a new object
			return 'GoodBye Friend!';
		case 'HELLO':
			return 'Hello Again Friend!';
		default: 
			return state;
	}
}

//Creates a store to manage the state of your application.
//Each application has a single store to manage state
const store = createStore(message);
//For this simple demo let's print out the current state as a heading
const messageBlock = document.getElementById('message');

//At this point our initial state of 'Hello Friend!' will be returned
messageBlock.innerHTML = store.getState();

//Register an event handler to dispatch our 'HELLO' action when button is clicked
document.getElementById('helloButton').onclick = function(){
	//Dispatch a registered action in order to update our state
	store.dispatch({ type: 'HELLO' });
}
//Register an event handler to dispatch our 'GOODBYE' action when button is clicked
document.getElementById('goodbyeButton').onclick = function(){
	//Dispatch a registered action in order to update our state
	store.dispatch({ type: 'GOODBYE' });	
}
//Subscribe to all subsequent changes, updating our message block with our new application state
store.subscribe(() => { messageBlock.innerHTML = store.getState() });
