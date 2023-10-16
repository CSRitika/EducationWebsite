const OurCoursesData = [
  {
    id: 0,
    title: 'Front-end',
    titleImage: 'https://facialix.com/wp-content/uploads/2023/04/curso-frontend-certificacion-facialix.jpg',
    courses: [
      {
        id: 0,
        name: 'JavaScript Fundamentals',
        image: 'https://miro.medium.com/v2/resize:fit:1358/1*a3BHGbuAMpOaZj6HkTrNqA.png',
        price: 199,
        duration: 1,
        startDate: new Date(),
        description: 'Learn the fundamentals of JavaScript and build a strong foundation in front-end web development.',
      },
      {
        id: 1,
        name: 'HTML',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhSy6S5GB_nwphLTvvagZMiaYUfBFF4iDTdX5DHclzGid6T69x9ko4kJ1ryJnDOiLPwI&usqp=CAU',
        price: 99,
        duration: 1,
        startDate: new Date(),
        description: 'Learn the fundamentals of HTML for web development.',
      },
      {
        id: 2,
        name: 'CSS',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkLTTTjmIdgWFbAn82RuxFuMtoNCBJfuKxw&usqp=CAU',
        price: 99,
        duration: 1,
        startDate: new Date(),
        description: 'Learn the fundamentals of CSS for web styling.',
      },
    ]
  },
  {
    id: 1,
    title: 'Back-end',
    titleImage: 'data:image/png;base64,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',
    courses: [
      {
        id: 0,
        name: 'Node.js Mastery',
        image: 'https://blog.logrocket.com/wp-content/uploads/2020/06/node-js.png',
        price: 99,
        duration: 1,
        startDate: new Date(),
        description: 'Master server-side development with Node.js and build scalable and efficient back-end applications.',
      },
      {
        id: 1,
        name: 'Python for Back-end Development',
        image: 'https://codersera.com/blog/wp-content/uploads/2021/10/python-developer.jpeg',
        price: 159,
        duration: 1,
        startDate: new Date(),
        description: 'Learn to build powerful back-end systems with Python.',
      },
    ]
  },
  {
    id: 2,
    title: 'Database',
    titleImage: 'https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.jpg?s=170667a&w=0&k=20&c=wCOZjB82E_J2iR3wpvWPbehwEYKPhj2FkOfTqT9ePcA=',
    courses: [
      {
        id: 0,
        name: 'MongoDB Essentials',
        image: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
        price: 99,
        duration: 1,
        startDate: new Date(),
        description: 'Explore the world of NoSQL databases and learn to work with MongoDB for data storage and retrieval.',
      },
      {
        id: 1,
        name: 'SQL Server Administration',
        image: 'https://www.infotectraining.com/sites/default/files/field/image/Untitled%20design%20%286%29%20%281%29.png',
        price: 99,
        duration: 1,
        startDate: new Date(),
        description: 'Become an expert in managing SQL Server databases.',
      },
      {
        id: 2,
        name: 'Databases and SQL',
        image: 'https://shanewalk.tech/wp-content/uploads/2022/08/SQLpt1-3@2x.jpg',
        price: 199,
        duration: 1,
        startDate: new Date(),
        description: 'Master SQL and database management for back-end applications.',
      },
    ]
  },
  
  {
    id: 3,
    title: 'Data Science',
    titleImage: 'https://thumbs.dreamstime.com/b/big-data-science-analysis-business-technology-concept-virtual-screen-big-data-science-analysis-business-technology-concept-145015243.jpg',
    duration: '4 Months',
    courses: [
      {
        id: 0,
        name: 'Data Analysis with Python',
        image: 'https://www.freecodecamp.org/news/content/images/2020/08/datapython.png',
        price: 99,
        duration: 1,
        startDate: new Date(),
        description: 'Unlock the power of data using Python and analyze real-world datasets.',
      },
    ]
  },
  {
    id: 4,
    title: 'Machine Learning',
    titleImage: 'https://media.istockphoto.com/id/1365534802/photo/artificial-intelligence-in-healthcare-new-ai-applications-in-medicine.webp?b=1&s=170667a&w=0&k=20&c=eF-CGfuqSOwnbAeptvuK8qcdNE3-_RHIYk_II2T8g9Y=',
    courses: [
      {
        id: 0,
        name: 'Introduction to Machine Learning',
        image: 'http://bvicam.in/blog/wp-content/uploads/2023/06/ML.png',
        price: 199,
        duration: 1,
        startDate: new Date(),
        description: 'Explore the fundamentals of machine learning and build predictive models.',
      },
      {
        id: 1,
        name: 'Deep Learning Fundamentals',
        image: 'https://miro.medium.com/v2/resize:fit:1024/0*6XnccoRFvqi4GkXu.jpeg',
        price: 99,
        duration: 1,
        startDate: new Date(),
        description: 'Dive into the world of deep learning and neural networks.',
      },
    ]
  },
  {
    id: 5,
    title: 'Web Development',
    titleImage: 'https://previews.agefotostock.com/previewimage/medibigoff/e92fa88ec762f822a222de7ca24d1cde/esy-044716865.jpg',
    courses: [
      {
        id: 0,
        name: 'React.js Essentials',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwHjtCWHvzexSd3pPgyReHjQz9MttK7tyaReUcQILHze5bWLEuqy9rzRBcfnPtGAjnTg&usqp=CAU',
        price: 299,
        duration: 1,
        startDate: new Date(),
        description: 'Build interactive web applications with React.js and Redux.',
      },
      {
        id: 1,
        name: 'Next.js Fundamentals',
        image: 'https://media.licdn.com/dms/image/D4D12AQFxshmjT97fTw/article-cover_image-shrink_423_752/0/1680465114444?e=1703116800&v=beta&t=Ut4QDqZn08Hcb_cXgOf8CE-DWQ8s21_DdZvRmmwjb9g',
        price: 349,
        duration: 1,
        startDate: new Date(),
        description: 'Master server-side rendering and routing with Next.js.',
      },
      {
        id: 2,
        name: 'Vue.js Basics',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiP_XgUrfHgDZ3eB5sb2YMfPgUqV2xn9xcf6QYN7IwshMJ53hI776tocKOnCEWtvyqdiw&usqp=CAU',
        price: 399,
        duration: 1,
        startDate: new Date(),
        description: 'Get started with Vue.js and build dynamic web applications.',
      },
    ]
  },
];
    
export default OurCoursesData;
    