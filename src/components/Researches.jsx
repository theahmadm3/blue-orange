function Researches() {
    return (
        <section className="pa2 flex flex-column justify-between" id='projects'>
            <h2 className="w-100 tc">Our Projects</h2>
            <input type="search" className="outline-0 black bn mb3 pa2 pl3 pr3 br-pill shadow-1 w-80 center bg-white" placeholder='search' />
            <div className="mt2 mb2 pb2 overflow-auto inline-flex justify-between" style={{ minHeight: '400px' }}>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
                <div className="flex-shrink-0 mr2 br3 bg-green pa4"></div>
            </div>
        </section>
    )
}

export default Researches
