/*
The World Translator

- Write a function named helloWorld that:
  - takes 1 argument, a language code (e.g. "es", "de", "en")
  - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
- Call that function for each of the supported languages and log the result to make sure it works.
*/

// 
function helloWorld(languageCode) {
   //create some container that's going to hold the translated value	
  var translated;


	//TODO: translate language Code to translated... but do this later
	if (languageCode === "es") {
		translated = "Hola, mundo";
	} else if (languageCode === "de") {
	  translated = "Nine!";
	}else {
		  //default to English
		  translated = "Hello, world!";  
	}
	//return the translated value to the caller
	return translated;
	}


console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
