import React from 'react';
import { Download, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      // period: "2021-2023",
      institution: "Maharishi International University, USA",
      // gpa: "3.7 CGPA"
    },
    {
      degree: "Bachelor of Engineering in IT",
      // period: "2013-2017",
      institution: "Cosmos College of Management and Technology, Kathmandu",
      // gpa: "3.64 CGPA (84.2%)"
    },
    {
      degree: "+2 in Science",
      // period: "2011-2013",
      institution: "EDMark College, Kathmandu",
      // gpa: "69%"
    },
    {
      degree: "SLC",
      // period: "2001-2010",
      institution: "Shree Kalika Higher Secondary School, Kathmandu",
      // gpa: "65%"
    }
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      period: "2024-Present",
      company: "CHG Healthcare, Utah, US",
      responsibilities: [
        "Design and develop microservices using Java 21 and Spring Boot.",
        "Build responsive front-end interfaces with Vue.js.",
        "Automate CI/CD pipelines with GitHub Actions and manage Docker/Kubernetes deployments.",
        "Monitor and troubleshoot applications using Kibana, Grafana, and Opsgenie.",
        "Participate in agile ceremonies, code reviews, and improve code quality."
      ]
    },
    {
      title: "Java Developer",
      period: "2023-2024",
      company: "Morgan Stanley, New York, US",
      responsibilities: [
        "Develop RESTful services and batch jobs using Spring Boot and AutoSys.",
        "Create Angular 15 front-end for enterprise applications.",
        "Automate processes with Shell and Python scripts.",
        "Use Elastic Search, Redis Cache, and Kafka for performance and messaging.",
        "Maintain code quality with SonarQube and manage databases with IBM DB2 and MSSQL."
      ]
    },
    {
      title: "Java Engineer",
      period: "2022-2023",
      company: "Advantis Global Inc. (Client: Apple), Cupertino, CA",
      responsibilities: [
        "Develop microservices using Java 11, Spring Boot, RxJava, and Kafka.",
        "Implement TDD with JUnit and TestNG for high code coverage.",
        "Deploy services with Docker and Kubernetes (EKS).",
        "Use design patterns to improve maintainability.",
        "Monitor systems with Grafana and ensure code quality via SonarQube."
      ]
    },
    {
      title: "Software Engineer",
      period: "2021-2021",
      company: "Deerwalk Services, Kathmandu, Nepal",
      responsibilities: [
        "Develop microservices with Spring Boot and secure APIs using OAuth2 and JWT.",
        "Build UI with Angular 9 and Bootstrap.",
        "Implement TDD and automate browser testing with Selenium.",
        "Use Elastic Search and Kafka for data handling and streaming.",
        "Setup CI/CD pipelines with Jenkins and monitor with Kibana and Grafana."
      ]
    },
    {
      title: "Java Web Developer",
      period: "2020-2021",
      company: "Datum Systems Pvt Ltd, Kathmandu, Nepal",
      responsibilities: [
        "Develop AML/ATF applications using Spring Boot and RESTful APIs.",
        "Implement security with JWT and Spring Security OAuth2.",
        "Create batch jobs and optimize database queries with Postgres stored procedures.",
        "Build front-end using Angular, React, and TypeScript.",
        "Conduct unit testing with JUnit, Mockito, and Selenium."
      ]
    },
    {
      title: "Web Application Developer",
      period: "2017-2020",
      company: "Ishani Technology Pvt Ltd, Lalitpur, Nepal",
      responsibilities: [
        "Develop web tier using Spring MVC, Hibernate, and JAX-RS.",
        "Build UI with Angular, jQuery, JSP, HTML, and CSS.",
        "Optimize databases and implement stored procedures.",
        "Write unit tests using JUnit and Mockito following TDD.",
        "Apply design patterns for clean and maintainable code."
      ]
    }
  ];
  

  return (
    <section id="resume" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <a
            href="/resume.pdf"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            download
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Summary */}
          <div className="mb-16">
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Summary</h3>
              <h4 className="text-xl font-semibold mb-4 text-primary">Bikash Mainali</h4>
              <p className="text-muted-foreground leading-relaxed">
              Innovative and deadline-driven Software Engineer with 8+ years of experience designing and developing web and enterprise applications from initial concept to final deployment.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-background rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                  {/* <p className="text-primary font-medium mb-2">{edu.period}</p> */}
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  {/* <p className="text-sm text-muted-foreground font-medium">{edu.gpa}</p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-background rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                    <span className="text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
