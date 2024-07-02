from random import randint
from myLIB import asciiDICT, degStrikeDICT




'''
generate a 9-character alphanumerica string.
(ie: 7P63bZqz9)
'''

def gen():
  gen = [0,0,0,0,0,0] 
  for i in range(len(gen)):
    r = randint(48, 57)
    rn = randint(65, 90)
    rnd = randint(97, 122)
    rndm = [r,rn,rnd]
    n = randint(0, 2)
    gen[i] = asciiDICT[rndm[n]]

  gen = "".join(gen)
  return gen






'''
get radial degree and number of strikes
(from my library of dictionaries)
based on character.
'''

def getDS(arr):
  degStrike = []
  for n in range(len(arr)):
    degStrike.append(degStrikeDICT[arr[n].lower()])
    #print(arr[n] ," ", degStrike[n])
  return degStrike






'''
set thickness to the circle in position to
signify character of uppercase, lowercase, numeric, special.
'''

def setThick(arr):
  thickness = []
  
  for i in range(len(arr)):
    if arr[i].isupper():
        thickness.append(15)

    elif arr[i].islower():
        thickness.append(10)

    elif arr[i].isdigit():
        thickness.append(5)

    else:
        thickness.append(5)
    #print(thickness[i])
  return thickness


