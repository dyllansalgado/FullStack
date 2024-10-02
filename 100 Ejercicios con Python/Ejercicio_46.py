#	Solicitar un número e indicar cuántos dígitos tiene.

n = int(input("Ingrese un numero para indicar la cantidad de digitos: "))
stringN = str(n)
cantidadDeDigitos = len(stringN)
nInt = int(stringN)
print(f"El valor {nInt} ingresado tiene {cantidadDeDigitos} digitos.")