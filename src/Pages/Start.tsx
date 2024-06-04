import { CardBlack } from "../components/CardBlack";
import { CardWhite } from "../components/CardWhite";
import { Heading } from "../components/Heading";
import { Navbar } from "../components/Navbar"
import { TechStripe } from "../components/TechStripe";
import { TextAndButton } from "../components/TextAndButton";


function App() {
  return (
    <>
    {/* Wrapper */}
    <div className="w-full flex justify-center">


      {/* Start Page Layout */}
     <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
      <div className="mobile:w-full tablet:w-full desktop:w-[70%]">
      <Navbar>
        
      </Navbar>

      <Heading heading="Navigating the digital landscape for success"></Heading>
      <TextAndButton buttonText="Book a consultation" text="Our digital marketing agency helps businesses grow and succeed online througth a range of services including SEO, programming, consulting, and content creation.">
        
      </TextAndButton>

      <TechStripe>

      </TechStripe>

      {/* WrapperLayout */}
      <div className="w-full grid gap-11  mobile:grid-rows-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:grid-rows-2 desktop:grid-rows-1 desktop:grid-cols-2 place-content-center place-items-center my-10">
        <CardBlack text1="Search enginge" text2="optimization" discription="A huge part of users ignore the second page of search results. Let's make your site visible and drive traffic."></CardBlack>
        <CardWhite text1="Webdesign &" text2="programming" description="50% of all website visitors leave after a loading time of just 3 seconds. Be the owner of a website that finishes loading in 200ms."></CardWhite>
        <CardWhite text1="Consulting &" text2="administration" description="Even if you need advice on your content management system, we are happy to advise you or administer your existing website."></CardWhite>
        <CardBlack text1="Artificial" text2="intelligence" discription="AI created images and text with custom AI, perfect for clients with limited budgets. Delivers quality content without the price tag of traditional creators."></CardBlack>
      </div>

      </div >

     </div>
    </div>
    </>
  );
}
export default App;
