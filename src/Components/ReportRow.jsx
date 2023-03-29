import '../styles/Report.css';
function ReportRow(props) {
    return(
        <div className="box">
            <span style={{fontSize: props.font} }>{props.children}</span>
        </div>
    );
}

export default ReportRow;