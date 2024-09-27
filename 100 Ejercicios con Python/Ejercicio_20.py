#Encontrar y devolver el último carácter de una cadena.
#Ingrese cadena
cadena = str(input("Ingrese una cadena de cualquier largo: "))

largoDeLaCadena = len(cadena)
print(f"El ultimo caracter de la cadena: '{cadena}' es: '{cadena[largoDeLaCadena-1]}'")