import '../stylesheet/btn.css'

/*props se puede pasar directamente*/
function Btn({ texto, isBtnClic, manClic}){
  return(
    <button className={ isBtnClic ? 'btn-clic' : 'btn-ren' }
    onClick={manClic}>
      {texto}
    </button>
  );
}

/*exportar por defecto sirve para 1 */
export default Btn;