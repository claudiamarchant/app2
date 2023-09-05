import '../stylesheet/cont.css'

/*dejar espacio entre los props*/
function Cont({ num }){
  return(
    <div className='cont'>
      {num}
    </div>
  );
}

export default Cont;