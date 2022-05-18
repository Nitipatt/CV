import React from "react";
import profile from "./img.jpg";
import rocket from "./rocket.jpg";
import greenline from "./greenline-synergy.jpg";
import ntb from "./ntb.png";
import kmitl from "./kmitl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faAddressBook,
  faPhone,
  faEnvelope,
  faLocationDot,
  faPeopleGroup,
  faBriefcase,
  faBook,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faAddressCard,
  faAddressBook,
  faPhone,
  faEnvelope,
  faLocationDot,
  faPeopleGroup,
  faLinkedin
);

function App() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col lg:flex-row gap-y-6">
      <section
        id="profile"
        className="flex flex-col gap-y-6 bg-white lg:bg-green-900 lg:w-3/8 lg:max-w-lg lg:pb-8"
      >
        <div className="bg-green-900 flex flex-col gap-y-4 p-8">
          <img
            src={profile}
            className="w-36 h-36 rounded-full object-cover object-bottom mx-auto"
            alt="Nitipat Suttirak"
          />
          <div id="Name" className="text-center font-bold">
            <span className="text-gray-200 text-3xl">NITIPAT SUTTIRAK</span>
            <div className="text-gray-300 text-lg">
              Key Software Engineer (Frontend)
            </div>
          </div>
          <hr className="w-4/5 mx-auto hidden lg:block" />
        </div>
        <section id="about" className="px-6 text-gray-600 lg:text-gray-200">
          <div className="text-xl font-bold flex gap-2">
            <FontAwesomeIcon icon="address-card" className="self-center" />
            <span>ABOUT</span>
          </div>
          <div className="pl-8">
            <span className="font-bold">
              An 28 years old enthusiastic developer who pay attention on every
              line of code.
            </span>
            <ol className="list-disc">
              <li>
                Five years of developer experience job in many open-source
                technologies.
              </li>
              <li>
                Extensive of various programming experience through ten years of
                learning.
              </li>
              <li>
                Excellent communication skills with strong background working
                directly with co-workers and client to identify business
                objectives and establish requirements.
              </li>
              <li>Good communication in both English and Thai.</li>
            </ol>
          </div>
        </section>
        <section id="contact" className="px-6 text-gray-600 lg:text-gray-200">
          <div className="text-xl font-bold flex gap-2">
            <FontAwesomeIcon icon="address-book" className="self-center" />
            <span>CONTACT</span>
          </div>
          <div className="pl-8">
            <div className="flex gap-2">
              <FontAwesomeIcon icon="phone" className="self-center text-sm" />
              <span>(+66) 64-612-9469</span>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon="envelope"
                className="self-center text-sm"
              />
              <span>nitipat.suttirak@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon="location-dot"
                className="self-start mt-1 text-sm"
              />
              <span>
                189/23 Modilvill Watphraifah Rd. Bangdua Muang Pathumthani 12000
              </span>
            </div>
          </div>
        </section>
        <section id="contact" className="px-6 text-gray-600 lg:text-gray-200">
          <div className="text-xl font-bold flex gap-2">
            <FontAwesomeIcon icon="people-group" className="self-center" />
            <span>FOLLOW ME</span>
          </div>
          <div className="pl-8">
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="self-center text-sm"
              />
              <a href="https://www.linkedin.com/in/nitipats/">
                https://www.linkedin.com/in/nitipats/
              </a>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faGithub}
                className="self-center text-sm"
              />
              <a href="https://github.com/Nitipatt">
                https://github.com/Nitipatt
              </a>
            </div>
          </div>
        </section>
      </section>
      <hr className="w-4/5 mx-auto lg:hidden block border-gray-400" />
      <section
        id="quanlification"
        className="flex flex-col gap-y-6 px-6 lg:p-8 text-gray-600 w-full pb-8 overflow-auto"
      >
        <section id="experience">
          <div className="text-xl font-bold flex gap-2 lg:text-2xl">
            <FontAwesomeIcon
              icon={faBook}
              className="self-center text-green-900"
            />
            <span>SKILLS</span>
          </div>
          <hr className="hidden lg:block border-gray-400 mt-2" />
          <div className="flex flex-wrap mt-4 gap-4 font-bold text-center">
            <div className="w-3/12 p-1 rounded border hover:bg-green-900 hover:text-gray-200 flex justify-center items-center">
              <div>NodeJS</div>
            </div>
            <div className="w-3/12 p-1 rounded border hover:bg-green-900 hover:text-gray-200 flex justify-center items-center">
              <div>React</div>
            </div>
            <div className="w-3/12 p-1 rounded border hover:bg-green-900 hover:text-gray-200 flex justify-center items-center">
              <div>Next</div>
            </div>
            <div className="w-3/12 p-1 rounded border hover:bg-green-900 hover:text-gray-200 flex justify-center items-center">
              <div>Redux Architecture</div>
            </div>
            <div className="w-3/12 p-1 rounded border hover:bg-green-900 hover:text-gray-200 flex justify-center items-center">
              <div>Vue</div>
            </div>
            <div className="w-3/12 p-1 rounded border hover:bg-green-900 hover:text-gray-200 flex justify-center items-center">
              <div>Nuxt</div>
            </div>
            <div className="w-3/12 p-1 rounded border hover:bg-green-900 hover:text-gray-200 flex justify-center items-center">
              <div>GraphQL</div>
            </div>
          </div>
        </section>
        <section id="experience">
          <div className="text-xl font-bold flex gap-2 lg:text-2xl">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="self-center text-green-900"
            />
            <span>JOB EXPERIENCES</span>
          </div>
          <hr className="hidden lg:block border-gray-400 mt-2" />
          <div className="flex flex-col mt-4 gap-2">
            <div className="flex gap-4">
              <img
                src={ntb}
                className="w-12 h-12 rounded object-cover object-bottom"
                alt="Ngernturbo"
              />
              <div>
                <div className="font-bold text-lg">
                  Ngernturbo Company Limited
                </div>
                <div className="font-bold text-gray-500">3 years 8 months</div>
              </div>
            </div>
            <div>
              <ol className="list-disc pl-24">
                <li>
                  <div className="font-bold">Key Software Engineer</div>
                  <div className="font-bold text-gray-500">
                    July 2021 - Present (11 months)
                  </div>
                  <ol className="list-disc pl-4">
                    <li>
                      Research and Develop new library with best practice.
                    </li>
                    <li>
                      Find the best solution that match with requirements.
                    </li>
                    <li>Give advice to everyone for frontend development.</li>
                    <li>
                      Create frontend courses and articles for company employee.
                    </li>
                    <li>
                      Develop web application using react, nextjs, graphQL,
                      tailwindCSS, Flux, Redux
                    </li>
                  </ol>
                </li>
                <li className="mt-2">
                  <div className="font-bold">Lead Software Engineer</div>
                  <div className="font-bold text-gray-500">
                    July 2020 - June 2021 (1 year)
                  </div>
                  <ol className="list-disc pl-4">
                    <li>Lead team to achive team's achivement.</li>
                    <li>
                      Design web application system including database design,
                      API, data flow.
                    </li>
                    <li>Initial project structure with best practice.</li>
                    <li>
                      Develop web application using react, nextjs, graphQL,
                      tailwindCSS.
                    </li>
                  </ol>
                </li>
                <li className="mt-2">
                  <div className="font-bold">Senior Software Engineer</div>
                  <div className="font-bold text-gray-500">
                    November 2018 - June 2020 (1 year 8 months)
                  </div>
                  <ol className="list-disc pl-4">
                    <li>Create general components for internal use.</li>
                    <li>Give advice to junior and intern developer.</li>
                    <li>
                      Develop web application using react, nextjs, vue, nuxtjs.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <div className="flex gap-4">
              <img
                src={rocket}
                className="w-12 h-12 rounded-full object-cover object-bottom"
                alt="Rocket"
              />
              <div>
                <div className="font-bold text-lg">Rocket Invention</div>
                <div className="font-bold text-gray-500">
                  Aug 2018 - Aug 2019 (1 year 1 month)
                </div>
              </div>
            </div>
            <div>
              <ol className="list-disc pl-24">
                <li>
                  <div className="font-bold">
                    Co-founder & Freelance developer
                  </div>
                  <div className="font-bold text-gray-500">
                    Aug 2018 - Aug 2019 (1 year 1 month)
                  </div>
                  <ol className="list-disc pl-4">
                    <li>Deal requirements and negotiate with customer.</li>
                    <li>
                      Developed automatic mocking data connect with MS SQL for
                      test with image processing application. ( C# )
                    </li>
                    <li>
                      Developed driver scoring system with sensor which help
                      driver to pay attention with driving. ( C# )
                    </li>
                    <li>
                      Developed online course website. ( PHP Codeigniter )
                    </li>
                    <li>Government website using PHP Laravel</li>
                    <li>Social media mobile application using Ionic 4</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <div className="flex gap-4">
              <img
                src={greenline}
                className="w-12 h-12 object-cover object-bottom"
                alt="Rocket"
              />
              <div>
                <div className="font-bold text-lg">Greenline Synergy Co.</div>
                <div className="font-bold text-gray-500">
                  Aug 2016 - April 2018 (1 year 8 months)
                </div>
              </div>
            </div>
            <div>
              <ol className="list-disc pl-24">
                <li>
                  <div className="font-bold">Full Stack Developer</div>
                  <div className="font-bold text-gray-500">
                    Aug 2018 - Aug 2019 (1 year 1 month)
                  </div>
                  <ol className="list-disc pl-4">
                    <li>
                      Developed doctor profile system for internal use in large
                      hospital group of Thailand.
                    </li>
                    <li>
                      Designed and developed mobile application for doctor in
                      large hospital group of Thailand.
                    </li>
                    <li>
                      Fixed bugs and add functions of many existed project.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section id="education">
          <div className="text-xl font-bold flex gap-2 lg:text-2xl">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="self-center text-green-900"
            />
            <span>EDUCATION</span>
          </div>
          <hr className="hidden lg:block border-gray-400 mt-2" />
          <div className="flex flex-col mt-4 gap-2">
            <div className="flex gap-4">
              <img
                src={kmitl}
                className="w-12 h-12 rounded-full object-cover object-bottom"
                alt="KMITL"
              />
              <div>
                <div className="font-bold text-lg">
                  King Mongkut's Institute of Technology Ladkrabang
                </div>
                <div className="font-bold">
                  Bachelor of Engineering - BE, Computer Engineering
                </div>
                <div className="font-bold text-gray-500">2012 - 2016</div>
                <div className="font-bold text-gray-500">GPA : 2.73</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
