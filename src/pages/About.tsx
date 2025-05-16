
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">About Flow</h1>
        <p className="text-center text-muted-foreground mt-2">
          Learn more about our menstrual cycle tracking application
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto prose">
        <p>
          Flow is a comprehensive menstrual cycle tracking application designed to help
          users track, predict, and understand their menstrual cycles and overall 
          reproductive health.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower people with accessible, accurate, and personalized 
          information about their menstrual health, helping them make informed decisions
          and improve their overall wellbeing.
        </p>
        
        <h2>Features</h2>
        <ul>
          <li>Personalized cycle tracking based on your unique patterns</li>
          <li>Predictions for future periods</li>
          <li>Symptom tracking and analysis</li>
          <li>Educational resources about menstrual health</li>
          <li>Secure and private data storage</li>
        </ul>
        
        <h2>Privacy Commitment</h2>
        <p>
          We take your privacy seriously. All your health data is stored securely and 
          is never shared without your explicit permission.
        </p>
      </div>
    </div>
  );
};

export default About;
