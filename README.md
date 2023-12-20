#1
It's been a very complicated week and I've been through a lot, first I realized that my board has been not connected with a NOT CONNECTED problem!
I didn't know what was going on, for one thing I kept checking it over and over again, and eventually realized that it was my port connection that had been switched to something else for some reason!
![GSOKNw.png](https://imgpile.com/images/GSOKNw.png)

Then I experienced problems with the serial library not being recognized and connected, I currently don't even know why I connected to this library as tutirial
It says it doesn't exist!
![GSkKzN.png](https://imgpile.com/images/GSkKzN.png)
The wifi shows a different problem with the front end code so I've really been looking into what went wrong and
I did a lot of corrections and attempts and even searched for how to fix it, even used terminal and couldn't fix it!

Then I made some changes according to the tutorial.
But there is a problem that the port is not recognized.
I've been looking at my code over and over again and I don't know what's wrong with it!
![GSkMvW.png](https://imgpile.com/images/GSkMvW.png)

The way I think about it is
circleSize = map(a0.value, a0.min, a0.max, 0, width); // map the circle size based on the value of the photoresistor
hoping that I would change the size of the circle by the amount of light coming in through the photoresist.
So my earliest thought was
![GSki0L.png](https://imgpile.com/images/GSki0L.png)
![GSkc1x.png](https://imgpile.com/images/GSkc1x.png)

The logic I am thinking about is：

The Arduino code initializes the serial communication and then enters a loop.
In the loop, it keeps reading values from the A0 pin.
The p5.js code communicates with the Arduino via serial communication.
Once it receives the data, it parses the JSON and maps the sensor values to the background color and the size of the circle drawn on the screen.

This is the basic idea of my final, but I keep running into problems with SERIAL, so hopefully I can learn to fix it. Since I haven't tried it successfully myself, my video is a basic version of one I've just started doing.I didn't succeed in seeing my code run like this.

#Milestone Idea
I'm trying to generate a control that interacts with music and lights through sensor control, and I'm not sure if this idea is feasible. 

I want to combine our previous music visualization ideas, in the p5js part of the creation of a visual image of the music, and then to present the music waveform changes, or call some other library form to combine the music visualization, and then at the same time I don't know if it can be achieved, I want to let the Arduino to control the light flashing according to the music waveform. 

The general idea is to analyze the waveform, then the led blinks at the same time, or light up according to the order, or have time control, time delayed lighting. The user can switch between different light modes via potentiometers or buttons. 

chatgpt's idea is that the user can manipulate the music by changing the state of the sensors (e.g. blocking light or applying pressure).


[![GgIGQR.jpg](https://imgpile.com/images/GgIGQR.jpg)](https://imgpile.com/i/GgIGQR)

more IDEAS - 
1. 
Here I'm thinking about giving users the ability to directly intervene in the interactive effects of lights and music. I came up with this idea based on the photosensors I saw in class
For example, they could pause or change the tempo of the music by blocking the sensor with their hand
[![GgIx7g.jpg](https://imgpile.com/images/GgIx7g.jpg)](https://imgpile.com/i/GgIx7g)

2.
Based on what I've seen in class, I'm still thinking about what would happen if I used the p5js library to draw graphs based on the music by first using a computer, and then when the user covered the photoresistor or potentiometer with their hand, the waveform made a change or changed the pattern a little bit, and I don't know if that's feasible.
[![GgIDlr.jpg](https://imgpile.com/images/GgIDlr.jpg)](https://imgpile.com/i/GgIDlr)



#More
This code is my very first experience and I've encountered very many difficulties and problems
The code of my basic framework is this assignment submission, but relatively I want to change it to interact through the effect of lights.
I would like to have a photoresistor to control four led's, first I should need the p5.sound library to analyze the file waveforms
Need ArduinoJson for serial communication. p5.js for visualization.

The point is that the size of the circle is changed interactively by using the arduino to read the value. Here are the possibilities for interaction

My interaction is that first the page draws circles of the same size with music, then by changing the value of the photoresistor (the flash passes through), the circles that appear in the interface change to different sizes.
Then by changing the value of the photosensitive resistor (through the flash), the circles that appear on the interface become different sizes, and then at the same time the brightness of the led light decreases. Regarding the user experience, I think it could be done either by covering the photoresistor with your hand, or by using the flash.
covering the photoresistor, or by using a flash. If that fails, my backup plan may be to simplify the process or remove the light part.

The general idea is
Target users could be those interested in interactive art or educational tools.
Interaction involves altering light exposure to the photoresistor (using hands, flashlight, etc.) and observing changes on-screen and LED brightness .

This time I found a lot of difficulties in reading my libraries, I did it through wifi but I was reminded of the problem with my firewall settings that the ip is not uniform, but the serial libraries were never read.
But the serial library was never found. I changed it several times and it keeps reminding me
! [](https://imgpile.com/images/GgomYW.png)
Then the port issues came up, and these are things I need to learn or else it totally affects my assignments



![1.png](https://imgpile.com/images/GSP0KE.png)
![2.png](https://imgpile.com/images/GSPkIh.png)
![3.png](https://imgpile.com/images/GSPLWX.png)

I think this kind of human-computer interaction reminds me of the data visualization mentioned at one point, where I converted the photosensitivity to a visualization of the changes, with the circle size representing the value passed. I realize that light changes are hard for the human eye to see, but it makes more sense if I make it more intuitive to see the problem through simple geometric changes in size. Although it is only a change in light, I think this basic idea can be extended to more places. For example, for people who are not highly photosensitive, or for testing in some places. The significance for me is that I've been hoping to do some visualization, and I was hoping to add some music detection visualization per se, and this time I added light visualization (which is hard) but I hope it works.

![4.png](https://imgpile.com/images/GSPBeR.png)
![5.png](https://imgpile.com/images/GSPW2r.png)


#3
This week I'm going to do some further thinking based on my thoughts from last week
I have some new ideas, first I want them to generate circles of different sizes and then photosensitive to control the brightness of the background.
I want to be able to generate more circles if more light sources are recognized and vice versa.
(I have series of experimental videos use the similar effect in premiere, so I want to do something to connect with this project,if I could enlarge this project, it will be so cool if I could have a showroom with all of these and let audience to interact, so I planning to connect this with my project.
My project is an experiment on dreaming, where the circles represent the different faults that occur in the dream, and the realistic scenarios and error faults appear to prove the dividing line between dream and reality
)
![GZZye8.png](https://imgpile.com/images/GZZye8.png)
![GZZj2S.png](https://imgpile.com/images/GZZj2S.png)
![GZZeMC.png](https://imgpile.com/images/GZZeMC.png)

 - First I thought I needed a [] to store the circle properties let circles = []
 After that I set the serial communication to receiveSerial().

My board is still reading the A0 value, so the background color I read over here changes to a range array of cBackgroundColor = map(a0.value, a0.min, a0.max, 0, 255)
Worried about the screen being too full I changed the number of circles to a maximum of 30
Randomly generate for (let i = 0; i < circleCount; i++) the range of circles
Then after connectToSerial() you need to read some of the values.
Then the circle is ready to be drawn, then if the serial port is open and ready to receive data, the command to request data is sent.
If the serial port has data available, it receives and processes the data.

Occasionally the problem I have is that the mac reminds me that my usb is not connected.. (even though it did) but every time I unplug it and then plug it back in it's fine!

Because the general direction of the last time there is no change, so my ideas are still very clear, just add some map () of the idea to draw the circle
and then read the position according to the value of A0 to control the circle to read the degree of light through the effect I'm very satisfied，I'm wondering if there are any ideas or visual effects that needed to be improved?

I am planning to add a button to switch different pictures./ video 

![GZHeBi.jpg](https://imgpile.com/images/GZHeBi.jpg)
![GZHyuu.jpg](https://imgpile.com/images/GZHyuu.jpg)


#last upadate 4
Since I already had a basic completed frame last week, and since I was given the suggestion in class to switch my background into video, my main improvement this week was to switch to the video section

So I thought to add bgVideo = createVideo("video.mp4") to the background settings
But I wanted to have a playback effect, so I came up with the idea of loop

I took the middle section of my video and added an interactive element. I've participated in some graduation showrooms for visual communication majors in China before.
As a person whose graduation work was not shown, I was jealous, so when I was doing my final assignment for this year's motion.
I wondered if I could design an installation or a piece of artwork that my audience could interact with when they saw my graduation video.

The main theme of my video is "Can you tell the difference between the real and virtual worlds", which is one of my favorite works and one of the most meaningful to me. It is one of my favorite works and one of the most meaningful to me. Here I am thinking that if I give it to my audience to understand and interact with it, it may deepen their understanding of my video work and the corresponding fun.

When there are more light sources and more circles, I think it can be interpreted that when there is too much (more) human involvement, then the world is questioned more about rationality
or existence. The circles represent the bugs we encounter in the world, and the user can clearly see the difference in the picture, and can participate in my work by
together to complete the different images. I'm thinking of digital cities, our cities are digitally controlled and we are getting more and more computerized
The concept I had in mind was some geometric, code-controlled design of a malfunctioning city.
In the third part I added the element of the circle to simulate the style of the video glitch, so it occurred to me that if I receive the signal from the circle through the arduino signal transmitter
In my circle video was drawing different circles

Screenshot from the original video of the third production
![t4dCMj.png](https://imgpile.com/images/t4dCMj.png)
![t4dbf1.png](https://imgpile.com/images/t4dbf1.png)
![t4dTRP.png](https://imgpile.com/images/t4dTRP.png)
![t4ddBL.png](https://imgpile.com/images/t4ddBL.png)
![t4d9ux.png](https://imgpile.com/images/t4d9ux.png)

System diagram ，FSM diagram and Circuit diagram
![t4JIgC.jpg](https://imgpile.com/images/t4JIgC.jpg)
![t4J1mo.jpg](https://imgpile.com/images/t4J1mo.jpg)
![t4Jnbj.jpg](https://imgpile.com/images/t4Jnbj.jpg)

I used p5.js and p5.webserial for communication and I used a phototransistor connected to the A0 pin of the Arduino to generate an analog signal and the Arduino reads the analog value from the sensor and sends it to the front-end, and my java page dynamically generates and displays circles on the canvas based on the data received from the Arduino.





