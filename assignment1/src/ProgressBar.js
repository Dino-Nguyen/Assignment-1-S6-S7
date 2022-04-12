
const ProgressBar = (props) => {
const {label, percentage} = props
console.log("per " , percentage)
return <div className="progressBarCon">
    <div className="proOuter">
        <div className="proInner" style={{height:`${percentage}%`}}></div>

    </div>
    <label>{label}</label>
</div>
}

export default ProgressBar