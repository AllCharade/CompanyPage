import { Allert } from "../components/Allert";
import { CardBlack } from "../components/CardBlack";
import { CardWhite } from "../components/CardWhite";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { LargeCard } from "../components/LargeCard";
import { Navbar } from "../components/Navbar";
import { ParagraphOG } from "../components/ParagraphOG";
import { TechStripe } from "../components/TechStripe";
import { TextAndButton } from "../components/TextAndButton";

function App() {
  return (
    <>
      {/* Wrapper */}
      <div className="w-full bg-[#151515]">
      <div className="w-full flex justify-center">
      
          {/* Start Page Layout */}
          <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
          <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
            <Navbar indicator={1} />

            <Heading heading="Own the best website for your industry without compromise" />
            <TextAndButton
              buttonText="Book a consultation"
              text="We not only impress with our design implementations, but also achieve unprecedented performance in web development. Websites are created using the latest and most bulletproof technologies on the market.
              Whether it's a website or software programming, we do it."
              reference="/contact"
            />

            <TechStripe />
            <Allert head="Services" text="We offer a wide range of web and software development, implemented at an academic level using the most modern technologies."/>

            {/* WrapperLayout */}
            <div className="w-full flex justify-center items-center">
              <div className="desktop:w-[100%] desktop-xl:w-[75%]  grid tablet:gap-10 gap-11 mobile:gap-20  mobile:grid-rows-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:grid-rows-2 desktop:grid-rows-1 desktop:grid-cols-2 place-content-center place-items-center mt-10 mb-[5%]">
                <CardBlack
                  classname="tablet:-translate-x-28"
                  text1="Webdesign&"
                  text2="programming"
                  discription="50% of website visitors leave by a loading time of 3 seconds. We build website that finishes loading in 200ms without CMS."
                />
                <CardWhite
                  classname="tablet:translate-x-28"
                  text1="Software"
                  text2="Development"
                  description="Do you want custom software for your company without being stuck with third-party software subscriptions?"
                />
                <CardWhite
                  classname="tablet:-translate-x-28"
                  text1="Consulting &"
                  text2="administration"
                  description="If you need advice on your CMS, we advise or administer your existing website. Whether TYPO3 or Wordpress"
                />
                <CardBlack
                  classname="tablet:translate-x-28"
                  text1="Artifical"
                  text2="intelligence "
                  discription="Images and text by a powerful AI, perfect for clients with limited budgets."
                />
              </div>
            </div>
            <LargeCard />
            <ParagraphOG></ParagraphOG>
            
          </div>
          
        </div>
        
      </div>
      <Footer></Footer>
      </div>
      
    </>
  );
}
export default App;
