function main() {
  const couter = parseInt(readline(), 10);
  const items = readline().trim().split(' ').map(string => parseInt(string, 10));
  print(couter);
  print(items);
}