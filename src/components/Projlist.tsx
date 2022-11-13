import QuboRun from "../assets/icons/QuboRun.png";
import GeometrySlash from "../assets/icons/GeometrySlash.png";
import ShiftReg from "../assets/icons/74HC595.png" //source: Fritzing parts library <https://github.com/fritzing/fritzing-parts/blob/develop/svg/core/breadboard/74HC595.svg>
import Segfault from "../assets/icons/ProjectSegfault.png"

const projects =  {
  "ProjectSegfault": {
    "name": "Project Segfault",
    "description": "Selfhosted, decentralised services and game servers.",
    "lang": "Unraid, Docker, Nginx",
    "url": "https://projectsegfau.lt",
    "icon": Segfault
  },
  "QuboRun": {
    "name": "QuboRun",
    "description": "A cube running endlessly, trying to avoid obstacles.",
    "lang": "C#, Mono, .NET, Unity",
    "url": "https://github.com/Devnol/QuboRun",
    "icon": QuboRun
  },
  "GeometrySlash": {
    "name": "GeometrySlash",
    "description": "A simple matching game I made along with Peter0x44.",
    "lang": "C++, raylib",
    "url": "https://github.com/Peter0x44/GeometrySlash",
    "icon": GeometrySlash
  },
  "SR74HC595Pico": {
      "name": "ShiftRegister74HC595-Pico",
      "description": "Port of the ShiftRegister74HC595 library to the Raspberry Pi Pico and other RP2040-based MCUs",
      "lang": "C++, Raspberry Pi Pico",
      "url": "https://github.com/Devnol/ShiftRegister74HC595-Pico",
      "icon": ShiftReg
  }
}

export default projects;