import React from 'react'

const pfol =() =>{
    return (<div>
        <header class="header">
        <nav>
            <a href="#main">ABOUT</a>
            <a href="#projects">PROJECT</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
        </nav>
      </header>
      
        <div class="intro">
            <section class="intro1">
                <h2>Hi I am <span>Sudharsan</span>
                <a href="https://www.linkedin.com/in/sudharsan-k-k-87782b257/"><img src="./linkedin.png"></a>
                </h2>
                <p>To secure an opportunity in the field of electronics and communication, where I can apply my theoretical 
                    knowledge and develop practical <br>skills in a professional environment, seeking an opportunity to leverage my expertise and
                    contribute to the success of<br> an organization by delivering exceptional engineering outcomes.</p>            </section>
        </div>
       <div class="contents">
        <section id="projects" class="projects"><h2><br>PROJECTS</h2></section>
        
        <div class="master">
            <div class="main1">
                <div class="sub1"><img src="./helmate.png"><h3>MINEGUARD </h3> <p>An iot based safety device which keeps track of various parameters and alerts the users by using  low range radio frequency and IOT.</p></div>
                <div class="sub1"><img src="./ai.png"><h3>DISEASE PREDICTING AI 🩺</h3>
                    <p>An AI based web application which is capable of predicting the patients disease and maintain a medical history of users. tHis was done using the artificial neural networks. </p>
                </div>
            </div>
            <div class="main2">
                <div class="sub11"><img src="./musicplayer.png"><h3>MUSIC PLAYER USING JAVA FX </h3>
                    <p>A fully functional Music player connected to the database which is capable of performing all actions of a offline music player.</p>
               </div>
                <div class="sub11"><img src="./cybersecurity.png"> <h3>PORT SCANNER 💻</h3>
                    <p>A software program that identifies open ports on a networking device. helps network administrators understand how their network is connected, accessed, and used.</p>
               </div>
            </div>
        </div> 
          </section>
          <section class="skills", id="skills">
            <h3>SKILLS</h3>
            <div class="assets">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" style="fill:#efef4a">
                    <path d="M 2.6289062 2 L 4.7109375 20 L 11.998047 22 L 19.287109 20 L 21.369141 2 L 2.6289062 2 z M 4.8710938 4 L 19.126953 4 L 17.457031 18.429688 L 12 19.925781 L 6.5429688 18.429688 L 4.8710938 4 z M 7.0078125 6 L 7.5449219 12.337891 L 14.480469 12.337891 L 14.244141 15.091797 L 12.023438 15.591797 L 9.7617188 15.09375 L 9.6757812 14.074219 L 7.6933594 14.074219 L 7.9140625 16.697266 L 11.960938 17.986328 L 12.001953 18 L 16.09375 16.697266 L 16.640625 10.261719 L 9.3515625 10.261719 L 9.1699219 8.0820312 L 16.824219 8.0820312 L 17.003906 6 L 7.0078125 6 z"></path></svg>
                <img src="./css.png">
                <img src="./js.png">
                <img src="./python.png">
                <img src="./cpp.png">
                <img src="./java.png">
            </div>
            <ul>
                <li>HTML </li>
                <li>CSS  </li>
                <li>JavaScript⚡ </li>
                <li>Python </li>
                <li>C++ </li>
                <li>Java☕ </li>
            </ul>
        </section>
          <section class="skills2", id="skills2">
            <h3>AREA OF INTREST</h3>
        </section>
        <div class="int">
            <div class="intrests">
                <div class="int1"><h3>NETWORKING </h3> <p>Hands-on experience in simulating and troubleshooting networks using Cisco Packet Tracer. Proficient in various network protocols and configurations.</p></div>
                <div class="int1"><h3>BUG BOUNTY</h3><p>Developing expertise in identifying cyber vulnerabilities.  Engaged in continuous learning to stay up-to-date on emerging threats and mitigation strategies.</p></div>
                <div class="int1"><h3>ETHICAL HACKING</h3><p>Performed controlled security assessments to identify vulnerabilities in systems and user behavior,such as phishing attempts and social engineering.</p></div>
                <div class="int1"><h3>INTERNET OF THINGS (IoT)</h3><p>Hands-on experience developing a range of IoT projects, from sensor-based solutions to complex interconnected systems.</p></div>
            
            </div>
        </div>
          <section class="contact" id="contact">
              <h3>GET IN TOUCH!</h3>
            <p><center><a href="https://github.com/sudharsan04exe"><img src="./github.png" ></a> sudharsan04exe</center></p>
       
<p><center><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"><img src="./gmail.png"></a>  sudharsan2004k@gmail.com</center></p>

        
            <p><center>Sri Eshwar college of engineering,Kinathukadavu,CBE.</center></p>
          </section>
       </div>
        <footer>
            <p id="footer"><center>&copy; 2024 sudharsan. All rights reserved.</center></p>
        </footer></div>
       
    );

}
export default pfol; 