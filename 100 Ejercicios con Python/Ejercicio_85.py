#Contar el número de vocales en una lista de palabras utilizando map.


lista = ["hola", "como", "estas", "me", "alegro"]
print("La lista es:", lista)

def contar_vocales(palabra):
    conteo = 0
    for vocal in 'aeiou':
        conteo =conteo + palabra.lower().count(vocal)
    return conteo

# Usar map para aplicar la función a cada palabra en la lista
resultado = map(contar_vocales, lista)

# Convertir el resultado a una lista
resultado_lista = list(resultado)

print(resultado_lista)
