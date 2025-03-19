# Connected Vehicle Platform

This repository contains the source code and infrastructure for the Connected Vehicle Platform. The platform enables real-time telemetry ingestion, predictive maintenance, remote command execution, and secure OTA updates.

---

## **Features**
- Real-time telemetry processing using Azure IoT Hub and Stream Analytics.
- Predictive maintenance with Azure Machine Learning.
- Secure remote command execution (e.g., lock/unlock/start).
- Observability with Azure Monitor and Log Analytics.
- Multi-region scalability with AKS and MongoDB Atlas.

---

## **Repository Structure**
- `infrastructure`: Scripts for provisioning Azure resources.
- `backend`: Microservices for API gateway, vehicle commands, and telemetry processing.
- `edge`: IoT Edge modules for local processing.
- `frontend`: Web dashboard and mobile app source code.
- `machine-learning`: ML pipelines for predictive maintenance and anomaly detection.
- `monitoring-and-alerting`: Observability stack configurations.

connected-vehicle-platform <br/>
│<br/>
├── README.md                # Solution configuration guide<br/>
├── .gitignore               # Git ignore file for sensitive files and build artifacts<br/>
├── LICENSE                  # License information (optional)<br/>
│<br/>
├── infrastructure/          # Infrastructure as Code (IaC) scripts<br/>
│   ├── terraform/           # Terraform scripts for Azure resources<br/>
│   └── arm-templates/       # ARM templates for Azure services provisioning<br/>
│<br/>
├── backend/                 # Backend microservices<br/>
│   ├── api-gateway/         # API Gateway service (e.g., NestJS with Azure API Management)<br/>
│   ├── vehicle-service/     # Microservice handling vehicle commands (lock/unlock/start)<br/>
│   └── telemetry-service/   # Microservice for telemetry ingestion and processing<br/>
│<br/>
├── edge/                    # Edge computing modules<br/>
│   ├── iot-edge-modules/    # Azure IoT Edge modules (e.g., telemetry preprocessing)<br/>
│   └── firmware-updater/    # Module for OTA firmware updates<br/>
│<br/>
├── frontend/                # Frontend applications<br/>
│   ├── web-app/             # Web dashboard (React or Next.js)<br/>
│   └── mobile-app/          # Mobile app (React Native)<br/>
│<br/>
├── machine-learning/        # ML models and pipelines<br/>
│   ├── predictive-maintenance/  # Predictive maintenance models (Azure ML pipelines)<br/>
│   └── anomaly-detection/       # Anomaly detection models (Time Series Insights)<br/>
│<br/>
├── monitoring-and-alerting/ # Observability stack configurations<br/>
│   ├── azure-monitor/       # Azure Monitor and Log Analytics queries<br/>
│   └── prometheus-grafana/  # Prometheus + Grafana dashboards (optional)<br/>
│<br/>
└── tests/                   # Test cases for different components<br/>
    ├── unit-tests/<br/>
    ├── integration-tests/<br/>
    └── e2e-tests/<br/>

---

## **Prerequisites**
1. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for backend/frontend development.
2. Install [Python](https://www.python.org/) for IoT Edge modules.
3. Install [Terraform](https://www.terraform.io/) or use ARM templates for infrastructure deployment.
4. Set up an Azure account with the following services:
   - Azure IoT Hub
   - Azure Stream Analytics
   - Azure Key Vault

---

## **Getting Started**

### **1. Clone the Repository**
git clone https://github.com/<your-org>/connected-vehicle-platform.git
cd connected-vehicle-platform/


### **2. Deploy Infrastructure**
Navigate to the `infrastructure` folder and deploy resources:

cd infrastructure/terraform/
terraform init
terraform apply -var-file=variables.tfvars


### **3. Run Backend Services**
Navigate to the backend service directory:

cd backend/vehicle-service/
npm install
npm run start:dev


### **4. Run Frontend Applications**
Navigate to the mobile app directory:

cd frontend/mobile-app/
npm install
npm start


### **5. Deploy IoT Edge Modules**
Build and deploy IoT Edge modules:

cd edge/iot-edge-modules/preprocessor/
docker build -t telemetry-preprocessor .
az iot edge set-modules --device-id <device-id> --hub-name <iot-hub-name> --content ./deployment.json



## **Configuration**
Update environment variables in `.env` files located in each service folder:<br/>
AZURE_IOT_HUB_CONNECTION_STRING=<your-iot-hub-connection-string><br/>
AZURE_KEY_VAULT_URI=<your-key-vault-uri><br/>
MONGO_DB_CONNECTION_STRING=<your-mongo-db-uri><br/>


---

## **Testing**
Run unit tests:
cd tests/e2e-tests/
npm run test:e2e


