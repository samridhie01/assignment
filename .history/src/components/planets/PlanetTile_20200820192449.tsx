const PlanetTile = ()=>{
return(
    <PlanetIcon />
      <div className={classes.flexContainer2}>
        <h3>{data.name}</h3>
        <h4>{data.terrain}</h4>
        <Link to={{pathname: '/details', search: `?search=${name}`}}>View details</Link>
      </div>
)


}

export default PlanetTile;