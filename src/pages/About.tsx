
import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">About Me</h1>
        <p className="text-center text-muted-foreground mt-2">
          Learn more about the developer behind Flow
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 mr-2 text-primary" />
            <h2 className="text-2xl font-semibold">About Me</h2>
          </div>
          
          <div className="prose">
            <p>
              Hello! I'm Vidushi Gupta, a final year BTech student at Medicaps University. 
              I'm passionate about creating intuitive and helpful applications that can make 
              a positive impact on people's lives.
            </p>
            
            <p>
              My technical expertise lies in Flutter development, where I've built several 
              cross-platform mobile applications. I'm also familiar with web development 
              technologies and enjoy exploring new frameworks and tools to expand my skill set.
            </p>
            
            <p>
              When I'm not coding, I enjoy reading about new technologies, participating in 
              hackathons, and collaborating on open-source projects. I believe in creating 
              software that is accessible and beneficial for all users.
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 mr-2 text-primary" />
            <h2 className="text-2xl font-semibold">How It Works</h2>
          </div>
          
          <div className="prose">
            <p>
              Flow is a simple yet powerful menstrual cycle tracking application designed to help 
              users monitor and predict their periods.
            </p>
            
            <ol className="list-decimal pl-5 space-y-2 mt-4">
              <li>
                <strong>Create Your Profile</strong>: Start by setting up your profile with 
                basic information like your name, height, and weight. This helps personalize 
                your experience.
              </li>
              
              <li>
                <strong>Track Your Cycle</strong>: Record the start and end dates of your periods 
                to help the app understand your unique cycle pattern.
              </li>
              
              <li>
                <strong>View Predictions</strong>: Based on the data you provide, Flow calculates 
                and displays predictions for your upcoming periods, helping you stay prepared.
              </li>
              
              <li>
                <strong>Monitor Symptoms</strong>: Log symptoms you experience throughout your cycle 
                to identify patterns and better understand your body.
              </li>
              
              <li>
                <strong>Access Resources</strong>: Explore educational resources about menstrual 
                health to learn more about your body and common experiences.
              </li>
            </ol>
            
            <p className="mt-4">
              All your data is stored securely and privately on your device. Flow aims to 
              empower you with knowledge about your body, making period tracking simple and 
              stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
