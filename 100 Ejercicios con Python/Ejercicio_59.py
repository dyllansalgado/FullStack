#	Imprimir la tabla de multiplicar de un número ingresado por el usuario.

n = int(input("Ingrese un numero para calcular su tabla de multiplicar: "))
lista = []
for i in range(10):
    calculo = n*(i+1)
    lista.append(calculo)
    print(f"{n} x {i+1} = {calculo}")
    
print("La lista quedo: ", lista)
    