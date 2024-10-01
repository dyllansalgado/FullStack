#Ingresar una lista de números y ordenarlos de menor a mayor.

n = 3
lista = []
i = 0
while i < n:
    numero = int(input(f"Ingrese los {n} numeros a la lista: "))
    lista.append(numero)
    i = i + 1
i = 0
while i < n:
    j = 0
    while j < n:
        if lista[i] < lista[j]:
            aux = lista[i]
            lista[i] = lista[j]
            lista[j] = aux
        j = j + 1
    i = i + 1

print(lista)