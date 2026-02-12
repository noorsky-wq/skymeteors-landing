// Technical Specifications and Project Data
export const HERO_DATA = {
  title: "Autonomous Systems for GPS-Denied Operations",
  subtitle: "Advanced aerial platforms with LiDAR-centric perception, real-time localization, and adaptive mission control",
  location: "Research & Development",
  status: "Operational Prototype",
  tags: ["Vision Fusion Active", "SLAM Integration", "Autonomous Navigation"]
};

export const CORE_CAPABILITIES = [
  {
    id: "SYS-01",
    icon: "Radar",
    title: "360° LiDAR Perception",
    description: "Livox MID-360 solid-state LiDAR providing coverage-first awareness with FAST-LIO odometry for robust localization in GPS-denied environments.",
    specs: [
      "70° × 360° FOV",
      "FAST-LIO odometry integration",
      "10Hz pose output",
      "Sub-15cm position accuracy"
    ]
  },
  {
    id: "SYS-02",
    icon: "Eye",
    title: "Vision-Based Tracking",
    description: "RICOH THETA X 360° camera with GPU-accelerated YOLOv8 person detection, achieving 30 FPS at 2K resolution with SAHI for small target handling.",
    specs: [
      "30 FPS @ 2K resolution",
      "27-30ms detection latency",
      "SAHI threshold: 0.6",
      "360° hemispheric coverage"
    ]
  },
  {
    id: "SYS-03",
    icon: "Navigation",
    title: "Adaptive Flight Control",
    description: "PX4-based autonomous control with sensor fusion (EKF2), real-time position setpoints, and velocity limiting for safe person-following missions.",
    specs: [
      "Pixhawk 4 flight controller",
      "EKF2_EV_CTRL=15 configuration",
      "0.5 m/s velocity limiting",
      "Exponential yaw smoothing (α=0.15)"
    ]
  }
];

export const TECH_STACK = {
  compute: [
    { name: "NVIDIA Jetson Nano", role: "Development platform" },
    { name: "NVIDIA AGX Orin", role: "Production upgrade (in progress)" }
  ],
  sensors: [
    { name: "Livox MID-360", role: "Primary LiDAR" },
    { name: "RICOH THETA X", role: "360° RGB camera" },
    { name: "Lightware SF45", role: "Terrain rangefinder" }
  ],
  flight: [
    { name: "Pixhawk 4", role: "Flight controller" },
    { name: "Hexacopter platform", role: "Aerial vehicle" }
  ],
  software: [
    { name: "ROS Noetic", role: "Robotics middleware" },
    { name: "PX4 Autopilot", role: "Flight stack" },
    { name: "FAST-LIO", role: "LiDAR odometry" },
    { name: "YOLOv8 + TensorRT", role: "Object detection" }
  ]
};

export const MILESTONES = [
  {
    id: "M1",
    title: "LiDAR Integration",
    status: "complete",
    description: "Livox MID-360 sensor integration and point cloud visualization"
  },
  {
    id: "M2",
    title: "FAST-LIO Odometry",
    status: "complete",
    description: "LiDAR-inertial odometry achieving real-time pose estimation"
  },
  {
    id: "M3",
    title: "PX4 Vision Fusion",
    status: "complete",
    description: "13.2cm horizontal, 1.4cm vertical accuracy with EKF2 sensor fusion",
    metrics: {
      horizontal_accuracy: "13.2cm",
      vertical_accuracy: "1.4cm",
      config: "EKF2_EV_CTRL=15"
    }
  },
  {
    id: "M4",
    title: "Person Following",
    status: "active",
    description: "Autonomous tracking with 360° camera and adaptive positioning",
    metrics: {
      fps: "30 FPS @ 2K",
      latency: "27-30ms",
      max_velocity: "0.5 m/s"
    }
  },
  {
    id: "M5",
    title: "Ego-Planner Integration",
    status: "planned",
    description: "Real-time trajectory planning with obstacle avoidance"
  }
];

export const PROJECTS = [
  {
    title: "Person-Following Hexacopter",
    description: "GPS-independent autonomous tracking system using LiDAR odometry and 360° vision",
    status: "Active Development",
    image: "/projects/person-following.jpg",
    tech: ["FAST-LIO", "YOLOv8", "PX4", "MAVROS"],
    highlights: [
      "30 FPS real-time detection",
      "360° awareness",
      "Adaptive velocity control",
      "EMA filtering for smooth tracking"
    ]
  },
  {
    title: "Firefighting Thermal Detection",
    description: "Dual-camera thermal + RGB system for autonomous fire inspection and monitoring",
    status: "Prototype Complete",
    image: "/projects/firefighting.jpg",
    tech: ["Thermal Camera", "TensorRT", "Auto-zoom"],
    highlights: [
      "Thermal anomaly detection",
      "Automatic zoom tracking",
      "Sci-fi visualization overlays",
      "CAN bus motor control"
    ]
  },
  {
    title: "GPS-Denied Navigation Stack",
    description: "Complete autonomous flight system using LiDAR SLAM and vision pose estimation",
    status: "Milestone 3 Complete",
    image: "/projects/navigation.jpg",
    tech: ["FAST-LIO", "Livox MID-360", "PX4", "EKF2"],
    highlights: [
      "Sub-15cm position accuracy",
      "Four-terminal launch sequence",
      "Vision bridge integration",
      "OFFBOARD mode stability"
    ]
  }
];

export const CONTACT_INFO = {
  email: "jack@autonomoussystems.dev",
  github: "github.com/yourusername",
  location: "Research Lab",
  availability: "Open to collaboration on autonomous systems projects"
};
