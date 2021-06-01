export const Features = (props) => {
  return (
    <div id='features'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <img style={{maxWidth: '100%'}} id="bone-img" src="../img/marrow.png" />
          </div>
          <div   className='col-xs-6 col-md-6'>
          {props.data
            ? props.data.map((d, i) => (

                  <div key={`${d.title}-${i}`} id="bone"  className='row'>
                    {' '}
                    {/* <i className={d.icon}></i> */}
                    {/* <h3>{d.title}</h3> */}
                    <p>{d.text}</p>
                  </div>
                  
                
              ))
            : 'Loading...'}
            </div>
        </div>
      </div>
    </div>
  )
}

