#		Impresión de la suma de los números pares del 1 al 10 usando el ciclo for.

print("Imprimir numeros pares del 1 al 10 usando ciclo for ")
lista = [1,2,3,4,5,6,7,8,9,10]
print("La lista de numeros es: ", lista)
suma = 0
for i in range(len(lista)):
  if lista[i]%2 == 0:
    suma = suma + lista[i]
    print(f"El numero {lista[i]} es par")
print("La suma de estos numeros da un total de: ", suma)