#Elevar un número al cuadrado utilizando lambda.

#lambda tiene el siguiente formato: lambda argumentos: expresión


cuadrado = lambda x: x**2

#Se usa la funcion lambda

valorAElevar = int(input("Ingrese el valor a elevar: "))

resultado = cuadrado(valorAElevar)
print(f"El cuadrado de {valorAElevar} es: {resultado}")