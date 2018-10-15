var PopulateManager = Backbone.Model.extend({
  populate: function(element, value) {
    if (store.get('simulant') === true) {
      new SimulantPopulator().populate(element, value);
    } else {
      new DefaultPopulator().populate(element, value);
    }
  }
});

var SimulantPopulator = Backbone.Model.extend({
  populate: function(element, value) {
    if (element.prop('type') === 'checkbox' && value === 'checked') {
      element.click();
    }
    simulant.fire(element[0], simulant('focus'));
    element.val(value);
    simulant.fire(element[0], simulant('input'));
    simulant.fire(element[0], simulant('change'));
    simulant.fire(element[0], simulant('blur'));
  }
});

var DefaultPopulator = Backbone.Model.extend({
  populate: function(element, value) {
    if (element.prop('type') === 'checkbox' && value === 'checked') {
      element.click();
    }
    element.val(value);
    this.fireEvent(element.get(0), 'change');
    this.fireEvent(element.get(0), 'blur');
  },

  fireEvent: function(element, event) {
      var changeEvent = new Event(event, {
          view: window,
          bubbles: true,
          cancelable: true
      });
      changeEvent.target = element;
      changeEvent.currentTarget = element;
      var canceled = !element.dispatchEvent(changeEvent);
      if (canceled) {
          console.log("Event " + event + " was canceled");
      }
  },
});
