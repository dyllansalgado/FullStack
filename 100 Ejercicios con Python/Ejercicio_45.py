#	Imprimir la tabla de multiplicar de un número ingresado por el usuario.

n = int(input("Ingrese un numero para calcular su tabla de multiplicar: "))
for i in range(10):
    print(f"{n} x {i+1} = {n*(i+1)}")