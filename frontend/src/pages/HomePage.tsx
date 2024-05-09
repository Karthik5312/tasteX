import React, { useState, useEffect } from "react";
import landingImage from "../assets/landing.png";
import Pizza from "../assets/Pizza.png";
import Biriyani from "../assets/Biriyani.png";
import Shawarma from "../assets/Shawarma.png";
import Juice from "../assets/Juice.png";
import Burger from "../assets/Burger.png";
import Dosa from "../assets/Dosa.png"; // Import Dosa image
import Cake from "../assets/Cake.png"; // Import Cake image
import Puttu from "../assets/Puttu.png"; // Import Puttu image
import IceCream from "../assets/IceCream.png"; // Import IceCream image
import Pasta from "../assets/Pasta.png"; // Import Pasta image
import Noodles from "../assets/Noodles.png"; // Import Noodles image
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import ImageButton from "@/components/ImageButton";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0 for circular queue
  const buttonWidth = 180; // Width of each button
  const totalButtons = 11; // Total number of buttons (including duplicates)

  useEffect(() => {
    const handleResize = () => {
      setCurrentPage(0); // Reset current page on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchSubmit = (searchFormValues: SearchForm) => { // Specify the type of searchFormValues
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalButtons);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalButtons - 1 : prevPage - 1));
  };

  const renderButtons = () => {
    const buttonsToShow = [
      { image: Biriyani, name: "Biriyani" },
      { image: Pizza, name: "Pizza" },
      { image: Burger, name: "Burger" },
      { image: Shawarma, name: "Shawarma" },
      { image: Juice, name: "Juice" },
      { image: Dosa, name: "Dosa" }, // Add Dosa
      { image: Cake, name: "Cake" }, // Add Cake
      { image: Puttu, name: "Puttu" }, // Add Puttu
      { image: IceCream, name: "Ice Cream" }, // Add Ice Cream
      { image: Pasta, name: "Pasta" }, // Add Pasta
      { image: Noodles, name: "Noodles" }, // Add Noodles
    ];

    // Calculate the available width for buttons
    const availableWidth = window.innerWidth - 380; // 380px is the width of other elements in the container

    // Calculate the maximum number of buttons that can fit in the available space
    const maxButtons = Math.floor(availableWidth / buttonWidth);

    // Calculate the start index based on the current page
    const startIndex = currentPage % buttonsToShow.length;

    // Calculate the end index based on the maximum number of buttons
    const endIndex = (startIndex + maxButtons) % buttonsToShow.length;

    // Adjust the buttons to display based on the calculated start and end indices
    const visibleButtons = endIndex > startIndex
      ? buttonsToShow.slice(startIndex, endIndex)
      : buttonsToShow.slice(startIndex).concat(buttonsToShow.slice(0, endIndex));

    return visibleButtons.map((button, index) => (
      <div className="button-container" key={index}>
        <ImageButton image={button.image} name={button.name} circle size={180} />
        <span className="mt-2">{button.name}</span>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-gray-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-left pl-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">What's on your mind?</h2>
          <div className="flex items-center">
            <button
              className="text-gray-600 hover:text-gray-900 mr-2"
              onClick={handlePrevPage}
            >
              &lt;
            </button>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={handleNextPage}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex">
          {renderButtons()}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="Landing" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the TasteX App for faster ordering and personalized recommendations
          </span>
          <img src={appDownloadImage} alt="App Download" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
