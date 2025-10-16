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
        title: "IoT Environmental Monitor",
        slug: "iot-environmental-monitor",
        summary: "Compact 4-layer IoT device for monitoring environmental data with USB 2.0 high-speed interface and low-power management.",
        heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        featured: true,
        technologies: ["KiCad", "4-Layer PCB", "USB 2.0", "PIC Microcontroller", "C++", "Impedance Control", "SPI"],
        concept: "This project aimed to create a compact environmental monitoring device capable of measuring temperature, humidity, and air quality. The PIC18F microcontroller was chosen for its low power consumption and integrated USB peripheral. Key sensors include the BME280 for temperature/humidity and the CCS811 for air quality monitoring.",
        layoutStrategy: "The board uses a 4-layer stack-up (Signal-GND-Power-Signal) to ensure excellent signal integrity for the USB 2.0 differential pair. I routed the D+/D- lines as a 90-ohm impedance-controlled pair with precise length matching (±5 mil tolerance). A solid ground plane was used to minimize EMI and provide a low-impedance return path. Power distribution uses a dedicated layer with 3.3V and 5V rails, featuring proper decoupling capacitors placed close to each IC.",
        challenges: "A major challenge was fitting all components on a small 5x5 cm board while maintaining signal integrity. I solved this by using smaller 0402 passive components and carefully planning component placement before routing. Another challenge was managing the USB high-speed signals - I used controlled impedance routing with ground stitching vias along the differential pairs to maintain signal quality.",
        schematicImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        layoutImages: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
        ],
        githubUrl: "https://github.com",
        order: 1,
      },
      {
        title: "High-Speed Ethernet Interface",
        slug: "high-speed-ethernet-interface",
        summary: "6-layer PCB design for 100BASE-TX Ethernet with ARM Cortex-M4, featuring advanced signal integrity techniques.",
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        featured: true,
        technologies: ["KiCad", "6-Layer PCB", "Ethernet", "ARM Cortex-M4", "Differential Pairs", "EMI/EMC", "C"],
        concept: "Designed a robust Ethernet interface board using the STM32F407 microcontroller with integrated MAC and an external PHY (LAN8720A). The goal was to create a reliable 100Mbps Ethernet connection with proper EMI mitigation for industrial environments.",
        layoutStrategy: "Implemented a 6-layer stack-up optimized for high-speed signals: Top Signal - GND - Signal - Power - GND - Bottom Signal. The Ethernet differential pairs (TX+/TX-, RX+/RX-) were routed as 100-ohm controlled impedance with matched lengths within 50 mils. Used ground plane cutouts strategically to control impedance and minimize crosstalk. The magnetics module was placed close to the RJ45 connector with proper isolation.",
        challenges: "The main challenge was meeting EMC requirements for industrial use. I implemented a comprehensive EMI mitigation strategy including: ferrite beads on power lines, proper grounding with star topology, shielding on critical traces, and careful component placement to minimize loop areas. All high-speed signals were kept away from board edges and properly terminated.",
        layoutImages: [
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=400&fit=crop"
        ],
        githubUrl: "https://github.com",
        order: 2,
      },
      {
        title: "Motor Control Board",
        slug: "motor-control-board",
        summary: "2-layer power electronics PCB for brushless DC motor control with integrated gate drivers and current sensing.",
        heroImage: "https://images.unsplash.com/photo-1581093458791-9d42e3c5e23e?w=800&h=600&fit=crop",
        featured: true,
        technologies: ["KiCad", "2-Layer PCB", "Power Electronics", "PIC", "PWM", "Gate Drivers", "Current Sensing"],
        concept: "Created a motor control board for a 24V BLDC motor application. The design features a PIC16F microcontroller for control logic, IR2104 gate drivers for the MOSFETs, and ACS712 current sensors for feedback. The board supports up to 10A continuous current.",
        layoutStrategy: "Despite being a 2-layer board, careful attention was paid to power routing. High-current traces were made wide (100 mil minimum) with thermal relief for better heat dissipation. The gate driver circuits were placed close to the MOSFETs to minimize gate loop inductance. Ground plane was maximized on the bottom layer with strategic cuts to separate analog sensing ground from power ground, connected at a single star point.",
        challenges: "Managing heat dissipation on a 2-layer board was challenging. I used large copper pours connected to the MOSFET drain pads to act as heatsinks. Added thermal vias under the MOSFETs to improve heat transfer. Another challenge was noise from PWM switching affecting the current sensors - solved by adding RC filters and proper ground plane management.",
        layoutImages: [
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop"
        ],
        order: 3,
      },
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    return { success: true, count: projects.length };
  },
});
