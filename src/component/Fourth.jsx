function Fourth({detail1, detail2, detail3}) {

    return (
        <>
            <h1>Gambar yang lainnya</h1><br />
            <div className="scroll-container">
                <img src= {detail1} alt="" />
                <img src={detail2} alt="" />
                <img src={detail3} alt="" />
            </div><br />
        </>
    )
}

export default Fourth