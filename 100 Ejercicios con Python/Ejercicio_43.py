#	Recibir un número N e imprimir el factorial de este número.
n = int(input("Ingrese un numero para calcular su factorial: "))
factorial = 1
for i in range(n):
    factorial = factorial*(i+1)
print(f"El factorial de {n}! es: {factorial}")