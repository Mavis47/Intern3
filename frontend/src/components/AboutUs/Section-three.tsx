import "../AboutUs Styles/section-three.css";
import Person1 from "/person1.jpg";
import Person2 from "/person2.jpg";
import Person3 from "/person3.jpg";

export default function SectionThree() {
  return (
    <div style={{ height: "377px" }} className="section-three">
      <div className="box-container" id="main-contain">
        <div className="box1" id="box1">
          <img src={Person1} alt="" className="image1" />
        </div>
        <div className="box2">
          <img src={Person2} alt="" className="image1" id="img2" />
        </div>
        <div className="box3">
          <img src={Person3} alt="" className="image1" />
        </div>
      </div>
      <div className="text-middle">
        <div
          id="indicators-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                eius dolore odit natus.
              </h1>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <h1>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati doloremque harum ullam eligendi omnis asperiores
                voluptatum, neque aperiam, tenetur, praesentium quod iusto.
              </h1>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita cumque unde eaque consequuntur quidem nam rerum
                consectetur molestiae aliquam vitae. Maiores unde obcaecati quos
                sapiente eum numquam, eveniet quia doloribus est facilis
                exercitationem!
              </h1>
            </div>
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
       
      </div>
       <div className="text">
            <p style={{textAlign: "center"}}>John Doe</p>
            <p style={{textAlign: "center"}}>CEO</p>
        </div>
    </div>
  );
}
