import './index.scss'

const Waves = () =>{
    return (
        <>
            <div class="header">

            {/* <!--Content before waves--> */}
                <div class="inner-header flex">
                    <h1>Go with the flow</h1>
                </div>
            {/* <!--Waves Container--> */}
                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(203, 218, 213,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgb(203, 218, 213,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgb(203, 218, 213,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0f1012" />
                    </g>
                    </svg>
                </div>
            {/* <!--Waves end--> */}

            </div>
            {/* <!--Header ends--> */}

            {/* <!--Content starts--> */}
                <div class="content flex">
                    <p>Vijay Karthik</p>
                </div>
            {/* <!--Content ends--> */}

        </>
    )
}

export default Waves