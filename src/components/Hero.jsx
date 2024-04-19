import { logo, Underline } from "../assets"



const Hero = () => {
  return (
    <header className=' w-full justify-center items-center flex-col '>
      <nav className=" px-5 py-7 flex flex-row items-center justify-between  ">
        <div className="flex items-start">
          <img
            width={100}
            src={logo} />
        </div>
        <div fle>
          <button className=" px-7 py-2 bg-black text-[14px] text-white font-light font-openSans rounded-[50px]">
            GitHub
          </button>
        </div>

      </nav>
      <div className=" flex py-[70px] flex-1 flex-col items-center justify-center gap-5 ">
        <h4 className=" items-center text-center text-5xl font-extrabold font-openSans leading-[60px]">
          Summarize Articles With <br className=" max-xl:hidden" /><span className=""> OpenAI GPT-4
            <img
              className=" ml-[100px]"
              src={Underline} />
          </span>
        </h4>
        <h2 className=" items-center font-openSans font-light text-[16px] text-center w-[700px]  leading-7 max-xl:w-[500px]">
          Transform lengthy articles into concise summaries with our AI-powered website. Perfect for busy professionals, students, and anyone who values quick, digestible insights.
        </h2>
      </div>

    </header>
  )
}

export default Hero