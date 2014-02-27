if (Meteor.isClient) {
  window.editor = new ReactiveAce();

  Template.hello.greeting = function () {
    return "Welcome to reactive-ace-test.";
  };

  Template.hello.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      editor.attach('editor');
    }
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
