const Button = ({color, text}) => {
    return (  
        <button className='btn' style={{backgroundColor: color}}>{text}</button>
    )
}
 
Button.defaultProps = {
    color: 'blue',
    text: ':)'
}
export default Button