#Determinar si un número es divisible entre 5 y 7.

#Recibir un número y comprobar si divisible por 5 y 7.
n = int(input("Ingrese un número: "))

if n%5 == 0 and n%7 == 0:
    print(f"El valor {n} si es divisible por 5 y 7.")
else:   
    print(f"El valor {n} no es divisible por 5 y 7.")

