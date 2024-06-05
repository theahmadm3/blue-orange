import { activities } from "../data/activities";

function RecentActivity() {
    return (
        <section className="pa2 flex flex-column justify-between" id="activity">
            <h1 className="w-100 tc">Recent Activities</h1>
            <div className="mt2 shadow-1 pa1 br3 mb2 pb2 overflow-auto flex flex-wrap justify-between" style={{ minHeight: '400px' }}>
                {activities.map((research) => (
                    <div key={research.id} className="activity-card flex-shrink-0 br3 pa2 ma2">
                        <div
                            style={{
                                backgroundImage: `url(${research.image})`,
                                height: '300px',
                                width:'500px',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className="activity-image"
                        ></div>
                        {/* <div className="activity-details bg-dark-gray pa3 br3 mt2">
                            <p className="activity-date white-60">{research.date}</p>
                            <h2 className="activity-title white">{research.title}</h2>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecentActivity;
