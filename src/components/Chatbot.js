"use client";

import { useState } from "react";
import axios from "axios";
import styles from "../styles/Chatbot.module.css";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle the search and fetch data from Wikipedia
  const handleSearch = async () => {
    if (!question) {
      setAnswer("Please enter a question.");
      return;
    }

    const validTopics = [ "pakistan", "cpec",   "continent",
      "country",
      "city",
      "desert",
      "pakistan desert",
      "pakistan population",
      "pakistan capital",
      "pakistan currency",
      "pakistan language",
      "pakistan religion",
      "pakistan map",
      "pakistan flag",
      "pakistan national flag",
      "pakistan geography",
      "population",
      "animals population in pakistan",
      "vegetables  in pakistan",
      "fruits in pakistan",
      "pakistan's all geography",
      "cpec routes with images",
      "mines",
      "river",
      "mountain",
      "climate",
      "geography",
      "landform",
      "ocean",
      "region",
      "topography",
      "earthquake",
      "plate tectonics",
      "latitude",
      "longitude",
      "population of all countries",
      "Geography of Pakistan",
      "Asian continent",
      "Himalayan mountain range",
      "Indus River system",
      "Karakoram Highway",
      "Gwadar Port",
      "Balochistan Plateau",
      "Thar Desert",
      "Punjab plains",
      "K2 mountain",
      "Northern Pakistan glaciers",
      "Sindh coastal belt",
      "Makran coastal highway",
      "SEZs under CPEC",
      "Pakistan's border with India",
      "Pak-Afghan border geography",
      "China-Pakistan border",
      "Arabian Sea coastline",
      "CPEC rail network",
      "Belt and Road Initiative",
      "Economic geography of Pakistan",
      "Geopolitical importance of Pakistan",
      "China-Pakistan Economic Corridor (CPEC)",
      "Pak-China relations",
      "CPEC investment zones",
      "Sustainable development under CPEC",
      "Resource-rich Balochistan",
      "Himalayas in Pakistan",
      "Deosai Plains",
      "Gilgit-Baltistan region",
      "Silk Road connection",
      "Pakistan in South Asia",
      "Asia's geopolitical hub",
      "CPEC infrastructure development",
      "Fertile lands of Punjab",
      "Urban centers under CPEC",
      "Pakistan's river systems",
      "Asian highlands",
      "Khunjerab Pass",
      "Chitral Valley",
      "Lahore to Kashgar trade route",
      "CPEC maritime trade",
      "Gwadar Free Zone",
      "Hydro projects under CPEC",
      "Havelian dry port",
      "Pakistan's irrigation network",
      "Thal Desert",
      "Pak-China Friendship Highway",
      "Energy corridors in Asia",
      "Pakistan as a transit hub",
      "Multan-Sukkur Motorway",
      "Natural resources of Pakistan",
      "Strategic importance of Gwadar",
      "Asian deserts and plateaus",
      "Balochistan's mineral wealth",
      "Karachi port",
      "Makran range",
      "Development in Khyber Pakhtunkhwa",
      "Role of CPEC in trade",
      "Global significance of CPEC",
      "Tourism in northern Pakistan",
      "Rivers of Asia",
      "CPEC special economic zones",
      "CPEC's impact on South Asia",
      "Karachi's industrial belt",
      "Pakistan's mountain ranges",
      "Tectonic plates of Asia",
      "Asian trade routes",
      "Pakistan's coal reserves",
      "Copper mines in Pakistan",
      "Asia's water resources",
      "Agriculture in Pakistan",
      "Urbanization in Pakistan",
      "CPEC cultural exchange",
      "Regional connectivity via CPEC",
      "Impact of CPEC on Asia",
      "Transport systems under CPEC",
      "Pakistan's export potential",
      "Asia's economic belt",
      "Pakistan's topography",
      "Challenges in CPEC projects",
      "Climate of Pakistan",
      "Coastal regions of Asia",
      "Asia's silk route",
      "Pak-China border passes",
      "Natural gas reserves in Pakistan",
      "Hydropower potential of Pakistan",
      "Asian continental features",
      "Pakistani port cities",
      "Trade zones in Pakistan",
      "Gwadar International Airport",
      "Balancing ecology and economy",
      "CPEC industrial parks",
      "Investment opportunities in CPEC",
      "CPEC's role in Pakistan's economy",
      "Connectivity with Central Asia",
      "Regional stability through CPEC",
      "CPEC's energy mix",
      "Cross-border trade via CPEC",
      "Landforms of Pakistan",
      "CPEC transportation networks",
      "Pakistan-China cultural ties",
      "Tourism potential under CPEC",
      "CPEC's strategic vision",
      "Importance of Arabian Sea",
      "Pakistan's Himalayan foothills",
      "CPEC energy projects",
      "The Geography of Pakistan .",
   "The China-Pakistan Economic Corridor (CPEC) .",
   "The Asian continent .",
   "The Himalayan mountain range .",
   "The Indus River system .",
  " The Karakoram Highway .",
  " The Gwadar Port .",
  " The Balochistan Plateau .",
  " The Thar Desert .",
  " The Punjab plains .",
  " The K2 mountain .",
  " The Northern Pakistan glaciers .",
  " The Sindh coastal belt .",
  " The Makran coastal highway .",
  " The CPEC energy projects .",
  " The SEZs under CPEC .",
  " The Pakistan's border with India .",
  "The Pak-Afghan border geography .",
  " The China-Pakistan border .",
  "The Arabian Sea coastline .",
   "The CPEC rail network .",
   " The Belt and Road Initiative .",
    "The Economic geography of Pakistan .",
   "The Geopolitical importance of Pakistan .",
   "The Pak-China relations .",
   "The CPEC investment zones .",
  " The Sustainable development under CPEC .",
  " The Resource-rich Balochistan .",
  " The Himalayas in Pakistan .",
  " The Deosai Plains .",
  " The Gilgit-Baltistan region .",
  " The Silk Road connection .",
  " The Pakistan in South Asia .",
  " The Asia's geopolitical hub .",
  " The CPEC infrastructure development .",
  " The Fertile lands of Punjab .",
  " The Asian highlands .",
   "The Khunjerab Pass .",
  " The Chitral Valley .",
  " The Lahore to Kashgar trade route .",
  " The CPEC maritime trade .",
  " The Gwadar Free Zone .",
  " The Hydro projects under CPEC .",
  " The Havelian dry port .",
  " The Pakistan's irrigation network .",
  " The Thal Desert .",
  " The Pak-China Friendship Highway .",
  " The Energy corridors in Asia .",
  " The Pakistan as a transit hub .",
  " The Multan-Sukkur Motorway .",
   "The Natural resources of Pakistan",
  "The Strategic importance of Gwadar",
  "The Asian deserts and plateaus",
  "The Balochistan's mineral wealth",
  "The Karachi port",
  "The Makran range",
  "The Development in Khyber Pakhtunkhwa",
  "The Role of CPEC in trade",
  "The Global significance of CPEC",
  "The Tourism in northern Pakistan",
  "The Rivers of Asia",
  "The CPEC special economic zones",
  "The CPEC's impact on South Asia",
  "The Karachi's industrial belt",
  "The Pakistan's mountain ranges",
  "The Tectonic plates of Asia",
  "The Asian trade routes",
  "The Pakistan's coal reserves",
  "The Copper mines in Pakistan",
  "The Asia's water resources",
  "The Agriculture in Pakistan",
  "The Urbanization in Pakistan",,
  "The CPEC cultural exchange",
  "The Regional connectivity via CPEC",
  "The Impact of CPEC on Asia",
  "The Transport systems under CPEC",
  "The Pakistan's export potential",
  "The Asia's economic belt",
  "The Pakistan's topography",
  "The Challenges in CPEC projects",
  "The Climate of Pakistan",
  "The Coastal regions of Asia",
  "The Asia's silk route",
  "The Pak-China border passes",
  "The Natural gas reserves in Pakistan",
  "The Hydropower potential of Pakistan",
  "The Asian continental features",
  "The Pakistani port cities",
  "The Trade zones in Pakistan",
  "The Gwadar International Airport",
  "The Balancing ecology and economy",
  "The CPEC industrial parks",
  "The Investment opportunities in CPEC",
  "The CPEC's role in Pakistan's economy",
  "The Connectivity with Central Asia",
  "The Regional stability through CPEC",
  "The CPEC's energy mix",
  "The Cross-border trade via CPEC",
  "The Landforms of Pakistan",
  "The CPEC transportation networks",
  "The Pakistan-China cultural ties",
  "The Tourism potential under CPEC",
  "The CPEC's strategic vision",
  "The Importance of Arabian Sea",
  "The Pakistan's Himalayan foothills",
"   The CPEC's infrastructure development",
"   The Sustainable development under CPEC",
"   The Pakistan's natural resources",
"   The CPEC's impact on South Asia",
"   The Pakistan's topography",
"   The CPEC's energy mix",
"   The Pakistan's coastal regions",
"   The CPEC's strategic vision",
"   The CPEC's role in Pakistan's economy",
"   The CPEC's investment zones",
"   The CPEC's cultural exchange",
"   The CPEC's transportation networks",
"   The CPEC's maritime trade",
"   The CPEC's infrastructure development",
"   The CPEC's energy projects",
"   The CPEC's strategic vision",
    ];
    const isRelated = validTopics.some((topic) =>
      question.toLowerCase().includes(topic)
    );

    if (!isRelated) {
      setAnswer("Please ask questions related to Geography, Pakistan, or CPEC.");
      return;
    }

    setLoading(true);
    setAnswer("");
    setImage(null);

    try {
      // Fetch search results from Wikipedia API
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          srsearch: question,
          format: "json",
          origin: "*",
        },
      });

      const searchResults = response.data.query.search;
      if (searchResults && searchResults.length > 0) {
        const pageTitle = searchResults[0].title;

        // Fetch detailed information from Wikipedia
        const pageResponse = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            pageTitle
          )}`
        );

        const pageData = pageResponse.data;
        setAnswer(pageData.extract || "No detailed explanation available.");

        // If the page contains an image, set it
        if (pageData.thumbnail && pageData.thumbnail.source) {
          setImage(pageData.thumbnail.source);
        }
      } else {
        setAnswer("No relevant results found. Please try a different question.");
      }
    } catch (error) {
      console.error(error);
      setAnswer("Error fetching data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <h1 className={styles.title}>This chat bot is made by MHZ developers <br></br><br></br>Geography Chatbot</h1>
      <textarea
        className={styles.textarea}
        placeholder="Ask me about Geography, Pakistan, or CPEC..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleSearch} className={styles.button}>
        {loading ? "Loading..." : "Get Answer"}
      </button>
      {answer && (
        <div className={styles.responseContainer}>
          <h2 className={styles.responseTitle}>Answer:</h2>
          <p>{answer}</p>
          {image && <img src={image} alt="Related visual" className={styles.image} />}
        </div>
      )}
    </div>
  );
};

export default Chatbot;