/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function Navlist(props) {
    const { data, handleredirect, } = props;
    return (
      <>
        <div className='navbar-list'>
          {data.map((item, idx)=>(
            <a onClick={ () => handleredirect(item)} key={idx}> {item} </a>
          ))}
        </div>
      </>
    )
  }
  
  export default Navlist