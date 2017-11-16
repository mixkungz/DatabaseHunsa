const Portlet = (props) =>(
    <div>
        <div className="card card-transparent">
            <div className="card-block no-padding">
                <div id="card-circular-minimal" className="card card-default">
                    <div className="card-block">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Portlet