const projects = [
    {
        title: "The Fast News",
        description: "A web-based online-media digital news paper app for the final project assignment of Nusacodes",
        url: "https://github.com/mfaishal82/media-online",
        date: "December 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928340/portfolio/rnmcghjyuipfre93pyex.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928338/portfolio/zew38z9dz8hdmmoojljh.png"],
        techStack: "Laravel, PHP, MySQL, HTML, CSS, Bootstrap, AlpineJS",
        framework: "laravel",
        type: "web"
    },
    {
        title: "The Library",
        description: "A simple web-based library information system app",
        url: "https://github.com/mfaishal82/Sistem-Informasi-Perpustakaan",
        date: "December 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928333/portfolio/ekjbqoa4jh3uwvdlubuv.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928334/portfolio/ozmtpvam5yx3w6b8ej8x.png"],
        techStack: "PHP, MySQL, HTML, Tailwind, AlpineJS",
        framework: "laravel",
        type: "web"
    },
    {
        title: "Mini Project",
        description: "Mini Coding Live Project Assignment. A simple web-based project with responsive design",
        url: "https://github.com/revou-fundamental-course/27-may-24-mfaishal82",
        date: "June 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928344/portfolio/yswpwe8oxofyzwmrwfr7.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928336/portfolio/sbsepkp9hnaeca0mesgu.png"],
        techStack: "Semantic HTML, CSS, JavaScript",
        framework: "html",
        type: "web"
    },
    {
        title: "Tasmi' App",
        description: "A simple mobile app for listening Qur'an recitation and prayer time schedule",
        url: "https://github.com/mfaishal82/murattal-quran",
        date: "July 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928332/portfolio/oun76dadjvzw7jtnclkl.png"],
        techStack: "React-Native, Expo, Expo location, Axios, Mp3Quran API, Aladhan API",
        framework: "react",
        type: "mobile"
    },
    {
        title: "MediChat Rx",
        description:
            "This is a chat-based AI mobile app where users can share health issues and receive real-time advice. It offers information on medications, including nearby pharmacies, hospital, etc",
        url: "https://github.com/Medichat-Rx/frontend",
        date: "April 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928335/portfolio/tj63ahx60cwpqcng0nwi.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928337/portfolio/d6olnrolqkpibxl7xrv9.png"],
        techStack: "GraphQL, MongoDB, Node.js, React Native, Expo, Expo Location, Expo Map, HercAI API, Google Place API",
        framework: "react",
        type: "mobile"
    },
    {
        title: "My eCommerce App",
        description: "A web-based e-commerce app made with NextJS",
        url: "https://mf-ecommerce.vercel.app/",
        date: "March 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928335/portfolio/lhuzp3g3k4ti8raokoav.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928336/portfolio/hyyj2xsu2zn3s0vevwbh.png"],
        techStack: "Javascript, Tailwind CSS, NextJS, Vercel",
        framework: "next",
        type: "web"
    },
    {
        title: "Tic Tac Toe Multiplayer",
        description:
            "A web-based mini game Tic Tac Toe using Firebase Realtime Database",
        url: "https://github.com/H8-RMT46-GroupProject/tictactoe-multiplayer",
        date: "March 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928334/portfolio/qngcbhutknyx3ul5gj7d.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928335/portfolio/itchqjuamxvjvh651i2r.png"],
        techStack: "Javascript, HTML & CSS, React JS, Firebase",
        framework: "react",
        type: "web"
    },
    {
        title: "My Social Media App",
        description: "A mobile social app similar to YouTube using Expo",
        url: "https://expo.dev/preview/update?message=fixed&updateRuntimeVersion=1.0.0&createdAt=2024-03-31T22%3A21%3A06.794Z&slug=exp&projectId=2b93fbfb-fd6c-49e4-86cc-378364242f65&group=347e911f-696d-4cfd-8eb5-fe6b117ff53b",
        date: "March 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928338/portfolio/b2cqtkxemfecuhdzz7be.png"],
        techStack: "Javascript, React Native, MongoDb, Apollo server, Expo, Android Studio",
        framework: "react",
        type: "mobile"
    },
    {
        title: "EduTech",
        description: "A web based educational course platform",
        url: "https://github.com/mfaishal82/Pro-EduTech",
        date: "February 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928336/portfolio/dnoxtwpwndl49kkhy8jc.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928333/portfolio/twgnsb9x2dgva7lmzo3q.png"],
        techStack: "Javascript, HTML & CSS, Express.js, PostgreSQL",
        framework: "express",
        type: "web"
    },
    {
        title: "Fact Guard",
        description: "A web based social media app",
        url: "https://github.com/mfaishal82/PairPro-SocMed",
        date: "January 2024",
        image: ["https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928335/portfolio/xy1lp1lulh3w45ptevmq.png", "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1736928336/portfolio/distifaidqkbiadgwi47.png"],
        techStack: "Javascript, HTML & CSS, Express.js, PostgreSQL",
        framework: "express",
        type: "web"
    },
];

export default projects;