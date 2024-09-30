#Eliminar elementos duplicados de una lista ingresada.
n = int(input("Ingrese el tamaño de la lista: "))
lista = []
lista_sin_duplicados = []

# Ciclo para llenar la lista
for i in range(n):
    valor = input(f"Ingrese el elemento {i + 1} para añadirlo a la lista: ")
    lista.append(valor)

#Se eliminan elementos duplicados
for elemento in lista:
    if elemento not in lista_sin_duplicados:
        lista_sin_duplicados.append(elemento)

print(f"Lista sin duplicados: {lista_sin_duplicados}")