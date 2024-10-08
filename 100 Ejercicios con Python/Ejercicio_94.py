#Filtrar cadenas por un caracter en específico usando filter.

listaCadenas = ["hola","a","como","esa","asdas"]

filtrar = lambda listaCadenas,caracter: list(filter(lambda listaCadenas: caracter in listaCadenas, listaCadenas))

print(f"La lista de cadena original es: {listaCadenas}")
caracter = str(input("Ingrese el caracter a buscar: "))
print(f"La lista de cadenas que contienen el caracter {caracter} son: {filtrar(listaCadenas, caracter)}")