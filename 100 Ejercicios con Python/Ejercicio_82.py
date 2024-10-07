#Convertir una lista de cadenas de texto numéricas a números enteros, utilizando map.
def transformacion(x):
    return str(x)
lista = [1,2,3,4,5,6,7,8,9,10]
print("La lista de numeros es: ", lista)

#Map debe tener la funcion y la lista a ejecutar la funcion
resultado = map(transformacion, lista)

# Convertir el resultado a una lista
resultado_lista = list(resultado)
print(resultado_lista) 