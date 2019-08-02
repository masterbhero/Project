

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>


#define FIREBASE_HOST "watercontrol-96fed.firebaseio.com"
#define FIREBASE_AUTH "uKs2kwgDS5i98nEBvgcLqKDEawHt58tTssvKK0ob"
#define WIFI_SSID "voraporn1"
#define WIFI_PASSWORD "12345678"

void setup() {
  Serial.begin(115200);

  // connect to wifi.
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

int n = 0;

void loop() {

  Firebase.pushInt("id" , 0);
  Firebase.pushInt("leak" , 0);
  Firebase.pushInt("water" , 0);
  
  delay(10000);

}





