#Filtrar números negativos de una lista usando filter.
lista = [1,2,3,-3,-2,3,-10,2,0,-100]

filtrar = list(filter(lambda x: x < 0, lista))

print(f"La lista de valores original es: {lista}")
print(f"La lista de valores negativos es: {filtrar}")