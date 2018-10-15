var CompanyMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return (
      attr &&
      (attr.match(/company/gi) ||
        attr.match(/company_name/gi) ||
        attr.match(/business/gi) ||
        attr.match(/organization/gi))
    );
  },
  value: function() {
    return S(chance.word()).capitalize().s + " Inc.";
  }
});

var CityMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return (
      attr &&
      (attr.match(/city/gi) ||
        attr.match(/location/gi) ||
        attr.match(/town/gi) ||
        attr.match(/county/gi))
    );
  },
  value: function() {
    return chance.city();
  }
});

var CountryMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && attr.match(/country_code/gi);
  },
  value: function() {
    return "Netherlands";
  }
});

var ZipMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return (
      attr &&
      (attr.match(/zip/gi) ||
        attr.match(/pincode/gi) ||
        attr.match(/zipcode/gi))
    );
  },
  value: function() {
    return chance.zip();
  }
});

var AddressMatcher = Backbone.Model.extend({
  supports: function(attr) {
    return attr && attr.match(/address/gi);
  },
  value: function() {
    return chance.address();
  }
});
