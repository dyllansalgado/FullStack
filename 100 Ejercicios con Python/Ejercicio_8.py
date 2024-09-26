#Crear una tupla de n elementos y mostrarlos.
#Las tuplas son inmutables y tienen este formato ("a","b",1,2), por lo que no se pueden añadir elementos con metodos como append.
#Lo que se puede hacer es trabajar como listas y esto despues transfomarlo a tuplas.


n = int(input("Ingrese el tamaño de la tupla: "))
lista = []
i = 0
while i < n:
    valor = input(f"Ingrese el elemento {i + 1} para añadirlo a la tupla: ")
    lista.append(valor)
    i = i+1
#Como se quiere mostrar como tuplas, se procede a transformarlo.

tupla = tuple(lista)
print("La tupla creada es: ",tupla)
