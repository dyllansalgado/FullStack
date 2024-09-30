#Combinar 2 listas en pares usando el método .zip().
n = int(input("Ingrese el tamaño de las dos listas: "))
lista1 = []
lista2 = []
i = 0
while i < n:
  valor1 = input(f"Ingrese el elemento {i + 1} para añadirlo a la lista 1: ")
  valor2 = input(f"Ingrese el elemento {i + 1} para añadirlo a la lista 2: ")
  lista1.append(valor1)
  lista2.append(valor2)
  i = i + 1

usandoZip = zip(lista1, lista2)

print(f"La combinada en pares usando zip es: {list(usandoZip)}")
