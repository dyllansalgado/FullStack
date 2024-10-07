#Elevar al cuadrado una lista de números usando map.

#Se crea la funcion del cuadrado
def cuadrado(x):
    return x ** 2
lista = [1,2,3,4,5,6,7,8,9,10]
print("La lista de numeros es: ", lista)

#Map debe tener la funcion y la lista a ejecutar la funcion
resultado = map(cuadrado, lista)

# Convertir el resultado a una lista
resultado_lista = list(resultado)
print(resultado_lista) 