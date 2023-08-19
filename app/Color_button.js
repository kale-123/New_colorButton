const Color_button = (props) => {

   
    return (
        <div className='Color_button'>
            <h2>This id a {props.data.color_name}</h2>    
            <button className={props.data.color_name+"1"} onClick={props.handleChangeColor}>{props.data.color_name}</button>
        </div>
    );
}
export default Color_button;
