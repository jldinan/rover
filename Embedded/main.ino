#include <ArduinoJson.h>

const int PROGRAM_CYCLE_DELAY = 5000;
const int BAUD_RATE = 9600;

void initializeHardware();
void startSerialConnection();
StaticJsonDocument<200> getEnvironmentalData();
void sendJsonOverSerial(const StaticJsonDocument<200>& jsonDoc);
float getTemperature();
float getHumidity();
String getGUID();

void setup() {
  initializeHardware();
}

void loop() {
  StaticJsonDocument<200> jsonDoc = getEnvironmentalData();
  sendJsonOverSerial(jsonDoc);
  delay(PROGRAM_CYCLE_DELAY);  
}

void initializeHardware() {
  pinMode(LED_BUILTIN, OUTPUT);  
  randomSeed(analogRead(0));
  startSerialConnection();  
}

void startSerialConnection(){
  Serial.begin(BAUD_RATE);
  delay(1000);
}

StaticJsonDocument<200> getEnvironmentalData(){
  StaticJsonDocument<200> jsonDoc;
  jsonDoc["id"] = getGUID();
  jsonDoc["temperature"] = getTemperature();
  jsonDoc["humidity"] = getHumidity();
  return jsonDoc;
}

void sendJsonOverSerial(const StaticJsonDocument<200>& jsonDoc){
  String jsonString;
  serializeJson(jsonDoc, jsonString);
  Serial.println(jsonString);
}

float getTemperature(){
  float temperature = random(200, 300) / 10.0;
  return temperature;
}

float getHumidity(){
  float humidity = random(30, 81);    
  return humidity;
}

String getGUID() {
  String guid = String(millis(), HEX);
  for (int i = 0; i < 3; i++) {
    guid += String(random(0x1000, 0xFFFF), HEX);
  }
  guid.toUpperCase();
  return guid;
}