#Extraer una subcadena de una cadena dada.
cadena = str(input("Ingrese una cadena de cualquier largo: "))
#Ingrese la posicion de donde comienza la subcadena y el final que desea
parteInicial = int(input("Ingrese el valor inicial de la cadena (posición): "))
parteFinal = int(input("Ingrese el valor final de la cadena (posición): "))
cadenaDividida = cadena[parteInicial - 1:parteFinal]
print("La subcadena es: ", cadenaDividida)