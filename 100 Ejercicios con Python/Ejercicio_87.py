#Sumar dos números utilizando lambda.

#lambda tiene el siguiente formato: lambda argumentos: expresión

suma = lambda x,y : x+y

valor1 = int(input("Ingrese el valor x a sumar: "))
valor2 = int(input("Ingrese el valor y a sumar: "))

resultado = suma(valor1,valor2)
print(f"La suma de {valor1} + {valor2} es: {resultado}")