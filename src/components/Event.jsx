const Event = () => {
  return (
    <>
      <div className="event-section pb-10">
        <h2 className="">RECENT EVENTS</h2>
        <div className=" flex flex-wrap gap-5 lg:gap-20 max-w-[90%] mx-auto justify-between ">
          <div className="card  ">
            <div className="card-header">
              <img src="./event_01.png" alt="" />
            </div>
            <div className="card-body">
              <h3>Valentine Linkup 2023</h3>
              <p>
                Fun filled service hangout to mark valentine with lots of love
                and gifts{" "}
              </p>

              <div className="category">
                <div className="date">Date : 19th February, 2023</div>
                <div className="date">Venue : JJT Park, Ikeja</div>
              </div>
              <button className="btn mt-6 whitespace-nowrap ">View Album</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="./event_02.png" alt="" />
            </div>
            <div className="card-body">
              <h3>Remember Me </h3>
              <p>Service hangout to mark Easter season and reflect on Jesus </p>

              <div className="category">
                <div className="date">Date : Sunday 9th April, 2023</div>
                <div className="date">Venue : Yabatech Royal Guest House</div>
              </div>
              <button className="btn mt-6">View Album</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="./event_03.png" alt="" />
            </div>
            <div className="card-body">
              <h3>Hope for Makoko</h3>
              <p>
                Community Service for Part of Solution Nur/Pri School, Makoko
              </p>

              <div className="category">
                <div className="date">Date : 13th May, 2023</div>
                <div className="date">Venue : Makoko Community of Lagos</div>
              </div>
              <button className="btn mt-6">View Album</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="./event_04.png" alt="" />
            </div>
            <div className="card-body">
              <h3 className="space">Rendezvous 2022</h3>
              <p className="space">
                Year-End Celebration centered on Food, Music, Games, Fashion &
                Fun!{" "}
              </p>

              <div className="category space">
                <div className="date">Date : 24th December, 2022</div>
                <div className="date">Venue : Yabatech Royal Guest House</div>
              </div>
              <button className="btn mt-6">View Album</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
