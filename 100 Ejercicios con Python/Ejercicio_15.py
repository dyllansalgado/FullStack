#Ingresar una lista de números y ordenarlos de menor a mayor.

n = int(input("Ingrese el tamaño de la lista: "))
lista = []
i = 0
while i < n:
  numero = int(input("Ingrese los numeros a la lista: "))
  lista.append(numero)
  i = i + 1

print("La lista creada es: ", lista)
#Se aplica la funcion sort que permite ordenan de menor a mayor
lista.sort()
#Tambien se puede colocar sorted() a = sorted(lista)
print("La lista ordenada de menor a mayor queda: ", lista)
