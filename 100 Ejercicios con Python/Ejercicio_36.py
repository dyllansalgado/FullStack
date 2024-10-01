#Pide un carácter y determina si es una vocal.
caracter = str(input("Ingrese un caracter: "))
minusculaCaracter = caracter.lower()
if minusculaCaracter == "a" or minusculaCaracter == "e" or minusculaCaracter == "i" or minusculaCaracter == "o" or minusculaCaracter == "u":
    print(f"El caracter {caracter} es una vocal.")
else:
    print(f"El caracter {caracter} no es una vocal.")