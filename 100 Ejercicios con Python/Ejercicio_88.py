#Verificar si un número es par usando lambda.
#lambda tiene el siguiente formato: lambda argumentos: expresión
#Aca se debe usar una bifurcacion: if y else:
#lambda argumentos: valor_si_verdadero if condición else valor_si_falso

par = lambda x: "Es par." if x%2 == 0 else "Es impar."

valor = int(input("Ingrese el valor para verificar si es par o impar: "))

resultado = par(valor)
print(f"El valor {valor} es: {resultado}")
