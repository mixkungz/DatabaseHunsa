const Card = (props) =>(
    <div>
        <div class="widget-9 card no-border no-margin widget-loader-bar shadow">
            <div class="full-height d-flex flex-column">
                <div class="card-header ">
                    <div class="card-title text-black">
                        <span class="font-montserrat fs-12 all-caps">{props.topic}</span>
                    </div>
                </div>
                <div class="p-l-20">
                   <h2 class="no-margin p-b-5"><i class={props.myclass}></i>{props.value}</h2>
                </div>
            </div>
        </div>
    </div>
)

export default Card;