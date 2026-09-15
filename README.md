# DCIT50 - Laboratory Exercise 1: Git, GitHub, and Branching

**Name:** John Michael Gesta
**Course:** DCIT50 - Object Oriented Programming

## Description

A dynamic HTML webpage (personal profile page) developed and version-controlled using Git and GitHub. The project demonstrates branching by keeping an HTML-only version separate from the fully styled and interactive version.

## Tools Used

- **Visual Studio Code (VS Code)** — code editor used to write and edit `index.html`, `style.css`, and `script.js`
- **Git Bash** — terminal used to run all Git commands (MINGW64)
- **Git** — version control system
- **GitHub** — remote repository hosting
- **Live Server (VS Code extension)** — used to preview the webpage locally

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

## Git Commands Used

```bash
# Configure Git identity
git config --global user.name "John Michael Gesta"
git config --global user.email "johnmichael.gesta@cvsu.edu.ph"

# Initialize local repository
git init

# Commit the HTML-only version
git add index.html
git commit -m "Initial HTML-only webpage"

# Create the no-style branch to preserve the HTML-only version
git branch no-style

# Rename default branch to main
git branch -m master main

# Add CSS and JavaScript on the main branch
git add style.css script.js
git commit -m "Add CSS styling and JavaScript interactivity"

# Connect to GitHub repository
git remote add origin https://github.com/johnmichaelgesta8826/Gesta_3-2_lab1.git

# Push both branches to GitHub
git push -u origin main
git push -u origin no-style
```

## Branches

| Branch | Description |
|---|---|
| `main` | Full version of the webpage with HTML, CSS styling, and JavaScript interactivity |
| `no-style` | Original HTML-only version, kept unstyled for reference |

## Features

- Responsive profile page with About, Skills, and Contact sections
- Smooth scrolling navigation
- Active nav-link highlighting based on scroll position
- Dark mode toggle button
- Auto-updating footer year

## Repository Link

[https://github.com/johnmichaelgesta8826/Gesta_3-2_lab1](https://github.com/johnmichaelgesta8826/Gesta_3-2_lab1)
