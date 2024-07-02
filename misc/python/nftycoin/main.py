'''
Author: Joel Davenport
Program: main.py

'''
import turtle
import myLIB
from random import randint
from tobe import gen, setThick, getDS 
from draw import drawCircles, printLink, gradientBackground
from tkinter import *

wn = turtle.Screen()


#---GENERATE COLOR SCHEME...RANDOM OR CHOOSEN
#wn.bgcolor("black")
#wn.bgpic("bg.jpg")
r = randint(0, 255)
g = randint(0, 255)
b = randint(0, 255)
x = randint(0, 255)
y = randint(0, 255)
z = randint(0, 255)
color = [[r,g,b],[x,y,z]]
gradientBackground(wn,color[0],color[1])
ink = [235,216,52]
ink2 = [35,35,35] #color[randint(0,1)]


#---GENERATE STRING...RANDOM OR CHOOSEN
uid = gen() #generates a random alphanumeric string of 6 chars
#uid = '111111' # can include @#-_. 
arr = list(uid)



#---GET DEGREE AND NUM OF STRIKES...array[][]
degStrike = getDS(arr)



#---SET THICKNESS FOR EACH CIRCLE
thickness = setThick(arr)
  


#print the actual link for reference
printLink(uid,wn)



#---DRAW CIRCLES
drawCircles(thickness, degStrike, ink, ink2, len(arr)) 


#save image file 
turtle.hideturtle() 
img = turtle.getscreen()
img.getcanvas().postscript(file=uid+".eps")


#end
#wn.exitonclick()  

