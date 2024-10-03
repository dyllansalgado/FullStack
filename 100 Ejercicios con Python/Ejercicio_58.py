#	Multiplicar todos los elementos de una lista por 2.
print("Multiplicar todos los elementos de una lista por 2")
lista = [1,2,3,4,5,6,7]
listaPor2 = []
print("La lista de numeros es: ", lista)
print("Se procede a imprimir los valores descendentemente:")
for i in range(len(lista)):
  listaPor2.append(lista[i]*2)
  print(f"El elemento {lista[i]} * 2 es = {listaPor2[i]}")
print("La lista de numeros por 2 es = ", listaPor2)