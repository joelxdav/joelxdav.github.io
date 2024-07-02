import turtle       



#---PRINT LINK---

def printLink(uid,wn):
  #uid = uid[3:]
  uid = "nftycoin.tech/"+uid
  wn.title(uid)
  '''
  #light
  metric = turtle.Turtle()
  metric.pensize(5)
  metric.pencolor([247/255,247/255,167/255])
  metric.penup()
  metric.forward(-20)
  metric.right(-90)
  metric.forward(2)
  metric.right(90)
  metric.pendown()
  metric.forward(59)
  metric.hideturtle()
  #dark
  m2 = turtle.Turtle()
  m2.pensize(5)
  m2.pencolor([118/255,96/255,33/255])
  m2.penup()
  m2.forward(-20)
  m2.right(90)
  m2.forward(2)
  m2.right(-90)
  m2.pendown()
  m2.forward(59)
  m2.hideturtle()
  #gold
  m3 = turtle.Turtle()
  m3.pensize(5)
  m3.pencolor([235/255,216/255,52/255])
  m3.penup()
  m3.forward(-20)
  m3.pendown()
  m3.forward(59)
  m3.hideturtle()
  '''
  '''
  strang = turtle.Turtle()
  strang.hideturtle()
  strang.penup()
  strang.forward(100)
  strang.right(90)
  strang.forward(250)
  strang.pendown()
  strang.write(lnk, move=False, align="left", font=("Arial", 20, "normal"))
  '''





#---DRAW CIRCLE---

'''
drawCircle @para = [
  turtle object,
  radius of circle,
  distance from center left to right,
  distance from center bottom to top,
  degree of first strike,
  num of strikes,
  pensize
  ]
'''

def drawCircle(color, r, right, down, deg, strikes, size, offset):
    who = turtle.Turtle()
    who.pencolor(color)
    who.pensize(size)
    who.hideturtle()
    who.speed(0)
    who.penup()
    who.forward(right)
    who.right(-90)
    who.forward(down) 
    who.pendown()
    who.circle(r, deg) #deg-offset
    e = r-40
    if strikes == 1:
        who.penup()
        who.circle(r, ((360/r)*3) )  
        who.pendown()
        who.circle(r, ((360-deg) - ((360/r)*3)) )
        
    elif strikes == 2:
        who.penup()
        who.circle(r, ((360/r)*3) )
        who.pensize(5)
        who.pendown()
        who.circle(r, ((360/r)*1) )
        
        who.penup()
        who.circle(r, ((360/r)*3) )
        who.pensize(size)
        who.pendown()
        who.circle(r, ( (360-deg) - ((360/r)*3) - ((360/r)*1) - ((360/r)*3) ))
        
    elif strikes == 3:
        who.penup()
        who.circle(r, ((360/r)*3) )
        who.pensize(5)
        who.pendown()
        who.circle(r, ((360/r)*1) )
        
        who.penup()
        who.circle(r, ((360/r)*3) )
        who.pensize(5)
        who.pendown()
        who.circle(r, ((360/r)*1) )
        
        who.penup()
        who.circle(r, ((360/r)*3) )
        who.pensize(size)
        who.pendown()
        who.circle(r, ( (360-deg) - ((360/r)*3) - ((360/r)*1) - ((360/r)*3) - ((360/r)*1) - ((360/r)*3) ))
    who.hideturtle()
    who.penup()
    who.forward(1000)
    #turtle.getscreen()._root.mainloop()



        

'''(turtle object, radius, dist from left, dist from bottom, degree, strikes, pensize/thickness)'''
def drawCircles(thickness, degStrike, ink, ink2, num):
  #DRAW BLACK RINGS
  radius = 40
  fromLeft = 20
  fromBottom = -2
  r = 118 / 255
  g = 96 / 255
  b = 33  / 255
  color = [r,g,b]
  for i in range(num):
    offset = num*1.4
    radius += 23
    fromLeft += 23
    drawCircle(color, radius, fromLeft, fromBottom,
               degStrike[i][0], degStrike[i][1], thickness[i], offset)

  # DRAW WHITE RINGS
  radius = 40
  fromLeft = 20
  fromBottom = 2
  r = 247 / 255
  g = 247 / 255
  b = 167 / 255
  color = [r,g,b]
  for j in range(num):
    offset = num*1.4
    radius += 23
    fromLeft += 23
    drawCircle(color, radius, fromLeft, fromBottom,
               degStrike[j][0], degStrike[j][1], thickness[j], offset)
    
  # DRAW GOLD RINGS
  radius = 40
  fromLeft = 20
  fromBottom = 0
  r = ink[0] / 255
  g = ink[1] / 255
  b = ink[2] / 255
  color = [r,g,b]
  for i in range(num):
    offset = num*1.4
    radius += 23
    fromLeft += 23
    drawCircle(color, radius, fromLeft, fromBottom,
               degStrike[i][0], degStrike[i][1], thickness[i], offset)







'''wn=turtle.Screen'''
def gradientBackground(wn,rgb1,rgb2):

  r = rgb1[0] / 255
  g = rgb1[1] / 255
  b = rgb1[2] / 255
  x = rgb2[0] / 255
  y = rgb2[1] / 255
  z = rgb2[2] / 255
  color = (r, g, b) 
  target = (x, y, z)
  wn.tracer(False)

  width, height = wn.window_width(), wn.window_height()

  deltas = [(hue - color[index]) / height for index, hue in enumerate(target)]

  turt = turtle.Turtle()
  turt.color(color)

  turt.penup()
  turt.goto(-width/2, height/2)
  turt.pendown()

  direct = 1

  for distance, y in enumerate(range(height//2, -height//2, -1)):

      turt.forward(width * direct)
      turt.color([color[i] + delta * distance for i, delta in enumerate(deltas)])
      turt.sety(y)

      direct *= -1

  wn.tracer(True)

