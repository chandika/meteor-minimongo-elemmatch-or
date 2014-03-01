MyItems = new Meteor.Collection('items');


if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to cttest.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");

        var items = MyItems.find({users:{$elemMatch:{name:'chandika', $or:[{state:'CA'}, {state:'NC'}]}}});    

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
