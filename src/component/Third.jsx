function Third({map, flag}) {

    return (
        <>
            <h1>Tempat yang masih beroperasi</h1><br />
            <div className="third">
                
                <img className="flag" src= {flag} alt="" />
                <img className="map" src={map} alt="" />
            </div><br />
        </>
    )
}

export default Third