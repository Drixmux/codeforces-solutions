function main() {
  const events_count = parseInt(readline(), 10);
  const events = readline().trim().split(' ').map(string => parseInt(string, 10));
  var crimes_untreated = 0;
  var free_police_forces = 0;

  events.forEach(event => {
    if (event === -1) {
      if (free_police_forces > 0) {
        free_police_forces--;
      } else {
        crimes_untreated++;
      }
    } else {
      free_police_forces += event;
    }
  });

  print(crimes_untreated);
}

main();