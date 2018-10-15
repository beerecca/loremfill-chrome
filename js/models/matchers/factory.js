var MatcherFactory = Backbone.Model.extend({
  matchers: [
    new CompanyMatcher,
    new BooleanMatcher,
    new FullNameMatcher,
    new FirstNameMatcher,
    new LastNameMatcher,
    new PhoneMatcher,
    new HeightMatcher,
    new WeightMatcher,
    new UserNameMatcher,
    new EmailMatcher,
    new PasswordMatcher,
    new UrlMatcher,
    new CaptchaMatcher,
    new AmountMatcher,
    new CCMatcher,
    new CVVMatcher,
    new CityMatcher,
    new CountryMatcher,
    new ZipMatcher,
    new AddressMatcher,
    new YearMatcher,
    new NumberMatcher,
    new RangeMatcher,
    new NullMatcher
  ],

  get: function(attr) {
    for(var i=0; i<this.matchers.length; i++) {
        console.log('attr', attr);
      var matcher = this.matchers[i];
      if(matcher.supports(attr)) {
        return matcher;
      }
    }
  }
});
