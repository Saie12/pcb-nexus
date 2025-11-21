import { mutation } from "./_generated/server";

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing projects
    const existing = await ctx.db.query("projects").collect();
    for (const project of existing) {
      await ctx.db.delete(project._id);
    }

    // Add sample projects
    const projects = [
      {
        title: "Cellular-Enabled STM32 GPS Asset Tracker",
        slug: "cellular-enabled-stm32-gps-asset-tracker",
        summary: "A compact, robust hardware platform for real-time asset tracking integrating STM32 microcontroller with GPS/GNSS and GSM cellular modules. Designed for vehicle tracking, fleet management, and high-value asset monitoring with 12V power input.",
        heroImage: "https://harmless-tapir-303.convex.cloud/api/storage/32615aed-c452-430e-8b30-6bb97de5df82",
        featured: true,
        technologies: ["STM32", "GPS/GNSS", "GSM/GPRS", "4-Layer PCB", "KiCad", "SPI", "I2C", "UART", "RF Design", "50-Ohm Impedance"],
        concept: "This project is a compact, robust, and feature-rich hardware platform for real-time asset tracking. At its core, it integrates a powerful STM32 microcontroller with dedicated GPS/GNSS and GSM cellular modules. The device is designed to acquire precise location coordinates from satellite systems and transmit this data, along with any additional sensor readings, to a remote server over the cellular network. Engineered for reliability in mobile environments, the board accepts a wide-range 12V power input, making it ideal for vehicle tracking, fleet management, and high-value asset monitoring. The inclusion of standard peripheral interfaces like SPI and I2C allows for future expansion with sensors such as accelerometers or temperature probes, enabling more sophisticated applications like driver behavior monitoring or cold chain logistics.",
        layoutStrategy: "The architecture is centered around the STM32 MCU which interfaces with the GPS module over UART to receive NMEA sentences and manages the GSM modem using AT commands for data transmission. The decision to use a 4-layer PCB was critical for ensuring signal integrity and mitigating noise in this mixed-signal RF design. The two most critical RF subsystems are the GPS and GSM antennas - both require 50-ohm controlled impedance transmission lines to ensure maximum signal power transfer. A full 6-pin SIM card interface is implemented with power, clock, data, reset, and card presence detection. The current stackup defines all four layers as signal, but a superior stackup would be Signal-Ground-Power-Signal, dedicating an entire inner layer to be a solid, uninterrupted ground plane for low-inductance return paths and improved EMI/EMC performance.",
        challenges: "The primary challenge was ensuring RF performance and signal integrity for both the GPS and GSM subsystems. The GPS_ANT and GSM_ANT traces must be routed as 50-ohm controlled impedance transmission lines to maximize signal power transfer from the antennas to the sensitive receivers. Component placement was critical - the GPS and GSM modules needed to be as close as possible to their respective antenna connectors to minimize transmission line losses. Another key challenge was managing the mixed-signal environment with sensitive RF sections alongside switching power regulation circuitry. The recommendation for future revisions is to implement a Signal-Ground-Power-Signal stackup with a dedicated solid ground plane to significantly improve RF reliability and EMI/EMC performance.",
        schematicImage: "https://harmless-tapir-303.convex.cloud/api/storage/3a88210c-b4be-40e0-8ea3-447672a727b6",
        pcbLayoutImages: [
          "https://harmless-tapir-303.convex.cloud/api/storage/46121b6c-a850-4ce2-a8c4-3cfcfc51db6c",
          "https://harmless-tapir-303.convex.cloud/api/storage/0725169e-10e0-4c43-9adf-57b3e53bbbbf",
          "https://harmless-tapir-303.convex.cloud/api/storage/54407332-879e-4980-b3b2-3242784de436",
          "https://harmless-tapir-303.convex.cloud/api/storage/6a1c0853-cf21-40c5-b1ec-db13b34cc2cb"
        ],
        view3dImages: [
          "https://harmless-tapir-303.convex.cloud/api/storage/af2b5d6e-315d-41f5-90d1-de593b02cd79",
          "https://harmless-tapir-303.convex.cloud/api/storage/212d2b11-28b4-4a24-b1ce-a68490113b1c"
        ],
        layoutImages: [],
        githubUrl: "https://github.com/Saie12/KICAD-STM32-GPS-Tracker-Project/tree/main",
        order: 1,
      },
      {
        title: "ESP32 Dual-Relay Wi-Fi Smart Switch for Home Automation",
        slug: "esp32-dual-relay-wifi-smart-switch",
        summary: "A versatile and open-source smart switch designed for home automation applications. Centered around the ESP32 module, this board provides Wi-Fi control over two independent high-voltage AC appliances, prioritizing safety, reliability, and ease of use for DIY enthusiasts and developers.",
        heroImage: "https://harmless-tapir-303.convex.cloud/api/storage/be36e437-1a05-4427-a718-75b893ec6172",
        featured: true,
        technologies: ["ESP32", "Wi-Fi", "Bluetooth", "Relay Control", "2-Layer PCB", "KiCad", "ESPHome", "Tasmota", "Home Assistant", "UART"],
        concept: "This project is a versatile and open-source smart switch designed for home automation applications. Centered around the powerful ESP32 module, this board provides Wi-Fi control over two independent high-voltage AC appliances, such as lights, fans, or power outlets. The design prioritizes safety, reliability, and ease of use, making it an ideal platform for DIY enthusiasts and developers looking to create custom smart home solutions. By leveraging popular open-source firmware like ESPHome or Tasmota, this switch can be seamlessly integrated into existing smart home ecosystems like Home Assistant, offering robust local control without reliance on proprietary cloud services.\n\n**System Architecture & Control Flow**\n\nThe operational logic is straightforward yet robust. The ESP32 module connects to the local Wi-Fi network and awaits commands. When a command is received (e.g., via MQTT or a web request), the ESP32 toggles a specific GPIO pin. Because the GPIO pins cannot supply the current needed to activate a relay coil, the signal is fed to the base of a transistor. This transistor acts as a digital switch, allowing current to flow from the 5V rail through the relay's coil to ground, energizing the electromagnet. This action mechanically closes the relay's high-voltage contacts, completing the AC circuit and powering the connected appliance. Flyback diodes are placed in parallel with the relay coils to safely dissipate the voltage spike generated when the coil is de-energized, protecting the driver transistors.",
        layoutStrategy: "The 2-layer PCB layout was designed with electrical isolation as the highest priority. Handling mains voltage requires a meticulous approach to safety:\n\n* **Physical Separation:** The board is clearly divided into a low-voltage DC section and a high-voltage AC section. All AC traces are kept on one side of the board, physically distant from the sensitive DC logic.\n\n* **Isolation Slotting (Creepage):** To prevent current from 'creeping' across the PCB surface between the high and low voltage sides, physical cutouts or slots in the PCB are often used under the relays. This significantly increases the isolation distance and is a critical safety feature.\n\n* **Ground Plane:** The low-voltage section utilizes a large ground plane on the bottom copper layer. This ensures a stable 0V reference for the ESP32 and minimizes noise, leading to reliable operation. The high-voltage section does not have a ground plane to prevent fault currents from flowing where they shouldn't.",
        challenges: "The primary challenge was ensuring electrical safety when handling mains voltage on a PCB. The design required careful attention to creepage distances, isolation slots, and physical separation between high-voltage AC traces and low-voltage DC logic. Component placement was critical to maintain proper isolation while keeping the board compact. Another challenge was implementing reliable relay driver circuitry with proper flyback protection to prevent voltage spikes from damaging the ESP32. The inclusion of BOOT and EN buttons alongside the UART header allows for one-click flashing using standard USB-to-serial adapters, making the development cycle fast and efficient. On-board LEDs provide immediate visual feedback on the status of each relay.",
        schematicImage: "https://harmless-tapir-303.convex.cloud/api/storage/62642bc6-fc31-4238-8075-e179ad394587",
        pcbLayoutImages: [
          "https://harmless-tapir-303.convex.cloud/api/storage/a6b41efb-b5f4-4738-8f08-f0605eeb678c",
          "https://harmless-tapir-303.convex.cloud/api/storage/e6ec72c3-ef7d-439a-bc67-12571ba06ad7"
        ],
        view3dImages: [
          "https://harmless-tapir-303.convex.cloud/api/storage/be36e437-1a05-4427-a718-75b893ec6172",
          "https://harmless-tapir-303.convex.cloud/api/storage/dc5d2379-ab89-429c-8c8d-ad79f0989957"
        ],
        layoutImages: [],
        githubUrl: "https://github.com/Saie12/KiCAD-Home-Automation-with-ESP32-Project",
        order: 2,
      },
      {
        title: "High-Speed Ethernet Interface",
        slug: "high-speed-ethernet-interface",
        summary: "6-layer PCB design for Gigabit Ethernet with STM32F746NGH6 and DP83867IRPAPT PHY, featuring advanced signal integrity techniques.",
        heroImage: "https://harmless-tapir-303.convex.cloud/api/storage/996933d0-bf85-4b21-851c-1c865881c026",
        featured: true,
        technologies: ["KiCad", "6-Layer PCB", "Gigabit Ethernet", "STM32F746NGH6", "DP83867IRPAPT", "Differential Pairs", "EMI/EMC", "RGMII", "C"],
        concept: "Designed a robust Gigabit Ethernet interface board using the STM32F746NGH6 microcontroller with integrated MAC and an external PHY (DP83867IRPAPT). The STM32F746NGH6 features an ARM Cortex-M7 core running at 216 MHz with Ethernet MAC supporting 10/100/1000 Mbps. The DP83867IRPAPT is a robust, low power, fully featured Physical Layer transceiver with integrated PMD sublayers to support 10BASE-Te, 100BASE-TX and 1000BASE-T Ethernet protocols. The goal was to create a reliable Gigabit Ethernet connection with proper EMI mitigation for industrial environments.",
        layoutStrategy: "Implemented a 6-layer stack-up optimized for high-speed signals: Top Signal - GND - Signal - Power - GND - Bottom Signal. The RGMII interface between STM32F746NGH6 and DP83867IRPAPT requires careful routing with matched trace lengths and controlled impedance. The Ethernet differential pairs (TX+/TX-, RX+/RX-) were routed as 100-ohm controlled impedance with matched lengths within 50 mils. Used ground plane cutouts strategically to control impedance and minimize crosstalk. The magnetics module was placed close to the RJ45 connector with proper isolation. Special attention was paid to the high-speed RGMII signals operating at 125 MHz for Gigabit operation.",
        challenges: "The main challenge was meeting EMC requirements for Gigabit Ethernet in industrial environments. The DP83867IRPAPT PHY requires precise power supply sequencing and decoupling. I implemented a comprehensive EMI mitigation strategy including: ferrite beads on power lines, proper grounding with star topology, shielding on critical traces, and careful component placement to minimize loop areas. All high-speed RGMII signals were kept away from board edges and properly terminated. The STM32F746NGH6's RGMII interface timing requirements demanded careful trace length matching and impedance control to ensure reliable Gigabit operation.",
        schematicImage: "https://harmless-tapir-303.convex.cloud/api/storage/6a487f85-56cd-4b24-8655-db5be0addea6",
        pcbLayoutImages: [
          "https://harmless-tapir-303.convex.cloud/api/storage/d9035d29-098b-440d-89dd-2d254fca6e34",
          "https://harmless-tapir-303.convex.cloud/api/storage/bbd8e92a-d6fd-4c5a-adbe-325ed85083a4"
        ],
        view3dImages: [
          "https://harmless-tapir-303.convex.cloud/api/storage/996933d0-bf85-4b21-851c-1c865881c026",
          "https://harmless-tapir-303.convex.cloud/api/storage/b2e78c57-7a52-4da3-a909-223c34e3db8a"
        ],
        layoutImages: [],
        githubUrl: "https://github.com",
        order: 3,
      },
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    return { success: true, count: projects.length };
  },
});