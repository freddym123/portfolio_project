import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import editor from "./images/editor.png"
import chatapp from "./images/chatapp.png"
import recipeapp from "./images/recipeapp.png"
import pixelEditor from "./images/PixelEditor.png"

function App() {
  return (
    <div className="App">
      <Hero></Hero>

      <main>
        <About></About>

        <div>
          <h2 className='sub-title second'>Some Things I've Built</h2>
          <div className='projects'>
            <div className='project'>
              <div className='image-container' data-aos="fade-right"><img src={editor}></img></div>
              <div className='project-text' data-aos="fade-left">
                <p className='featured'>Featured Project</p>
                <h3>Javascript editor</h3>
                <div className='desc'>
                  <div className='desc-text'>
                    A javascript web editor which sends code to a server and compiles it and returns the output.
                    It features color coded keywords like some popular editors.
                  </div> 
                  <div className='desc-footer'>
                    <ul>
                      <li>Vanilla Javascript</li>
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>Node.js</li>
                    </ul>
                    <div className='links'>
                      <div><a href="https://github.com/freddym123/src"><i className="fa-brands fa-github"></i></a></div>
                      <div><i className="fa-solid fa-up-right-from-square"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='project'>
            <div className='project-text' data-aos="fade-right">
                <p className='featured'>Featured Project</p>
                <h3>Chat App</h3>
                <div className='desc'>
                  <div className='desc-text'>
                    A messaging application that allows one to one communication through the use of sockets. The applications features a friend request and friend list feature. User is able to click through chats to text their contacts.
                  </div> 
                  <div className='desc-footer'>
                    <ul>
                      <li>React Js</li>
                      <li>CSS</li>
                      <li>MongoDB</li>
                      <li>Node.js</li>
                    </ul>
                    <div className='links'>
                      <div><a href="https://github.com/freddym123/Chat-App"><i className="fa-brands fa-github"></i></a></div>
                      <div><i className="fa-solid fa-up-right-from-square"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='image-container' data-aos="fade-left"><img src={chatapp}></img></div>
              
            </div>
            <div className='project'>
              <div className='image-container' data-aos="fade-right"><img src={recipeapp}></img></div>
              <div className='project-text' data-aos="fade-left">
              <p className='featured'>Featured Project</p>
                <h3>Recipe App</h3>
                <div className='desc'>
                  <div className='desc-text'>
                    A recipe application that shows popular recipes. First it shows the ingridients that are needed, then user can decide if they want to cook it. User can then save recipes if they are logged In.
                  </div>
                  <div className='desc-footer'>
                    <ul>
                      <li>React Js</li>
                      <li>CSS</li>
                      <li>Python</li>
                      <li>Node.js</li>
                      <li>mySQL</li>
                    </ul>
                    <div className='links'>
                      <div><a href="https://github.com/freddym123/Recipe-App"><i className="fa-brands fa-github"></i></a></div>
                      <div><i className="fa-solid fa-up-right-from-square"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='project'>
            <div className='project-text' data-aos="fade-right">
                <p className='featured'>Featured Project</p>
                <h3>Pixel Editor</h3>
                <div className='desc'>
                  <div className='desc-text'>
                    A Pixel Art editor that has key features found in other pixel art editors. Features include save, upload, squares, erase, and a paint bucket  
                  </div> 
                  <div className='desc-footer'>
                    <ul>
                      <li>React Js</li>
                      <li>CSS</li>
                      <li>HTML</li>
                    </ul>
                    <div className='links'>
                      <div><a href="https://github.com/freddym123/Pixel-Art-Editor"><i className="fa-brands fa-github"></i></a></div>
                      <div><i className="fa-solid fa-up-right-from-square"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='image-container' data-aos="fade-left"><img src={pixelEditor}></img></div>
              
            </div>

          </div>
        </div>

        <div className='formWrapper' data-aos="fade-up">
          <h2 className='sub-title last'>Get In Touch</h2>
          <p>Here is my contact information to get in touch with me.</p>
          <p>Thank you for taking some time out of your day going through my portfolio and I hope we get in touch soon.</p>
          <div className='contactInfo'>
            <div>
              Email: <a href="mailto:freddymartinez567767@gmail.com">freddymartinez567767@gmail.com</a>
            </div>
            <div>
              Phone Number: (323)674-5796
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
