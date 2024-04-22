import { copy, linkIcon, loader, tick } from "../assets"
//Importing hooks from react 
import { useState, useEffect } from "react"
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {

  { /* We are going to use the useState to fetch the API */ }

  const [article, setArticle] = useState({
    url: '',
    summary: ''
  });

  //Calling out an hook 
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();


  // This is the function within which going to make the API request
  // so it has to be a asunchronous function

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!article.url) {
      console.error('URL is required');
      return;
    }

    const { data } = await getSummary({ articleURL: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      setArticle(newArticle);
      console.log(newArticle);
    }
  }












  return (
    <section className=" mt-16 w-full max-w-xl ">
      {/*Search - First component*/}
      <div className=" flex flex-col w-full gap-2">
        {/*Creating a from element which must have an onSubmit  */}
        <form
          className=" relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className=" absolute left-0 my-2 ml-3 w-5"
          />
          {/*Every input has a value and with that value there must
        be a way to change that value so we use onChange 
        we are going to make the input a required element.
        peer means when you need to style an element base on the state of the sibling element ypu
        can make that sibling element with a peer class and can use modifiers. The button is going to be the sibling element
        */}

          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({
              ...article, url: e.target.value
            })}
            required
            className="url_input peer"
          />
          {/*Button will have a type of submit since we are inside a form */}
          <button
            type="submit"
            className=" submit_btn
         peer-focus:text-gray-700
            "
          >
            Submit
          </button>

        </form>
        {/* URL history  */}

      </div>
      {/*Dispaly the results */}

    </section>
  )
}

export default Demo


{/**
onChange: This is an event that happens when you type something into a text box on a website.

(e) => ...: This part is like a function that says "when the text box changes, do the following...".

setArticle: This is a special function in React that you use to change the information that is shown on the website.

{ ...article, url: e.target.value }: This is a way to update the information about an article. Imagine you have a box where you can write the web address of an article. This part of the code says "take all the information about the article, but change the web address to whatever is written in the box".


*/}

{ ...article, url: e.target.value }: This is a way to update the information about an article. Imagine you have a box where you can write the web address of an article. This part of the code says "take all the information about the article, but change the web address to whatever is written in the box".


*/}
