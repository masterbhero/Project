#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define FIREBASE_HOST "watercontrol-96fed.firebaseio.com"
#define FIREBASE_AUTH "uKs2kwgDS5i98nEBvgcLqKDEawHt58tTssvKK0ob"
#define WIFI_SSID "PlagueKnight"
#define WIFI_PASSWORD "boongasdf_1234"

#define echoPin D7 // Echo Pin
#define trigPin D6 // Trigger Pin
 
long duration, distance; // Duration used to calculate distance
 
void setup()
{
Serial.begin (115200);

pinMode(4,OUTPUT);
pinMode(trigPin, OUTPUT);
pinMode(echoPin, INPUT);

WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}
 
void loop()
{
/* The following trigPin/echoPin cycle is used to determine the
distance of the nearest object by bouncing soundwaves off of it. */
digitalWrite(trigPin, LOW);
delayMicroseconds(2);
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);
duration = pulseIn(echoPin, HIGH);
//Calculate the distance (in cm) based on the speed of sound.
distance = duration/58.2;
Serial.println(distance);
if(distance < 2000){
  Firebase.setFloat("waterrealtime", distance);
  Firebase.pushInt("water", distance);
}
if(distance <= 15){
      digitalWrite(4,HIGH);
    }else if(distance >= 20){
      digitalWrite(4,LOW);
    }
//Delay 50ms before next reading.
delay(100);
}
