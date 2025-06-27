export default function Explore(){

    const locations = [
  {
    img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_42,w_800,h_450,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/mgm-hotels-resorts/Picture_of_Mahabalipuram_featuring_a_temple_in_day_time.jpeg_r3er3p",
    title: "Chennai",
    text: "Chennai is a must-visit for its serene beaches, ancient temples and best foods"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPeb8oowKAnqsuEaAOwn7MKWdmD_biR6KXA&s",
    title: "Delhi",
    text: "Visit Delhi for its historic forts, bustling bazaars, and vibrant street food."
  },
  {
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/c8/3a.jpg",
    title: "Mumbai",
    text: "Experience Mumbai's coastal charm, Bollywood vibe, and lively nightlife."
  },
  {
    img: "https://www.agoda.com/wp-content/uploads/2024/07/bangalore-feature-1244x700.jpg",
    title: "Bangalore",
    text: "Bangalore is the tech capital with cool weather, cafes, and gardens to explore."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Meenakshi_Amman_West_Tower.jpg",
    title: "Madurai",
    text: "Discover Madurai’s ancient Meenakshi Temple and rich Tamil history."
  },
  {
    img: "https://www.bandipurnationalparkonline.in/images/mysore-palace.jpg",
    title: "Mysore",
    text: "Mysore offers royal palaces, vibrant markets, and cultural charm in every corner."
  },
  {
    img: "https://hikerwolf.com/wp-content/uploads/2020/06/Ooty.jpg",
    title: "Ooty",
    text: "Ooty offers lush green hills, cool climate, and scenic lake views perfect for nature lovers."
  },
  {
    img: "https://lp-cms-production.imgix.net/2024-08/shutterstock2044878389.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    title: "Kerala",
    text: "Kerala is known for its tranquil backwaters, palm-lined beaches, and rich cultural traditions."
  }
];

return(
  <section id="Explore">
    <div className="d-flex justify-content-center flex-wrap  gap-4 mt-5 p-4">
            {locations.map((location,index)=>(
            <div className="card" key={index} style={{ width: '18rem'}}>
                <img src={location.img} style={{height:'200px',objectFit:'cover'}} className="card-img-top" alt={location.title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{location.title}</h5>
                    <p className="card-text flex-grow-1">{location.text}</p>
                    <a href={`https://www.google.com/search?q=${location.title}`} className="btn btn-primary mt-auto">Visit</a>
                </div>
                </div>

            ))}
          </div>
          </section>
);

}