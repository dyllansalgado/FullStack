#potencias de dos números ingresados por usuario.

print("Bienvenido a la calculadora que solo calcula potencias")
print("-"*50)
num1 = int(input("Ingrese el primer valor a elevar: "))
num2 = int(input("Ingrese el segundo valor correspondiente al elevado: "))

potencia = num1 ** num2
print("-"*50)
print("El resultado de la potencia de ", num1, " elevado a ", num2, " es de: ", potencia)