
#1
It's been a very complicated week and I've been through a lot, first I realized that my board has been not connected with a NOT CONNECTED problem!
I didn't know what was going on, for one thing I kept checking it over and over again, and eventually realized that it was my port connection that had been switched to something else for some reason!
! [GgqYKl.png](https://imgpile.com/images/GgqYKl.png)

Then I experienced problems with the serial library not being recognized and connected, I currently don't even know why I connected to this library as tutirial
It says it doesn't exist!
! [Ggqi2w.png](https://imgpile.com/images/Ggqi2w.png)
The wifi shows a different problem with the front end code so I've really been looking into what went wrong and
I did a lot of corrections and attempts and even searched for how to fix it, even used terminal and couldn't fix it!

Then I made some changes according to the tutorial.
But there is a problem that the port is not recognized.
I've been looking at my code over and over again and I don't know what's wrong with it!
! [GgAw4P.png](https://imgpile.com/images/GgAw4P.png)

The way I think about it is
circleSize = map(a0.value, a0.min, a0.max, 0, width); // map the circle size based on the value of the photoresistor
hoping that I would change the size of the circle by the amount of light coming in through the photoresist.
So my earliest thought was
[! [GgATSx.md.jpg](https://imgpile.com/images/GgATSx.md.jpg)](https://imgpile.com/i/GgATSx)
[! [GgAdbj.md.jpg](https://imgpile.com/images/GgAdbj.md.jpg)](https://imgpile.com/i/GgAdbj)
The logic I am thinking about is：

The Arduino code initializes the serial communication and then enters a loop.
In the loop, it keeps reading values from the A0 pin.
The p5.js code communicates with the Arduino via serial communication.
Once it receives the data, it parses the JSON and maps the sensor values to the background color and the size of the circle drawn on the screen.

This is the basic idea of my final, but I keep running into problems with SERIAL, so hopefully I can learn to fix it. Since I haven't tried it successfully myself, my video is a basic version of one I've just started doing.I didn't succeed in seeing my code run like this.

#UPDATE then I asked my peer today and finally it solved... it is just a easy problem
but i did not noticed that