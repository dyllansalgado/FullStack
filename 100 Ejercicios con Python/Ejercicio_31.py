#Verificar si un número es negativo, si es 0, o si es positivo.
n = int(input("Ingrese un número, puede ser positivo-negativo o 0: "))

if n < 0:
    print("El valor ingresado es 'negativo'.")
elif n == 0:
    print("El valor ingresado es 0")
else:
    print("El valor ingresado es 'positivo'. ")
