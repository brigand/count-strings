var test = require('tape');
var count = require('./');
test('count-strings', function(t){
  t.equal(count('a b a', 'a'), 2);
  t.equal(count('foo bar foo bar', 'foo'), 2);
  t.equal(count('ffoo fbar fqux', 'foo'), 1);
  t.equal(count('abc', ''), 3);
  t.equal(count('foo bar foo bar', 'qux'), 0);
  t.equal(count('aaa', 'aa'), 1);
  t.end();
});

