import json

def process_telemetry(message):
    data = json.loads(message)
    if data['engine_temp'] > 100:
        print("Warning: High engine temperature detected!")
    return data

# Simulate receiving telemetry data from IoT Hub or sensors
message = '{"engine_temp": 105, "speed": 60}'
processed_data = process_telemetry(message)
print(processed_data)
