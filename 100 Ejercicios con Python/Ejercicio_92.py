#Filtrar cadenas de longitud mayor a 3, usando filter.

listaCadenas = ["hola","a","como","esa","asdas"]

filtrar = list(filter(lambda x: len(x) >3, listaCadenas))

print(f"La lista de cadena original es: {listaCadenas}")
print(f"La lista de cadenas que tengan longitud mayor a 3 son: {filtrar}")