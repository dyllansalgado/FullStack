#Obtener el cuadrado de la suma de dos listas de números utilizando map.

def cuadrado(lista1,lista2):
    total = lista1+lista2
    cuadrado = total**2
    return cuadrado
lista1 = [1,2,3,4,5,6,7,8,9,10]
lista2 = [2,3,4,5,6,7,8,9,10,11]
print("La lista de numeros es: ", lista1)
print("La lista de numeros es: ", lista2)

#Map debe tener la funcion y la lista a ejecutar la funcion
resultado = map(cuadrado, lista1,lista2)

# Convertir el resultado a una lista
resultado_lista = list(resultado)
print(resultado_lista) 