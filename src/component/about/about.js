import React from "react";
import "./about.css";




export function About (){
    return (
        <div className="Main">
            <div className="Heading">
                <h3>Welcome to My Fitness Tips</h3>
                <p>Stay fit and healthy with our workout routines.</p>
            </div>
            <div className="InnerSection">
                <h2>About Us</h2>
                <p>Welcome to My Fitness Tips! We are dedicated to 
                helping you achieve your fitness goals and live a 
                healthy lifestyle. Our mission is to provide you with
                valuable workout routines, fitness tips, and expert guidance 
                to support you on your fitness journey.</p>
                <button>Know More</button>
            </div>
            <div className="FitnessSection">
                <h1>Workout Routines</h1>
                <table id="table">
                    <tr>
                        <th>Workout</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Push-ups</td>
                        <td>A classic exercise that targets the chest, arms, and core.</td>
                    </tr>
                    <tr>
                        <td>Squats</td>
                        <td>A lower body exercise that targets the legs and glutes.</td>
                    </tr>
                    <tr>
                        <td>Plank</td>
                        <td>A core exercise that helps strengthen the abs and back.</td>
                    </tr>

                </table>
            </div>
            <div className="fitnessTips">
                <h2>Fitness Tips</h2>
                <ul>
                    <li>Stay hydrated during workouts.</li>
                    <li>Warm up to prevent injuries.</li>
                    <li>Listen to your body and rest when needed.</li>
                    <li>Incorporate strength training exercises.</li>
                    <li>Focus on flexibility with stretching exercises.</li>
                    <li>Eat a balanced diet for fuel and nutrition.</li>
                    <li>Set realistic goals and track your progress.</li>
                </ul>
                <button>SignUp for our NewsLetter</button>
            </div>
            <div className="FitnessEquipment">
                <h2>Fitness Equipment</h2>
                <div className="FitnessItem">
                    <h3>Dumbbells</h3>
                    <p>Dumbbells are versatile strength training tools that can be used 
                    for a wide range of exercises targeting various muscle groups.</p>
                </div>
                <div className="FitnessItem">
                    <h3>Resistance Bands</h3>
                    <p>Resistance bands provide a convenient and portable way to add 
                    resistance to your workouts, helping to build strength and improve flexibility.</p>
                </div>
                <div className="FitnessItem">
                    <h3>Exercise Ball</h3>
                    <p>An exercise ball is a versatile tool that can be used for core exercises,
                     stability training, and improving balance.</p>
                </div>
            </div>
            <div className="MealPlans">
                <h2>Suggested Meal Plans</h2>
                <div className="head">
                    <h3>By Goal</h3>    
                    <div className="Mealtype">
                        <button>Loose Weight</button>
                        <button>Get Healthy</button>
                        <button>Stay Fit</button>
                </div>
                </div>
               
                 
                    <div className="head">
                    <h3>By food type</h3>
                    <div className="foodtype">
                        <button>Vegan Meal</button>
                        <button>Low Carb Meal</button>
                        <button>Keto Fit</button>
                        <button>Pure Veg</button>
                    </div>
                    </div>

                    <div className="head">
                    <h3>By food type</h3>
                     
                    <div className="HealthFocustype">
                    
                        <button>Heart-Healthy Plan</button>
                        <button>Digestive Health Plan</button>
                        <button>Bone Health Plan</button>
                        <button>Brain-Boosting Plan</button>
                </div>
                </div>
            </div>
            <div className="ScrollerMoverSection">
                <h3>Follow our Youtube and instagram channel to stay notified about our meal and workout plan</h3>
            </div>
        </div>
    )
}

 export default About;