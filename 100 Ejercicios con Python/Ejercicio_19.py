#	Contar cuántas veces aparece un carácter dado en una cadena ingresada.
#Ingrese solo valores decimales
cadena = str(input("Ingrese una cadena de cualquier largo: "))
caracter = str(input("Ingrese el caracter a contar: "))

contador = cadena.count(caracter)
print(f"El caracter {caracter} aparece {contador} veces en la cadena")