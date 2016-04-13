c = ' ...'
d = '...'
e = d + c
f = e + c
r = [
  ['#', ''],
  [/Head/g, d],
  [/shoulders/g, d],
  [/knees and/g, e],
  [/toes/g, d],
  [/and eyes/g, e],
  [/and ears/g, e],
  [/and mouth and/g, f],
  [/nose/g, d]
];
a = "and"
x = [
  "Head,",
  "shoulders,"
]
y = [
  "knees " + a,
  "toes"
]
s = [
  x.concat(y),
  y,
  0,
  1,
  [
    a + " eyes",
    a + " ears",
    a + " mouth " + a,
    "nose"
  ],
  0,
  1,
  []
]
s = s.map(function(line) {
  return (Array.isArray(line) ? line : s[line]).join(' ')
}).join('\n')
for (e in r) console.log(s = s.replace(r[e][0], r[e][1]));
