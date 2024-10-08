#Comprobar si una palabra es palíndromo usando lambda.

cadena = input("Ingrese una cadena para ver si es palindromo: ")
# Vamos revisando la primera letra con la ultima
palindromo = lambda cadena: cadena == cadena[::-1]

# Verificar y mostrar el resultado
if palindromo(cadena):
    print("La cadena es palindromo")
else:
    print("La cadena no es palindromo")