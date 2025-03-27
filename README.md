# Guardian Mesh: Autonomous Cybersecurity for IoT Networks

## 1. Introduction

The rapid expansion of the Internet of Things (IoT) has led to increased connectivity across industries, enabling automation and efficiency. However, the heterogeneity, resource limitations, and lack of standard security measures in IoT networks make them susceptible to cyber threats such as Distributed Denial-of-Service (DDoS) attacks, unauthorized access, and eavesdropping.

**Guardian Mesh** is an autonomous cybersecurity framework designed to secure IoT networks through real-time monitoring, anomaly detection, and automated threat mitigation. By leveraging real-time packet inspection, intelligent threat isolation, and recovery mechanisms, Guardian Mesh ensures minimal downtime and resource efficiency in heterogeneous IoT environments.

---

## 2. System Architecture and Design

Guardian Mesh follows a three-tier hierarchical architecture:

### A. Edge Layer
- Serves as the primary interface with IoT devices.
- Uses Docker containers with minimal Debian OS for simulation.
- Implements a custom network (`hackathon_my_network`) with unique MAC address assignment for each node.

### B. Processing Layer
- Implements real-time traffic inspection and anomaly detection.
- Uses Python-based packet analysis for metadata extraction.
- Employs statistical deviation analysis for threat detection.

### C. Management Layer
- Provides administrative control via Flask.
- Maintains logging mechanisms for post-incident analysis and system optimization.
- Ensures continuous authentication and strict access control policies.

---

## 3. Core Functional Components

### A. Traffic Monitoring Subsystem
- Captures network packets using Python’s socket library.
- Extracts MAC addresses, packet lengths, and protocol details.
- Maintains real-time statistics using optimized data structures.

### B. Anomaly Detection Mechanism
- Establishes behavioral baselines using historical traffic data.
- Implements threshold-based detection with statistical modeling.
- Triggers automated responses upon detecting deviations from normal traffic patterns.

### C. Threat Isolation and Recovery
- Uses MAC-based traffic control for isolating compromised nodes.
- Generates dynamic firewall rules upon anomaly detection.
- Implements automated rehabilitation procedures after threat mitigation.

---

## 4. Experimental Setup and Validation

### A. Simulation Environment
- Deployed a three-node IoT simulation using Docker containers.
- Configured each node with network monitoring tools and security policies.
- Implemented Flask APIs for dynamic security enforcement.

### B. Attack Scenarios
- Simulated various cyber threats using `hping3`, including:
  - **SYN flood attacks**
  - **UDP flood attacks**
  - **Protocol-specific exploitation**
- Evaluated system response under different threat intensities.

### C. Performance Metrics
- **Detection Latency:** Identifies anomalies within 1 second.
- **Resource Status:** CPU and RAM utilization.

---

## 5. System Operations and Workflow

### A. Initialization Protocol
- Configures network interfaces and security policies.
- Deploys containerized nodes with predefined monitoring mechanisms.
- Establishes baseline metrics for normal traffic behavior.

### B. Runtime Operation
- Continuously captures and analyzes packet flow in real time.
- Compares incoming traffic against established baselines.
- Implements automated security measures upon detecting anomalies.
- Logs all security-related events for future analysis.

---

## 6. Key Findings and Impact

- Guardian Mesh effectively detects in real time with minimal false positives.
- The system ensures low-latency response times while maintaining network stability.
- Its lightweight deployment model ensures compatibility with diverse IoT ecosystems.
- The framework enhances scalability, security, and resilience of IoT networks.

---

## 7. Conclusion and Future Work

Guardian Mesh provides an autonomous, efficient, and scalable cybersecurity framework for IoT networks. Future enhancements may include:

- **Enhanced Logging & Forensics:** Developing advanced analytics for incident investigation.
- **Cross-Platform Compatibility:** Expanding the framework to support additional IoT protocols.
