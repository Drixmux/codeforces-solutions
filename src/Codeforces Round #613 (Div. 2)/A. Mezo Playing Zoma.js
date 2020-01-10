function main() {
  const commands_counter = parseInt(readline(), 10);
  const commands = readline().trim().split('').map(string => string);
  var left_command = 0, right_command = 0;
  commands.forEach(command => {
    if (command == 'L') left_command++;
    if (command == 'R') right_command++;
  });
  print(left_command + right_command + 1);
}

main();