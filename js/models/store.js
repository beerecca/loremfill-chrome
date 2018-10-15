var Store = Backbone.Model.extend({
  defaults: function() {
    return {
      password: 'p@ssw0rd',
      domains: '',
      cc: '',
      simulant: true
    };
  },

  reset: function(options) {
    this.save(this.defaults(), options);
  },

  refresh: function(callback) {
    var self = this;
    var query = {};
    query['password'] = this.defaults().password;
    query['domains'] = this.defaults().domains;
    query['cc'] = this.defaults().cc;
    query['simulant'] = this.defaults().simulant;
    chrome.storage.sync.get(query, function(item) {
      self.set('password', item.password);
      self.set('domains', item.domains);
      self.set('cc', item.cc);
      self.set('simulant', item.simulant);
      if(callback) {
        callback.call(this);
      }
    });
  },

  save: function(payload, options) {
    var self = this;
    chrome.storage.sync.set(payload, function() {
      self.refresh();
      if(options.success) {
        options.success.call(this);
      }
    });
  },

  getRandomCC: function() {
    var configured = this.get('cc');
    if(_.isEmpty(configured)) {
      return null;
    }
    var list = S(configured).trim().parseCSV(',', "'");
    return chance.pick(list);
  },

  getEmailAddress: function() {
    return this.get('domains');
  },

  getPassword: function() {
    return this.get('password');
  }
});
