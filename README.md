# Kali-Linux-for-Android — Kali Magic 🎩🔐

> Transform your Android device into a **portable cybersecurity playground** — run Kali / NetHunter tools on Android (Termux / LinuxDroid integration). 🚀💻📱

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Releases](https://img.shields.io/github/v/release/AryanVBW/Kali-Linux-for-Android)](https://github.com/AryanVBW/Kali-Linux-for-Android/releases)
[![Downloads](https://img.shields.io/github/downloads/AryanVBW/Kali-Linux-for-Android/total)](https://github.com/AryanVBW/Kali-Linux-for-Android/releases)

---

## 📖 Table of Contents

- [About](#about)  
- [Supported Operating Systems](#supported-operating-systems)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Quick Install](#quick-install)

---

## 🧠 About

**Kali Magic** lets you experience **Kali Linux / Parrot OS / NetHunter** tools right on Android — perfect for **students, researchers, and ethical hackers** learning on the go.  

Run full penetration-testing environments inside **Termux + LinuxDroid**.  
It’s portable, rootless, and visually documented with live demos.

[![Visit LinuxDroid](https://github.com/AryanVBW/ParrotSecurityOsForAndroid/releases/download/Gif/visithere.gif)](https://github.com/AryanVBW/LinuxDroid)

---

## 🐧 Supported Operating Systems

| OS | Version | Description | Logo |
|----|---------|-------------|------|
| **Kali Linux** | Rolling | Advanced penetration testing & security distro. | <img src="https://www.kali.org/images/kali-logo.svg" alt="Kali Logo" width="40"> |
| **Parrot Security OS** | Rolling | Forensics, pen-testing, privacy & dev tools. | <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/parrotsecurity.svg" alt="Parrot Logo" width="40"> |
| **Ubuntu** | 20.04+ | General-purpose Linux for dev & scripting. | <img src="https://assets.ubuntu.com/v1/ce518a18-CoF-2022_solid+O.svg" alt="Ubuntu Logo" width="40"> |
| **Debian** | 11+ | Stable, server-ready Linux distribution. | <img src="https://www.debian.org/logos/openlogo-nd.svg" alt="Debian Logo" width="40"> |

---

## 🌟 Features

- Mobile-optimized environment for Kali / NetHunter tools.  
- Run powerful pentest tools inside Termux/proot (rootless).  
- Quick installer + visual setup walkthrough.  
- Lightweight GIF demos and prebuilt commands.  
- Safe for educational / ethical security labs.

---

## ⚙️ Prerequisites

- Android 7.0+  
- Termux (from F-Droid)  
- `termux-setup-storage` permission granted  
- Disk space: ~3–5 GB for Option A (NetHunter), ~2–3 GB for Option B (Debian)  
- (Optional) Root access for Wi-Fi injection or OTG tools  

> 💡 Always inspect scripts before running:  
> ```bash
> cat install.sh
> ```

---

## 🚀 Quick Install

### Option A: Direct Termux

```bash
pkg update && pkg upgrade -y
pkg install wget curl proot -y

# Download & run Kali NetHunter installer (pinned revision)
wget -O install-nethunter-termux https://gitlab.com/kalilinux/nethunter/build-scripts/kali-nethunter-rootless/-/raw/07d66e8b51eee8d0e19ea7b4a8050dcbf3e08391/install-nethunter-termux
chmod +x install-nethunter-termux
./install-nethunter-termux

# Optional extras (LinuxDroid)
wget https://raw.githubusercontent.com/AryanVBW/LinuxDroid/2b2ff0f3d0d340ca13905177f545793da2b8101c/Scripts/menu.sh && chmod +x menu.sh

# Optional bash presets
cp ~/.bashrc ~/.bashrc.backup || true
wget https://raw.githubusercontent.com/AryanVBW/LinuxDroid/4faaad1f16cce15776061f2a3226160dc253bbef/Scripts/default.bashrc -O ~/.bashrc

# Start GUI (set KeX password first)
nethunter kex passwd
nethunter kex &
./menu.sh
```

### Option B: Debian via proot-distro

For NetHunter, use Option A. This path is just a Debian container.

```bash
pkg install proot-distro
proot-distro list
proot-distro install debian
proot-distro login debian
```

Inside Debian:

```bash
apt update && apt upgrade -y
# install whatever you need, e.g. apt install nmap
```
