#Filtrar números pares de una lista usando filter.
lista = [1,2,3,4,5,6,7,8,9,10]

#aca primero hago un lambda de x%2 == 0 para ver los pares de la lista, luego los filtro y los agrego a una lista.
filtrar = list(filter(lambda x: x%2 == 0, lista))

print(f"La lista con solo valores pares quedo: {filtrar}")