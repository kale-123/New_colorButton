const Count_color = (props) =>{

    return (
        <div className='Count_color'>
            <h3>{props.data.color_name}:-{props.data.color_count}</h3>
        </div>
    );

};
export default Count_color;
