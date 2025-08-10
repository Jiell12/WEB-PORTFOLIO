const projectsData = [
    {
        "id": 1754807188447,
        "name": "Honda Civic Collections",
        "description": "This web advertisement is a personal showcase where I can feature my Honda Civic collections, along with detailed photos, specifications, restoration stories, and event highlights. It serves as both a portfolio of my passion for cars and a place for enthusiasts to connect, share feedback, and exchange ideas.",
        "date": "2024-02-14",
        "purpose": "To create an online platform that serves as a personal portfolio and showcase for your Honda Civic collections, providing visitors with an engaging way to view your work, read detailed stories about each car, and appreciate your passion for automotive culture.",
        "screenshots": [
            "honda1.png",
            "honda2.png",
            "honda3.png",
            "honda4.png"
        ],
        "technologies": [
            "HTML",
            "TAILWINDCSS",
            "JAVASCRIPT"
        ],
        "status": "Completed",
        "category": "Web Development"
    },
    {
        "id": 1754807962064,
        "name": "AI MODEL VOCAL SEPERATOR",
        "description": "The purpose of this project is to create a customized vocal separation tool leveraging Demucs V4, enabling users to accurately isolate vocals and instrumentals from audio tracks. This tool aims to provide a reliable, high-quality solution for music producers, remixers, and hobbyists who require precise stem extraction for creative projects.",
        "date": "2025-07-02",
        "purpose": "This project uses the latest Demucs V4 deep learning model to perform state-of-the-art source separation. Implemented in Python, it supports various audio formats and delivers clean, high-fidelity results suitable for remixing, karaoke creation, and music analysis. The application is designed with simplicity in mind while maintaining professional-grade performance, making it accessible to both beginners and experienced audio engineers.",
        "screenshots": [
            "python1.png",
            "python2.png"
        ],
        "technologies": [
            "HTML",
            "TAILWINDCSS",
            "JAVASCRIPT",
            "PYTHON",
            "FLASK",
            "DEMUCS V4"
        ],
        "status": "Completed",
        "category": "Other"
    }
];

// Export for use in main HTML file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
} else {
    window.projectsData = projectsData;
}