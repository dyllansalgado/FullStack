#	Generar un número aleatorio del 1 al 10 y pedir al usuario adivinar el número hasta que lo adivine correctamente.
import random
valorRandom = random.randint(1, 10)

while True:

    n = int(input("Ingrese un numero del 1 al 10 y te dire si adivinaste el valor: "))
    if n == valorRandom:
        print(f"Felicidades, adivinaste el valor era {valorRandom}")
        break
    else:
        print("No adivinaste el valor, intentalo de nuevo")

