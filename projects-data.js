// projects-data.js - This file stores all project data
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
        "category": "static-website"
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
        "category": "ai-project"
    },
    {
        "id": 1754875141879,
        "name": "RCC LOAN MANAGEMENT SYSTEM",
        "description": "A client-based project for a microfinance institution in a remote area of Batangas, focusing on developing a web-based system to manage loan applications, track repayments, and generate financial reports, ensuring accessibility and usability even in low-connectivity environments",
        "date": "2025-05-16",
        "purpose": "The project aimed to provide the microfinance institution with a reliable, easy-to-use digital platform to improve how they manage loans, client records, and repayment schedules. Because the institution operates in a remote area of Batangas with limited internet access, the system was designed to work efficiently even with low connectivity. This helped staff reduce manual paperwork, minimize errors, and serve clients faster — ultimately supporting the institution's mission of empowering the local community through accessible financial services.",
        "screenshots": [
            "rcc1.png",
            "rcc2.png",
            "rcc3.png",
            "rcc4.png",
            "rcc5.png",
            "rcc6.png",
            "rcc7.png",
            "rcc8.png",
            "rcc9.png",
            "rcc10.png",
            "rcc11.png",
            "rcc12.png",
            "rcc13.png"
        ],
        "technologies": [
            "HTML",
            "TAILWINDCSS",
            "PHPMAILER",
            "PHP",
            "JAVASCRIPT",
            "MYSQL"
        ],
        "status": "In Progress",
        "category": "dynamic-website"
    },
    {
        "id": 1754891390417,
        "name": "Lebron 20 \"Drew League\"",
        "description": "I created a web advertisement for the LeBron 20 Drew League Pink sneakers to showcase their design and vibrant colorway. The ad features smooth animations and a responsive layout for an engaging experience on both desktop and mobile devices. It highlights the shoe's key features with a clean, modern style that draws attention to the product. This project demonstrates my skills in HTML, CSS animations, and JavaScript for creating dynamic, interactive web content.",
        "date": "2023-03-20",
        "purpose": "The purpose of this web advertisement is to effectively showcase the LeBron 20 Drew League Pink sneakers and attract potential buyers by highlighting its unique design and features. It aims to create an engaging and visually appealing experience that encourages user interaction and interest in the product.",
        "screenshots": [
            "lebron1.png",
            "lebron2.png",
            "lebron3.png"
        ],
        "technologies": [
            "HTML",
            "TAILWINDCSS",
            "JAVASCRIPT"
        ],
        "status": "Completed",
        "category": "static-website"
    },
    {
        "id": 1754902423978,
        "name": "ClosetX",
        "description": "ClosetX is a client-based mobile app designed to enhance the clothes shopping experience by allowing users to browse a wide selection of apparel and try them on virtually using augmented reality (AR). The app’s AR try-on feature lets users see how clothes fit and look on them in real-time through their phone’s camera, making shopping more interactive and personalized. ClosetX combines convenience with cutting-edge technology to help users make confident fashion choices without needing to visit a store. This project showcases skills in mobile app design, AR integration, and user-centered shopping solutions.\n\n",
        "date": "2025-05-09",
        "purpose": "The purpose of ClosetX is to provide users with a convenient and interactive way to shop for clothes by using augmented reality to virtually try on outfits before making a purchase. This helps reduce the uncertainty of online shopping, enhances user confidence, and creates a more personalized shopping experience.",
        "screenshots": [
            "closet1.png",
            "closet2.png",
            "closet3.png",
            "closet4.png",
            "closet5.png",
            "closet6.png",
            "closet7.png",
            "closet8.png"
        ],
        "technologies": [
            "FLUTTER",
            "SDK"
        ],
        "status": "Completed",
        "category": "mobile-app"
    }
];

// Export for use in main HTML file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
} else {
    window.projectsData = projectsData;
}