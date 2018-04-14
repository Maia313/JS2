# JS2


    - Functional programming;
    - Array methods:filter, map, reduce;
    - JSON & AJAX;
    - Web API;
    - Cookies & webstorage;
    
## Design patterns:

#### Creational

* Constructor

    // Each of the following options will create a new empty object:
 
        var newObject = {};
 
    // or
    
        var newObject = Object.create( Object.prototype );
 
    // or
    
        var newObject = new Object();
        
* Factory  -  This makes an instance of several derived classes based on interfaced data or events.
* Abstract  -  Creates an instance of several families of classes without detailing concrete classes.
* Prototype  -  A fully initialized instance used for copying or cloning.
* Singleton  -  A class with only a single instance with global access points.
* Builder  -  Separates object construction from its representation, always creates the same type of object.

#### Structural

* Decorator  -  Dynamically add alternate processing to objects.
* Facade  -  A single class that hides the complexity of an entire subsystem.
* Flyweight  -  A fine-grained instance used for efficient sharing of information that is contained elsewhere.
* Adapter  -  Match interfaces of different classes therefore classes can work together despite incompatible interfaces.
* Proxy  -  A place holder object representing the true object.

#### Behavioral

* Iterator  -  Sequentially access the elements of a collection without knowing the inner workings of the collection.
* Mediator  -  Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.
* Observer  -  A way of notifying change to a number of classes to ensure consistency between the classes.
* Visitor  -  Adds a new operation to a class without changing the class.


### Module defined using Object literal notation

        var myModule = {

          myProperty: "someValue",

          // object literals can contain properties and methods.
          // e.g we can define a further object for module configuration:
          myConfig: {
            useCaching: true,
            language: "en"
          },

          // a very basic method
          saySomething: function () {
            console.log( "Where in the world is Paul Irish today?" );
          },

          // output a value based on the current configuration
          reportMyConfig: function () {
            console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
          },

          // override the current configuration
          updateMyConfig: function( newConfig ) {

            if ( typeof newConfig === "object" ) {
              this.myConfig = newConfig;
              console.log( this.myConfig.language );
            }
          }
        };

        // Outputs: Where in the world is Paul Irish today?
        myModule.saySomething();

        // Outputs: Caching is: enabled
        myModule.reportMyConfig();

        // Outputs: fr
        myModule.updateMyConfig({
          language: "fr",
          useCaching: false
        });

        // Outputs: Caching is: disabled
        myModule.reportMyConfig();


