import { Link } from "react-router-dom";
import ve from "../assets/WhatsApp Image 2023-12-15 at 13.02.04.jpeg";

function About() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center mt-28">
        <h2 className="text-3xl font-bold mb-5">About Me</h2>
        <div class=" h-[18rem] w-[18rem] rounded-full order-first md:w-1/3 md:order-none md:h-[16rem] lg:h-[19rem] xl:h-[24rem]">
          <img src={ve} alt="" class="h-full w-full  object-cover" />
        </div>
        <p class="text-xl font-bold my-10 text-center">
          
            Welcome to my Digital Space!!
          </p>

        <p class="text-lg mb-10 text-center">
          
            Victor, a Technical Trainer with over a year of experience teaching
            IT and Computer Science to college students. Skilled in managing
            classroom sessions to enhance engagement and learning outcomes.
          </p>

        <p class="text-lg mb-10 text-center">
          
            With a 2+ year coding background, I focus on crafting innovative
            digital experiences and providing reliable, clean code for complex
            problem-solving. Proficient in Python, Java, C, JavaScript,
            frameworks like Django, Flask, React, Vue, Angular, Springboot,
            Laravel, and tools such as VS Code, Android Studio Code, Eclipse,
            Docker, and Terminal.
          </p>

        <p class="text-lg mb-10 text-center">
          
            Alumnus of <Link to="https://moringaschool.com/" className="text-teal-400">Moringa School's </Link> Software Development course, setting the
            foundation for my professional journey. Eager to collaborate on tech
            projects and dedicated to finding optimal solutions.
          
        </p>

        <p class="text-lg mb-8 text-center">
          
            Passionate about shaping the future of digital innovation. Outside
            coding, I enjoy books, hiking, and exploring virtual realms through
            gaming.
          
        </p>

        <div class="text-lg mb-10 text-center">
          <p>
            For my education details, refer to my CV:{" "}
            <a href="https://drive.google.com/file/d/1Lcx1-iZwV_bGCChPxl6CA2qDaphX-l3Y/view?usp=share_link" className="text-teal-400">
              Resume Link
            </a>
          </p>
          <p>
            Contact: Email -{" "}
            <a href="mailto:vonmak2@gmail.com" className="text-teal-400">vonmak2@gmail.com</a> | LinkedIn
            -{" "}
            <a href="https://www.linkedin.com/in/victorondari/" className="text-teal-400">victorondari</a>{" "}
            | Twitter - <a href="https://twitter.com/SniffRades" className="text-teal-400">@SniffRades</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
