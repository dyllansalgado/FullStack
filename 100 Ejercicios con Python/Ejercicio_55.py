#Impresión de los números pares del 2 al 10 usando el ciclo for.
print("Imprimir numeros pares del 2 al 10 usando ciclo for ")
lista = [2,3,4,5,6,7,8,9,10]
print("La lista de numeros es: ", lista)

for i in range(len(lista)):
  if lista[i]%2 == 0:

    print("Los numeros pares del 2 al 10 son: ", lista[i])


