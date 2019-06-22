let resumeData = {
  "imagebaseurl":"images/portfolio/alenaheadshot.jpg",
  "name": "Alena",
  "role": "Full Stack Web Developer",
  "linkedinId":"https://www.linkedin.com/in/alena-bierzynski-006873173/",
  "roleDescription": "Comfortable using both front-end and back-end programming languages and frameworks.",
  "socialLinks":[
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/alena-bierzynski-006873173/",
        "className":"fa fa-linkedin"
      },
      {
        "name":"github",
        "url":"https://github.com/alenabierzynski",
        "className":"fa fa-github"
      }
    ],
  "aboutme":"I have a Bachelor's Degree in Psychology and a background in sales. Before attending Wyncode I worked for a global hospitality brand for 2 years. I needed a career change and decided to marry my natural problem solving ability to an industry that provides constant challenges and growth opportunities. ",
  "address":"Fort Lauderdale, FL",
  "website":"abier070@gmail.com",
  "education":[
    {
      "UniversityName":"Wyncode Academy",
      "specialization":"Full Stack Web Developer Program",
      "MonthOfPassing":"June",
      "YearOfPassing":"2019",
      "Achievements":"Learned HTML/CSS, JavaScript, React.js, Ruby on Rails, SQL Git and Agile Project Management. Created two web applications: What's For Dinner, an app that allows users to find recipes based on ingredients they have on hand and FitFinder, a fitness studio finder app for users to find classes of their preferred fitness style in their area."
    },
    {
      "UniversityName":"Broward College",
      "specialization":"Certificate of Entrepreneurship",
      "MonthOfPassing":"April",
      "YearOfPassing":"2017",
      "Achievements":""
    },
    {
      "UniversityName":"University of Ottawa",
      "specialization":"Bachelor of Arts, Specialization in Psychology",
      "MonthOfPassing":"June",
      "YearOfPassing":"2015",
      "Achievements":"3.3 GPA"
    }
  ],
  "work":[
    {
      "CompanyName":"Hilton Fort Lauderdale Beach Resort",
      "specialization":"Front Office Supervisor",
      "Achievements":"Generated over $120,000 in sales in 2 years. Trained new hires on service standards and upsell techniques."
    },
    {
      "CompanyName":"Center for Interpersonal Relationships",
      "specialization":"Office Manager",
      "Achievements":"Acquired clients for psychological treatment and managed the schedules of 13 clinicians."
    },
  ],
  "skillsDescription":"Languages, Frameworks, & Libraries",
  "skills":[
    {
      "skillname":"HTML5"
    },
    {
      "skillname":"JavaScript"
    },
    {
      "skillname":"CSS"
    },
    {
      "skillname":"Reactjs"
    },
    {
      "skillname":"Ruby"
    },
    {
      "skillname":"Rails"
    },
    {
      "skillname":"Bootstrap"
    },
    {
      "skillname":"Git"
    }
  ],
  "portfolio":[
    {
      "name":"What's For Dinner?",
      "description":"A recipe app made with the Edamam API that allows users to enter ingredients on hand and dietary preferences to get a list of recipes to choose from.",
      "imgurl":"images/portfolio/dinner.jpg",
      "url":"https://whats-for-dinner1.herokuapp.com/"
    },
    {
      "name":"FitFinder",
      "description":"A Rails application that allows users to search for their preferred fitness type in their area and book classes at selected fitness studios. Map Box GL was used to render a map component with geolocation. Fitness studios were seeded into the database that was hosted on PostgreSQL and displayed on the map component using map markers. Users can create accounts, information is validated and ecrypted using bcrypt.",
      "imgurl":"images/portfolio/fitfinder.jpg",
      "url":"https://fitfinder305.herokuapp.com"
    }
  ]
}

export default resumeData
