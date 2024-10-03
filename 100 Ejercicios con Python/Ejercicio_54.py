#Imprimir los caracteres de una cadena usando el ciclo for.
print("Imprimir elementos de una lista dada: ")
cadena = str(input("Ingrese una cadena: "))
print("La cadena es: ", cadena)

for i in range(len(cadena)):
  print("Los caractares de la cadena son: ", cadena[i])
