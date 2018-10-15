var UserNameMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && attr.match(/user/gi) && attr.match(/name/gi);
  },
  value: function() {
    return chance.word();
  }
});

var EmailMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && attr.match(/email/gi);
  },
  value: function() {
    var email = store.getEmailAddress();
    if (!email) {
      return chance.email({ domain: 'example.com' });
    }

    var randomNumber = chance.natural({ min: 50, max: 9999 });
    var toAppend = '+' + randomNumber + '@';
    return email.replace('@', toAppend);
  }
});

var PasswordMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && attr.match(/password/gi);
  },
  value: function() {
    return store.getPassword();
  }
});

var BooleanMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && attr.match(/terms_of_service/gi);
  },
  value: function() {
    return 'checked';
  }
});

var UrlMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && (attr.match(/web/gi) || attr.match(/url/gi));
  },
  value: function() {
    return "https://" + chance.domain();
  }
});

var CaptchaMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && (attr.match(/captcha/gi) || attr.match(/challenge/gi));
  },
  value: function() {
    return "";
  }
});
