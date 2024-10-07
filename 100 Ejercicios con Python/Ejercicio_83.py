#Calcular la longitud de una lista de palabras usando map
def calcularLongitud(x):
    total = len(x)
    return total

lista = ["hola","como","estas","me","alegro"]
print("La lista es: ", lista)

#Map debe tener la funcion y la lista a ejecutar la funcion
resultado = map(calcularLongitud, lista)

# Convertir el resultado a una lista
resultado_lista = list(resultado)
print(resultado_lista) 