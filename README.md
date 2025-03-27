# **Guardian Mesh: Autonomous Cybersecurity for IoT Networks**  

## **Introduction**  

With the rapid expansion of the **Internet of Things (IoT)**, industries have embraced **smart automation and interconnected devices** to enhance efficiency. However, these networks are increasingly vulnerable to cyber threats such as:  

- **Distributed Denial-of-Service (DDoS) attacks**  
- **Unauthorized access** and device hijacking  
- **Eavesdropping & data interception**  

### **Why is IoT Security Challenging?**  

IoT devices are often **resource-constrained** (low-power CPUs, limited memory) and **heterogeneous** (different communication protocols, vendors, and security models). Traditional security solutions designed for enterprise networks are **too heavy** for IoT environments.  

**Guardian Mesh** is an autonomous cybersecurity framework that provides:  

✔️ **Real-time monitoring** of network traffic  
✔️ **Anomaly detection** using statistical models  
✔️ **Automated threat mitigation** with **intelligent isolation & recovery mechanisms**  

By leveraging **real-time packet inspection, dynamic threat isolation, and self-healing capabilities**, Guardian Mesh ensures that IoT networks remain **secure, resilient, and efficient**.  

---

## **System Architecture**  

Guardian Mesh is built on a **three-tier hierarchical architecture**, ensuring **modularity, scalability, and efficiency**.  

### **1️⃣ Edge Layer (Device-Level Security)**  

- Acts as the **primary interface** between IoT devices and the security framework.  
- Uses **Docker containers** with a **lightweight Debian OS** to simulate IoT environments.  
- Implements a **custom virtual network (`hackathon_my_network`)** where each device is assigned a **unique MAC address** for identification.  

### **2️⃣ Processing Layer (Traffic Analysis & Anomaly Detection)**  

- **Continuously monitors** network traffic for unusual patterns.  
- Uses **Python-based packet sniffing** to extract critical metadata (source/destination MAC, packet size, protocol type).  
- Implements **statistical deviation analysis** to detect anomalies.  

### **3️⃣ Management Layer (Control & Response)**  

- Provides a **Flask-based administrative dashboard** for security monitoring.  
- Logs security events for **post-incident forensics** and optimization.  
- Enforces **strict access control & authentication policies**.  

---

## **Core Functional Components**  

### **🔍 1. Traffic Monitoring Subsystem**  

- Uses Python’s `socket` and `scapy` libraries to **capture real-time network packets**.  
- Extracts essential metadata for **traffic profiling and threat detection**.  
- Uses **optimized data structures (e.g., dictionaries, Bloom filters)** for fast lookups.  

### **🧠 2. Anomaly Detection Mechanism**  

- Establishes **baselines of normal traffic** using historical data.  
- Uses **threshold-based detection** with **statistical models (Z-score, moving averages, entropy analysis)** to detect anomalies.  
- Triggers an **automated response** upon deviation from normal patterns.  

### **🚨 3. Threat Isolation & Recovery**  

- Uses **MAC-based traffic control** to isolate compromised nodes dynamically.  
- Generates **firewall rules in real-time** (e.g., `iptables` or `ufw`) to block malicious traffic.  
- Implements **self-healing mechanisms** to allow **automated recovery** after a threat is neutralized.  

---

## **🛠️ Experimental Setup and Validation**  

### **1️⃣ Simulation Environment**  

- Deployed a **three-node IoT simulation** using **Docker containers**.  
- Configured each node with:  
  - Network monitoring tools (`tcpdump`, `scapy`)  
  - Predefined security policies  
  - Flask APIs for dynamic security enforcement  

### **2️⃣ Attack Scenarios (Cyber Threat Simulations)**  

We evaluated Guardian Mesh by simulating real-world cyberattacks using `hping3` to generate malicious traffic. Attack scenarios included:  

| Attack Type | Description | Guardian Mesh Response |
|------------|-------------|----------------------|
| **SYN Flood** | Overwhelms a device with fake connection requests. | Detects anomaly via high TCP SYN counts & blocks the attacker's MAC. |
| **UDP Flood** | Floods the target with UDP packets, causing high resource usage. | Detects excessive UDP traffic & dynamically blocks the source. |
| **Protocol Exploitation** | Malformed packets target IoT-specific protocols (MQTT, CoAP). | Identifies suspicious patterns & enforces stricter protocol filtering. |

### **3️⃣ Performance Metrics**  

| Metric | Value | Explanation |
|--------|------|-------------|
| **Detection Latency** | < 1 second | Identifies anomalies in real time. |
| **False Positive Rate** | < 5% | Optimized detection models ensure minimal misclassification. |
| **CPU Usage** | < 10% | Lightweight processing ensures minimal impact on IoT devices. |

---

## **🔄 System Operations and Workflow**  

### **📌 1. Initialization Protocol**  

1. Configures **network interfaces & security policies**.  
2. Deploys **containerized IoT nodes** with monitoring agents.  
3. Establishes **baseline traffic metrics** for anomaly detection.  

### **⚡ 2. Runtime Operation**  

1. Captures **real-time packet flow** using Python-based sniffers.  
2. Analyzes traffic **against historical baselines**.  
3. **Triggers security measures** upon detecting anomalies.  
4. Logs **all security events** for future investigation.  

---

## **🛡️ Key Findings & Impact**  

✔️ **Guardian Mesh detects threats in real time with minimal false positives.**  
✔️ **Ensures low-latency response times while maintaining network stability.**  
✔️ **Lightweight deployment model ensures compatibility with diverse IoT ecosystems.**  
✔️ **Enhances scalability, security, and resilience of IoT networks.**  

---

## **🚀 Future Enhancements**  

1. **🔎 Advanced Logging & Forensics**:  
   - Implement **AI-driven analytics** for incident investigation.  
   - Store logs in **distributed databases** for long-term threat analysis.  

2. **🌍 Cross-Platform Compatibility**:  
   - Expand support for **MQTT, CoAP, and Zigbee** IoT protocols.  
   - Optimize detection models for **battery-powered IoT devices**.  

---

## **📥 Installation & Usage**  

### **🔧 Prerequisites**  
Ensure you have:  
- **Docker** installed  
- **Python 3.x**  
- Required libraries installed:  
  ```bash
  pip install flask scapy numpy
