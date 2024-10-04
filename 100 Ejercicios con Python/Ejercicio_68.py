# Escribir una función que reciba por teclado una distancia y una velocidad para poder calcular el tiempo de viaje.
def tiempoEnTotalDistancia(distancia, velocidad):
  tiempo = distancia/velocidad
  return tiempo


def main():
  distancia = int(input("Ingrese la distancia a recorrer en metros: "))
  velocidad = int(input("Ingrese la velocidad a la que ira en km: "))
  distancia = distancia
  velocidad = (velocidad*1000)/3600
  tiempoTotal = tiempoEnTotalDistancia(distancia,velocidad)
  print(f"El tiempo total en recorrer una distancia de {distancia} m a velocidad {velocidad} es de: {tiempoTotal} segundos")

main()
