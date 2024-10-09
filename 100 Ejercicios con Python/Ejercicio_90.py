#Duplicar cada elemento de una lista usando map y lambda


duplicar = lambda lista: list(map(lambda x: x*2,lista))
lista = [1,2,3,4,5,6,7,8,9,10]
print(f"La lista original es: {lista}")
print(f"La lista duplicada ha quedado: {duplicar(lista)}")
