import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 grid grid-cols-5 item-center gap-2">
        <div
          onClick={() => setCategory("Lakefront")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Lakefront"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          }  opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatLakeFront.jpg"}
            width={25}
            height={25}
            alt="Category Lakefront"
          />
          <span className="text-xs">Lakefront</span>
        </div>
        <div
          onClick={() => setCategory("Cabins")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Cabins"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatCabins.jpg"}
            width={25}
            height={25}
            alt="Category Cabins"
          />
          <span className="text-xs">Cabins</span>
        </div>
        <div
          onClick={() => setCategory("AmazingViews")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "AmazingViews"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatViews.jpg"}
            width={25}
            height={25}
            alt="Category Amazing views"
          />
          <span className="text-xs">Amazing views</span>
        </div>
        <div
          onClick={() => setCategory("Trending")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Trending"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatTrending.jpg"}
            width={25}
            height={25}
            alt="Category Trending"
          />
          <span className="text-xs">Trending</span>
        </div>
        <div
          onClick={() => setCategory("HistoricalHomes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "HistoricalHomes"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatHistorical.jpg"}
            width={25}
            height={25}
            alt="Category historical homes"
          />
          <span className="text-xs">Historical homes</span>
        </div>
        <div
          onClick={() => setCategory("AmazingPools")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "AmazingPools"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatPools.jpg"}
            width={25}
            height={25}
            alt="Category amazing pools"
          />
          <span className="text-xs">Amazing pools</span>
        </div>
        <div
          onClick={() => setCategory("TinyHomes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "TinyHomes"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatTinyHomes.jpg"}
            width={25}
            height={25}
            alt="Category tiny homes"
          />
          <span className="text-xs">Tiny homes</span>
        </div>
        <div
          onClick={() => setCategory("BeachFront")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "BeachFront"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatBeachFront.jpg"}
            width={25}
            height={25}
            alt="Category beach front"
          />
          <span className="text-xs">Beach front</span>
        </div>
        <div
          onClick={() => setCategory("CountrySide")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "CountrySide"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatCountrySide.jpg"}
            width={25}
            height={25}
            alt="Category country side"
          />
          <span className="text-xs">Country side</span>
        </div>
        <div
          onClick={() => setCategory("OMG")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "OMG"
              ? "border-gray-800 hover:border-gray-900"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src={"/category_img/CatOmg.jpg"}
            width={25}
            height={25}
            alt="Category OMG!"
          />
          <span className="text-xs">OMG!</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
