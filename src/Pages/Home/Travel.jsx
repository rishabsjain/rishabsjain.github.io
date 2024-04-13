import data from "../../data/index.json";

export default function Travel() {
  return (
    <section className="travel--section" id="travel">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Travel Guides</h2>
          <p className="sub--title">Places I feel qualified to give recommendations for</p>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.travel?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <a href={item.link}>{item.link_name} 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}