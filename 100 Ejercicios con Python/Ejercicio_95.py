#Filtrar elementos que son listas usando filter.

lista = [["hola","a"],"a",2,[2,3]]
#En python no existe isList pero existe isinstance(objeto, tipo), en donde doy un objeto y el tipo para consultar si es o no
filtrar = lambda lista: list(filter(lambda x: isinstance(x,list), lista))

print(f"La lista es: {lista}")
print(f"La lista de listas son: {filtrar(lista)}")