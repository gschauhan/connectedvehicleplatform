import { Controller, Post, Param } from '@nestjs/common';

@Controller('vehicles')
export class AppController {
  @Post(':vehicleId/lock')
  lockVehicle(@Param('vehicleId') vehicleId: string): string {
    // Logic to send lock command to IoT Hub via Azure Service Bus or MQTT
    return `Lock command sent to vehicle ${vehicleId}`;
  }
}
