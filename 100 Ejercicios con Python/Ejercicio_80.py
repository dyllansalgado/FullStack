#Obtener la memoria RAM de mi Laptop usando pip install psutil. (Tuve que consultar cómo realizarlo)

import psutil


memoria_ram = psutil.virtual_memory()

print("---- Información de la Memoria RAM ----")
#Se debe realizar un calculo, puesto que muestra el valor sin la transformacion a GB.

print(f"Total: {memoria_ram.total / (1024 ** 3):.2f} GB")
