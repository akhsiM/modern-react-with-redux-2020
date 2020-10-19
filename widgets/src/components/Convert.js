import React, { useState, useEffect } from "react";
import axios from "axios";
// Google Translate API Key from Stephen: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// This API can only be used when your browser is at ‘http://localhost:3000’.
// If you try to make a request to the API from any other address, the request will fail.

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    if (debouncedText) {
      doTranslation();
    }
  
  }, [language, debouncedText]);

  useEffect(() => {

    const timerId = setTimeout(() =>{
        setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    }

  }, [text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
};
export default Convert;
