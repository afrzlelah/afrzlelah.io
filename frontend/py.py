# p= float(input('Masukan Panjang Balok'))
# l= float(input('Masukan Panjang  Luas'))
# t= float(input('Masukan Panjang Tinggi'))

# def volBalok(panjang,lebar,tinggi):
#     print(f'Volume\t{panjang*lebar*tinggi:.0f}')
# def kelBalok(panjang,lebar,tinggi):
#     print(f'Keliling\t{2*(panjang*lebar*tinggi):.0f}')

# user = input("Masukan tujuan perhitunngan\n1.Keliling\n2.Volume")
# if user == "2":
#     volBalok(p,l,t)
# elif user == "1":
#     kelBalok(p,l,t)

def peserta(*namanya):
    for i in namanya:
        print(f"hai{i}")
peserta("sbd","sbsd","hjvasv")