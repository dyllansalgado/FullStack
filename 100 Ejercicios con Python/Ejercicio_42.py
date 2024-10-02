#	Recibir un número N e imprimir la suma de todos los números desde 1 hasta N
n = int(input("Ingrese un numero: "))
suma = 0
for i in range(n):
    suma = suma + i+1
print(f"La suma de todos los valores del 1 al {n} es: {suma}")