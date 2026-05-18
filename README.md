# ZenSync

An online health companion for accessible mental and physical well-being support.

# Introduction

In today’s fast-paced world, getting quick guidance for mental and physical health can be difficult. Long wait times, cost barriers, and unclear online information often prevent people from understanding what they are experiencing or taking early steps toward care.

ZenSync is a web-based tool that helps users describe how they feel, emotionally or physically, and receive structured feedback. It includes mental health check-ins, symptom guidance, medication safety information, and nearby hospital availability with estimated crowd levels.

The aim is not to replace professional care, but to provide a simple first step for awareness, clarity, and direction.

# Requirements

## Hardware Requirements

Any modern device with a web browser (desktop, tablet, or mobile). No installation required.

## Software Requirements

* A modern web browser (Chrome, Firefox, Safari, Edge)
* Internet connection for analysis and hospital location data

## Functional Requirements / Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend Integration:** API-based structured response system
* **Geocoding:** Nominatim (OpenStreetMap)
* **Hospital Data:** OpenStreetMap Overpass API
* **Fonts:** Google Fonts (Instrument Serif, DM Sans)

# Features

## Mental Health Assistant

Users can describe their emotional state in free text and optionally select mood tags (Anxious, Stressed, Depressed, etc.). The system returns:

* Stress score from 1 to 10 with a level label
* Summary of emotional state
* Coping suggestions
* Guidance on when to seek professional support
* Therapist suggestions with basic details
* Crisis hotline recommendation when needed

## Symptom Checker

Users describe physical symptoms in plain language, with optional severity and duration. The system provides:

* Overview of possible causes
* Possible conditions with likelihood ratings
* Warning signs that require urgent care
* Self-care suggestions and guidance on timing for medical attention

## Medication Checker

Users enter one or more medications with optional context. The system provides:

* Drug information including uses and common side effects
* Interaction checks between medications with severity levels
* General safety guidance
* Advice on when to consult a healthcare professional

## Hospital Crowd Checker

Users enter a location or use GPS. The tool:

* Converts location into coordinates using Nominatim
* Finds nearby hospitals and clinics using OpenStreetMap data
* Expands search radius if needed
* Shows estimated crowd levels, wait times, and availability indicators based on time patterns

# Proposed Work

## System Design

All features follow a structured input and output format so results can be displayed consistently in the interface. Each module uses a defined response schema.

## Data Flow

```id="a1"
User Input
    │
    ▼
Processing Layer  ──►  Structured Response
    │
    ▼
Frontend Renderer  ──►  Result Cards and UI Components
```

For Hospital Crowd Checker:

```id="a2"
User Location Input
    │
    ├─► Geocoding Service  ──► Latitude and Longitude
    │
    └─► Hospital Data Query ──► Nearby facilities list
            │
            ▼
    Time-based estimation ──► Crowd level and wait time display
```

## Design Approach

Each module uses a strict format definition to ensure consistent outputs. Responses are designed to be clear, practical, and action oriented.

# Results

### Feature Summary

| Feature                 | Data Source   | Key Output                                         |
| ----------------------- | ------------- | -------------------------------------------------- |
| Mental Health Assistant | User input    | Stress score, coping guidance, support suggestions |
| Symptom Checker         | User input    | Possible conditions, warning signs, urgency level  |
| Medication Checker      | User input    | Side effects, interaction warnings, safety advice  |
| Hospital Crowd Checker  | OpenStreetMap | Crowd level, wait time, nearby facilities          |

### Sample Mental Health Score Output

| Input Mood                           | Score | Level       |
| ------------------------------------ | ----- | ----------- |
| Overwhelmed, sleepless, disconnected | 7/10  | High stress |
| Mild anxiety about exams             | 4/10  | Mild stress |
| Calm but slightly fatigued           | 2/10  | Low stress  |

### Sample Symptom Urgency Output

| Symptoms                        | Recommendation        |
| ------------------------------- | --------------------- |
| Headache, stiff neck, fever     | Seek urgent care      |
| Mild cough for 2 days           | Monitor and rest      |
| Chest pain, shortness of breath | Emergency care needed |

# Conclusion

Health tools should be simple, accessible, and easy to understand. ZenSync helps users interpret symptoms, emotions, and medication concerns in a structured way so they can take informed next steps.

The system combines multiple utilities into a single interface for clarity and convenience.

Future improvements could include:

* Mood tracking over time
* Multilingual support
* Better real-time hospital data integration
* Accessibility improvements
* Personalized follow-ups

# Status

Completed v1.0

---

Disclaimer: This tool provides general guidance only and does not replace professional medical or psychological advice. In emergencies, contact local emergency services immediately.


## Live Demo
[Zensync](https://zensync-nine.vercel.app/)

## My Hackathon Journey
I documented the full development process of ZenSync, challenges faced, and how the idea evolved during the hackathon.
Read [here](https://medium.com/@pournamyps9c/a-last-minute-leap-my-hackathon-experience-cb6dcd447853)
