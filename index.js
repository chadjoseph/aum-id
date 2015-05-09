import listen from 'aum-listen';

var current;

listen('id', function (e) {
  current = e.detail;
});

export default function () {
  return current;
}

