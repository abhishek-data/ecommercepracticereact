import './PageStyle.css'

const Home = () => {
    return (
      <div>
        <section className="content-section container">
            <h2 className="section-header">TOURS</h2>
            <div>
                <div className="tour-row">
                    <span className="tour-item tour-date">JUL 16</span>
                    <span className="tour-item tour-city">DETROIT, MI</span>
                    <span className="tour-item tour-arena">DTE ENERGY MUSIC THEATRE</span>
                    <button type="button" className="tour-item tour-btn btn btn-primary">BUY TICKETS</button>
                </div>
                <div className="tour-row">
                    <span className="tour-item tour-date">JUL 19</span>
                    <span className="tour-item tour-city">TORONTO, ON</span>
                    <span className="tour-item tour-arena">BUDWEISER STAGE</span>
                    <button type="button" className="tour-item tour-btn btn btn-primary">BUY TICKETS</button>
                </div>
                <div className="tour-row">
                    <span className="tour-item tour-date">JUL 22</span>
                    <span className="tour-item tour-city">BRISTOW, VA</span>
                    <span className="tour-item tour-arena">JIGGY LUBE LIVE</span>
                    <button type="button" className="tour-item tour-btn btn btn-primary">BUY TICKETS</button>
                </div>
                <div className="tour-row">
                    <span className="tour-item tour-date">JUL 29</span>
                    <span className="tour-item tour-city">PHOENIX, AZ</span>
                    <span className="tour-item tour-arena">AK-CHIN PAVILION</span>
                    <button type="button" className="tour-item tour-btn btn btn-primary">BUY TICKETS</button>
                </div>
                <div className="tour-row">
                    <span className="tour-item tour-date">AUG 2</span>
                    <span className="tour-item tour-city">LAS VEGAS, NV</span>
                    <span className="tour-item tour-arena">T-MOBILE ARENA</span>
                    <button type="button" className="tour-item tour-btn btn btn-primary">BUY TICKETS</button>
                </div>
                <div className="tour-row">
                    <span className="tour-item tour-date">AUG 7</span>
                    <span className="tour-item tour-city">CONCORD, CA</span>
                    <span className="tour-item tour-arena">CONCORD PAVILION</span>
                    <button type="button" className="tour-item tour-btn btn btn-primary">BUY TICKETS</button>
                </div>
            </div>
        </section>
        
      </div>
    );
  };
  
  export default Home;