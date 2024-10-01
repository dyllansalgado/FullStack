#Comprobar si un número ingresado está en el rango de 1 a 100.
numero = int(input("Ingrese un numero: "))
if numero >= 1 and numero <= 100:
    print(f"El numero {numero} si esta en el rango de 1 a 100")
else:
    print(f"El numero {numero} no esta en el rango de 1 a 100")