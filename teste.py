"""teste da impl, o algoritmo vai funcionar mais ou menos assim. bem simples"""

def teste(total, parcelas):
    precoParcelas = round((total/parcelas),2)
    print("preco parcela = " + str(precoParcelas))
    current = total
    while current>0:
        print(current)
        current = round((current-precoParcelas),2)
        

teste(700,10)