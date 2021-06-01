export const Services = (props) => {
  return (
    <div id='services'>
      <div className='container'>
        <div className='section-title'>
          <h5>
            What are the types of Bone Marrow Transplant?
          </h5>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='row'>
                  {' '}
                  <div className="col-md-1 col-xs-1">
                    <img src={d.img} alt='' />{' '}
                  </div>
                  
                  <div className="col-md-11 col-xs-11 service-desc">
                    {/* <h3>{d.name}</h3> */}
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
