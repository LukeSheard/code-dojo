c = ' '
d = '...'
e = d + c + d
f = e + c + d
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
s = "Head, shoulders, knees and toes\nknees and toes\nHead, shoulders, knees and toes\nknees and toes\nand eyes and ears and mouth and nose\nHead, shoulders, knees and toes\nknees and toes\n"
for (e in r) console.log(s = s.replace(r[e][0], r[e][1]));
