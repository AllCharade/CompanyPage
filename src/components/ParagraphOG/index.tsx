import { Heading } from "../Heading"

export const ParagraphOG = () => {
    return (
        <>
            <div className="w-full flex flex-col ">
                <Heading heading="Compiled with the same technologies as Facebook and Spotify. "></Heading>
                <p
                    className="w-full px-8 mt-4 select-none font-mono text-[#9e9e9e]
                          font-extralight"
                >Using the latest front-end and back-end technologies, we achieve loading speeds that no content management system can even remotely match. 
                Loading times as low as 300 milliseconds.
                We make no compromises when it comes to design. Modern, timeless designs where there are no limits to the possibilities. 
                We do not use any modular systems and for this reason we are not subject to any restrictions in the entire development process.</p>
                <div className="w-full flex justify-end">
                    <div className="w-[12rem] animate-loading mt-10 -translate-x-8 rounded-full border-2 border-[#98f144]"></div>
                </div>
            </div>
        </>
    )
}