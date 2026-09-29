# MAATI — AI-Powered Multilingual Precision Agriculture & Smart Irrigation Platform

> **Smart India Hackathon 2026**  
> **Problem Statement ID:** SIH26180  
> **Theme:** Smart Farming Assistance  
> **Category:** Hardware  
> **Team:** MAATI  

---

## 🌾 Overview

**MAATI** is an edge-first precision agriculture and closed-loop smart irrigation platform designed for Indian smallholder farms. It connects physical soil and microclimate sensors, crop canopy vision (ESP32-CAM), hyperlocal weather intelligence, and on-device AI heuristics to transform raw field telemetry into automated irrigation and multilingual farmer advisories.

🌐 **Live Portfolio Website:** [`index.html`](index.html) *(Deployable directly via GitHub Pages)*

---

## 🛠️ The 8 Hardware Prototype Components

| # | Component | Functional Role | Purpose in MAATI |
|---|---|---|---|
| **01** | **FC-28 / YL-69** | Soil Moisture Sensor | Direct volumetric root-zone soil water monitoring. |
| **02** | **DHT11** | Environmental Sensor | Ambient temperature and humidity for vapor pressure deficit (VPD) modeling. |
| **03** | **Rain Sensor** | Precipitation Detection | Instant physical rain detection to avoid unnecessary watering. |
| **04** | **LDR Module** | Canopy Light Sensor | Measures solar irradiance for diurnal watering optimization. |
| **05** | **ESP32 Dev Board** | Central Field Controller | Sensor interface, local filtering, and TinyML decision heuristics. |
| **06** | **ESP32-CAM** | Crop Vision Node | 2MP optical capture of foliage for foliar stress analysis. |
| **07** | **5V Relay Module** | Actuation Bridge | Optocoupled galvanic isolation switching pump power safely. |
| **08** | **DC Micro-Pump** | Water Delivery Actuator | Automated physical water delivery into drip lines. |

---

## 🔄 The Closed-Loop Flow

```text
FIELD → SENSORS → ESP32 / ESP32-CAM → AI / DATA FUSION → DECISION → RELAY → PUMP → FIELD → NEW SENSOR DATA (↺)
```

1. **SENSE:** ESP32 reads soil moisture, temperature, humidity, rain, and light.
2. **SEE:** ESP32-CAM captures leaf canopy images for optical stress markers.
3. **ANALYZE:** AI fuses sensor readings + camera diagnostics + 48h weather forecasts.
4. **DECIDE:** Intelligence engine computes action: `IRRIGATE`, `DELAY`, `ALERT`, or `INSPECT`.
5. **ACT:** 5V relay engages water pump & dispatches multilingual SMS/IVR.
6. **VERIFY:** System monitors moisture rise in real-time and cuts pump power upon reaching optimal field capacity.

---

## ⚡ Offline-First Architecture

- **Online Mode:** Live telemetry & leaf images stream to Supabase PostgreSQL cloud.
- **Offline Mode:** ESP32 operates autonomously using local TinyML heuristics and buffers telemetry in flash/EEPROM.
- **Reconnection:** Automatic batch catch-up sync to cloud when cellular connectivity returns.

---

## 🗣️ Multilingual Farmer Advisory
Supports **English**, **हिंदी (Hindi)**, and **ଓଡ଼ିଆ (Odia)** across Smartphones (Web Dashboard), Feature Button Phones (SMS/IVR), and Autonomous Edge nodes.

---

## 🚀 How to Host on GitHub Pages

1. Push all files to your repository:
   - `index.html` *(main website entry point)*
   - `styles.css`
   - `script.js`
   - `assets/` *(hardware images)*
   - `README.md`
2. In your GitHub repository, go to **Settings &rarr; Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your portfolio website will be live in ~1 minute!
