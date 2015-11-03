var test = require('tape');
var count = require('./');
test('count-strings', function(t){
  t.equal(count('a b a', 'a'), 2);
  t.equal(count('foo bar foo bar', 'foo'), 2);
  t.end();
});

