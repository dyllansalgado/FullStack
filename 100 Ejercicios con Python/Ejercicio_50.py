#Mostrar los números del 1 al 100, pero reemplazar los múltiplos de 3 por "Fizz" y los múltiplos de 5 por "Buzz".
for i in range(1,101):
  if i % 3 == 0:
    print("Fizz")
  elif i % 5 == 0:
    print("Buzz")
  else:
    print(i)