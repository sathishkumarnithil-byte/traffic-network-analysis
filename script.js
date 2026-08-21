// =====================================================
// TRAFFIC NETWORK ANALYSIS
// Complete JavaScript File
// =====================================================


// =====================================================
// BUTTON SOUND
// =====================================================

function buttonSound() {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    const audioContext = new AudioContext();

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
        700,
        audioContext.currentTime
    );

    gain.gain.setValueAtTime(
        0.08,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.08
    );

    oscillator.connect(gain);

    gain.connect(audioContext.destination);

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.08
    );
}



// =====================================================
// SUCCESS SOUND
// =====================================================

function successSound() {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    const audioContext = new AudioContext();

    const notes = [523, 659, 784];

    notes.forEach((frequency, index) => {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        const startTime =
            audioContext.currentTime +
            index * 0.12;

        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
            frequency,
            startTime
        );

        gain.gain.setValueAtTime(
            0.08,
            startTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            startTime + 0.10
        );

        oscillator.connect(gain);

        gain.connect(audioContext.destination);

        oscillator.start(startTime);

        oscillator.stop(
            startTime + 0.10
        );

    });
}



// =====================================================
// HOME → ANALYSIS SETUP
// =====================================================

function startAnalysis() {

    document.body.innerHTML = `

        <div class="page">

            <h1>Traffic Network Analysis</h1>

            <h2>Analysis Setup</h2>

            <p>
                Select a traffic network to begin.
            </p>

            <button
                onclick="buttonSound(); showNetwork()">

                Simple Network

            </button>

        </div>

    `;
}



// =====================================================
// SHOW TRAFFIC NETWORK
// =====================================================

function showNetwork() {

    document.body.innerHTML = `

        <div class="page">

            <h1>Traffic Network Analysis</h1>

            <h2>Simple Traffic Network</h2>


            <div class="network-container">

                <svg
                    class="traffic-network"
                    viewBox="0 0 600 500"
                    xmlns="http://www.w3.org/2000/svg">


                    <!-- ROAD AB -->

                    <line
                        x1="300"
                        y1="80"
                        x2="130"
                        y2="230"
                        class="road-line"
                    />


                    <!-- ROAD AC -->

                    <line
                        x1="300"
                        y1="80"
                        x2="470"
                        y2="230"
                        class="road-line"
                    />


                    <!-- ROAD BC -->

                    <line
                        x1="130"
                        y1="230"
                        x2="470"
                        y2="230"
                        class="road-line"
                    />


                    <!-- ROAD BD -->

                    <line
                        x1="130"
                        y1="230"
                        x2="300"
                        y2="400"
                        class="road-line"
                    />


                    <!-- ROAD CD -->

                    <line
                        x1="470"
                        y1="230"
                        x2="300"
                        y2="400"
                        class="road-line"
                    />


                    <!-- FLOW LABEL x1 -->

                    <text
                        x="190"
                        y="145"
                        class="flow-label">

                        x₁

                    </text>


                    <!-- FLOW LABEL x2 -->

                    <text
                        x="390"
                        y="145"
                        class="flow-label">

                        x₂

                    </text>


                    <!-- FLOW LABEL x3 -->

                    <text
                        x="285"
                        y="215"
                        class="flow-label">

                        x₃

                    </text>


                    <!-- FLOW LABEL x4 -->

                    <text
                        x="190"
                        y="330"
                        class="flow-label">

                        x₄

                    </text>


                    <!-- FLOW LABEL x5 -->

                    <text
                        x="390"
                        y="330"
                        class="flow-label">

                        x₅

                    </text>


                    <!-- INTERSECTION A -->

                    <circle
                        cx="300"
                        cy="80"
                        r="38"
                        class="intersection-circle"
                    />


                    <!-- INTERSECTION B -->

                    <circle
                        cx="130"
                        cy="230"
                        r="38"
                        class="intersection-circle"
                    />


                    <!-- INTERSECTION C -->

                    <circle
                        cx="470"
                        cy="230"
                        r="38"
                        class="intersection-circle"
                    />


                    <!-- INTERSECTION D -->

                    <circle
                        cx="300"
                        cy="400"
                        r="38"
                        class="intersection-circle"
                    />


                    <!-- LABEL A -->

                    <text
                        x="300"
                        y="89"
                        text-anchor="middle"
                        class="node-label">

                        A

                    </text>


                    <!-- LABEL B -->

                    <text
                        x="130"
                        y="239"
                        text-anchor="middle"
                        class="node-label">

                        B

                    </text>


                    <!-- LABEL C -->

                    <text
                        x="470"
                        y="239"
                        text-anchor="middle"
                        class="node-label">

                        C

                    </text>


                    <!-- LABEL D -->

                    <text
                        x="300"
                        y="409"
                        text-anchor="middle"
                        class="node-label">

                        D

                    </text>


                </svg>

            </div>


            <div class="info-box">

                <p>
                    <strong>A, B, C and D</strong>
                    represent intersections.
                </p>

                <p>
                    <strong>x₁, x₂, x₃, x₄ and x₅</strong>
                    represent traffic flow.
                </p>

            </div>


            <button
                onclick="buttonSound(); showInput()">

                Continue →

            </button>

        </div>

    `;
}



// =====================================================
// TRAFFIC INPUT SCREEN
// =====================================================

function showInput() {

    document.body.innerHTML = `

        <div class="page">

            <h1>Traffic Network Analysis</h1>

            <h2>Traffic Data Input</h2>

            <p class="subtitle">

                Enter the measured traffic values below.

            </p>


            <div class="input-card">


                <label>

                    Traffic entering Intersection A

                    <span>
                        vehicles/hour
                    </span>

                </label>


                <input
                    type="number"
                    id="trafficA"
                    placeholder="Example: 300"
                >



                <label>

                    Traffic leaving Intersection B

                    <span>
                        vehicles/hour
                    </span>

                </label>


                <input
                    type="number"
                    id="trafficB"
                    placeholder="Example: 100"
                >



                <label>

                    Traffic entering Intersection C

                    <span>
                        vehicles/hour
                    </span>

                </label>


                <input
                    type="number"
                    id="trafficC"
                    placeholder="Example: 50"
                >



                <label>

                    Measured flow on Road BC (x₃)

                    <span>
                        vehicles/hour
                    </span>

                </label>


                <input
                    type="number"
                    id="flowX3"
                    placeholder="Example: 120"
                >



                <label>

                    Measured flow on Road BD (x₄)

                    <span>
                        vehicles/hour
                    </span>

                </label>


                <input
                    type="number"
                    id="flowX4"
                    placeholder="Example: 80"
                >

            </div>


            <button
                onclick="buttonSound(); generateEquations()">

                Generate Equations →

            </button>

        </div>

    `;
}



// =====================================================
// GENERATE EQUATIONS
// =====================================================

function generateEquations() {

    const trafficA =
        Number(
            document.getElementById("trafficA").value
        );


    const trafficB =
        Number(
            document.getElementById("trafficB").value
        );


    const trafficC =
        Number(
            document.getElementById("trafficC").value
        );


    const flowX3 =
        Number(
            document.getElementById("flowX3").value
        );


    const flowX4 =
        Number(
            document.getElementById("flowX4").value
        );


    if (

        document.getElementById("trafficA").value === "" ||

        document.getElementById("trafficB").value === "" ||

        document.getElementById("trafficC").value === "" ||

        document.getElementById("flowX3").value === "" ||

        document.getElementById("flowX4").value === ""

    ) {

        alert(
            "Please enter all traffic values."
        );

        return;

    }


    // Equation 2 constant

    const equation2 =
        flowX3 +
        flowX4 -
        trafficB;


    // Equation 3 constant

    const equation3 =
        trafficC -
        flowX3;


    document.body.innerHTML = `

        <div class="page">

            <h1>Traffic Network Analysis</h1>

            <h2>
                Generated Linear Equations
            </h2>


            <div class="equation-card">

                <h3>
                    Traffic Conservation Equations
                </h3>


                <div class="equation">

                    x₁ + x₂ = ${trafficA}

                </div>


                <div class="equation">

                    x₁ = ${equation2}

                </div>


                <div class="equation">

                    x₂ − x₅ = ${equation3}

                </div>

            </div>


            <div class="matrix-card">

                <h3>
                    Matrix Representation
                </h3>


                <p class="matrix-description">

                    The unknown traffic flows are
                    x₁, x₂ and x₅.

                </p>


                <div class="matrix-equation">

                    AX = B

                </div>


                <p>

                    The system will now be solved
                    using the
                    <strong>
                        Gauss-Jordan method
                    </strong>.

                </p>

            </div>


            <button
                onclick="
                    buttonSound();
                    solveTraffic(
                        ${trafficA},
                        ${equation2},
                        ${equation3}
                    )
                ">

                Solve Using Gauss-Jordan →

            </button>

        </div>

    `;
}



// =====================================================
// SHOW MATRIX
// =====================================================

function solveTraffic(
    trafficA,
    equation2,
    equation3
) {

    document.body.innerHTML = `

        <div class="page">

            <h1>
                Traffic Network Analysis
            </h1>


            <h2>
                Gauss-Jordan Method
            </h2>


            <div class="matrix-card">

                <h3>
                    Augmented Matrix
                </h3>


                <div class="matrix-equation">

                    [ 1&nbsp;&nbsp;1&nbsp;&nbsp;0 | ${trafficA} ]

                    <br>

                    [ 1&nbsp;&nbsp;0&nbsp;&nbsp;0 | ${equation2} ]

                    <br>

                    [ 0&nbsp;&nbsp;1&nbsp;&nbsp;-1 | ${equation3} ]

                </div>


                <p>

                    Unknowns:
                    <strong>
                        x₁, x₂, x₅
                    </strong>

                </p>

            </div>


            <button
                onclick="
                    buttonSound();
                    showResults(
                        ${trafficA},
                        ${equation2},
                        ${equation3}
                    )
                ">

                Perform Gauss-Jordan Elimination →

            </button>

        </div>

    `;
}



// =====================================================
// GAUSS-JORDAN
// =====================================================

function showResults(
    trafficA,
    equation2,
    equation3
) {

    let matrix = [

        [1, 1, 0, trafficA],

        [1, 0, 0, equation2],

        [0, 1, -1, equation3]

    ];


    let steps = [];


    steps.push({

        title:
            "Initial Augmented Matrix",

        matrix:
            copyMatrix(matrix)

    });


    // STEP 1
    // R₂ → R₂ − R₁

    for (
        let j = 0;
        j < 4;
        j++
    ) {

        matrix[1][j] =
            matrix[1][j] -
            matrix[0][j];

    }


    steps.push({

        title:
            "Step 1: R₂ → R₂ − R₁",

        matrix:
            copyMatrix(matrix)

    });


    // STEP 2
    // R₂ → −R₂

    for (
        let j = 0;
        j < 4;
        j++
    ) {

        matrix[1][j] =
            -matrix[1][j];

    }


    steps.push({

        title:
            "Step 2: R₂ → −R₂",

        matrix:
            copyMatrix(matrix)

    });


    // STEP 3
    // R₁ → R₁ − R₂

    for (
        let j = 0;
        j < 4;
        j++
    ) {

        matrix[0][j] =
            matrix[0][j] -
            matrix[1][j];

    }


    steps.push({

        title:
            "Step 3: R₁ → R₁ − R₂",

        matrix:
            copyMatrix(matrix)

    });


    // STEP 4
    // R₃ → R₃ − R₂

    for (
        let j = 0;
        j < 4;
        j++
    ) {

        matrix[2][j] =
            matrix[2][j] -
            matrix[1][j];

    }


    steps.push({

        title:
            "Step 4: R₃ → R₃ − R₂",

        matrix:
            copyMatrix(matrix)

    });


    // STEP 5
    // R₃ → −R₃

    for (
        let j = 0;
        j < 4;
        j++
    ) {

        matrix[2][j] =
            -matrix[2][j];

    }


    steps.push({

        title:
            "Step 5: R₃ → −R₃",

        matrix:
            copyMatrix(matrix)

    });


    let stepsHTML = "";


    steps.forEach(
        (step) => {

            stepsHTML += `

                <div class="step-card">

                    <h3>
                        ${step.title}
                    </h3>


                    <div class="matrix-display">

                        ${formatMatrix(
                            step.matrix
                        )}

                    </div>

                </div>

            `;

        }
    );


    const x1 =
        matrix[0][3];


    const x2 =
        matrix[1][3];


    const x5 =
        matrix[2][3];


    document.body.innerHTML = `

        <div class="page">

            <h1>
                Traffic Network Analysis
            </h1>


            <h2>
                Gauss-Jordan Elimination
            </h2>


            <div class="steps-container">

                ${stepsHTML}

            </div>


            <div class="result-card">

                <h2>
                    Final Traffic Flow
                </h2>


                <div class="result-value">

                    x₁ = ${x1}
                    vehicles/hour

                </div>


                <div class="result-value">

                    x₂ = ${x2}
                    vehicles/hour

                </div>


                <div class="result-value">

                    x₅ = ${x5}
                    vehicles/hour

                </div>

            </div>


            <button
                onclick="
                    buttonSound();
                    showTrafficSummary(
                        ${x1},
                        ${x2},
                        ${x5}
                    )
                ">

                View Traffic Analysis →

            </button>

        </div>

    `;
}



// =====================================================
// COPY MATRIX
// =====================================================

function copyMatrix(matrix) {

    return matrix.map(
        row => [...row]
    );

}



// =====================================================
// FORMAT MATRIX
// =====================================================

function formatMatrix(matrix) {

    let html = `

        <table class="matrix-table">

    `;


    matrix.forEach(
        row => {

            html += `<tr>`;


            row.forEach(
                (value, index) => {

                    if (index === 3) {

                        html += `

                            <td class="separator">

                                ${value}

                            </td>

                        `;

                    }
                    else {

                        html += `

                            <td>

                                ${value}

                            </td>

                        `;

                    }

                }
            );


            html += `</tr>`;

        }
    );


    html += `

        </table>

    `;


    return html;

}



// =====================================================
// FINAL TRAFFIC SUMMARY
// =====================================================

function showTrafficSummary(x1, x2, x5) {

    // Find the lowest traffic flow
    const lowest = Math.min(x1, x2, x5);

    let lowestRoad;

    if (lowest === x1) {
        lowestRoad = "Road AB";
    }
    else if (lowest === x2) {
        lowestRoad = "Road AC";
    }
    else {
        lowestRoad = "Road CD";
    }


    document.body.innerHTML = `

        <div class="dashboard">

            <!-- HEADER -->

            <div class="dashboard-header">

                <div class="traffic-icon">
                    🚦
                </div>

                <div>
                    <h1>Traffic Network Analysis</h1>
                    <p>Final Traffic Flow Assessment</p>
                </div>

            </div>


            <!-- STATUS -->

            <div class="summary-banner">

                <div>

                    <span class="banner-label">
                        NETWORK STATUS
                    </span>

                    <h2>
                        Traffic Analysis Complete
                    </h2>

                </div>

                <div class="status-badge">
                    ✓ ANALYSIS COMPLETE
                </div>

            </div>


            <!-- NETWORK MAP -->

            <h2 class="section-title">
                Traffic Network
            </h2>


            <div class="interactive-map">

                <svg
                    viewBox="0 0 700 560"
                    class="result-network"
                    xmlns="http://www.w3.org/2000/svg">


                    <!-- ROAD AB -->

                    <line
                        x1="350"
                        y1="90"
                        x2="150"
                        y2="260"
                        class="${
                            lowestRoad === "Road AB"
                            ? "result-road recommended-road"
                            : "result-road"
                        }"
                    />


                    <!-- ROAD AC -->

                    <line
                        x1="350"
                        y1="90"
                        x2="550"
                        y2="260"
                        class="${
                            lowestRoad === "Road AC"
                            ? "result-road recommended-road"
                            : "result-road"
                        }"
                    />


                    <!-- ROAD BC -->

                    <line
                        x1="150"
                        y1="260"
                        x2="550"
                        y2="260"
                        class="result-road"
                    />


                    <!-- ROAD BD -->

                    <line
                        x1="150"
                        y1="260"
                        x2="350"
                        y2="450"
                        class="result-road"
                    />


                    <!-- ROAD CD -->

                    <line
                        x1="550"
                        y1="260"
                        x2="350"
                        y2="450"
                        class="${
                            lowestRoad === "Road CD"
                            ? "result-road recommended-road"
                            : "result-road"
                        }"
                    />


                    <!-- AB FLOW -->

                    <rect
                        x="205"
                        y="145"
                        width="105"
                        height="48"
                        rx="12"
                        class="flow-box low-box"
                    />

                    <text
                        x="257"
                        y="165"
                        text-anchor="middle"
                        class="flow-road-name">

                        AB

                    </text>

                    <text
                        x="257"
                        y="183"
                        text-anchor="middle"
                        class="flow-value">

                        ${x1}

                    </text>


                    <!-- AC FLOW -->

                    <rect
                        x="390"
                        y="145"
                        width="105"
                        height="48"
                        rx="12"
                        class="flow-box medium-box"
                    />

                    <text
                        x="442"
                        y="165"
                        text-anchor="middle"
                        class="flow-road-name">

                        AC

                    </text>

                    <text
                        x="442"
                        y="183"
                        text-anchor="middle"
                        class="flow-value">

                        ${x2}

                    </text>


                    <!-- BC -->

                    <rect
                        x="295"
                        y="225"
                        width="110"
                        height="42"
                        rx="10"
                        class="flow-box neutral-box"
                    />

                    <text
                        x="350"
                        y="251"
                        text-anchor="middle"
                        class="flow-road-name">

                        BC • x₃

                    </text>


                    <!-- BD -->

                    <rect
                        x="205"
                        y="345"
                        width="110"
                        height="42"
                        rx="10"
                        class="flow-box neutral-box"
                    />

                    <text
                        x="260"
                        y="371"
                        text-anchor="middle"
                        class="flow-road-name">

                        BD • x₄

                    </text>


                    <!-- CD FLOW -->

                    <rect
                        x="385"
                        y="345"
                        width="110"
                        height="48"
                        rx="12"
                        class="flow-box high-box"
                    />

                    <text
                        x="440"
                        y="365"
                        text-anchor="middle"
                        class="flow-road-name">

                        CD

                    </text>

                    <text
                        x="440"
                        y="383"
                        text-anchor="middle"
                        class="flow-value">

                        ${x5}

                    </text>


                    <!-- NODE A -->

                    <circle
                        cx="350"
                        cy="90"
                        r="42"
                        class="result-node"
                    />

                    <text
                        x="350"
                        y="100"
                        text-anchor="middle"
                        class="result-node-text">

                        A

                    </text>


                    <!-- NODE B -->

                    <circle
                        cx="150"
                        cy="260"
                        r="42"
                        class="result-node"
                    />

                    <text
                        x="150"
                        y="270"
                        text-anchor="middle"
                        class="result-node-text">

                        B

                    </text>


                    <!-- NODE C -->

                    <circle
                        cx="550"
                        cy="260"
                        r="42"
                        class="result-node"
                    />

                    <text
                        x="550"
                        y="270"
                        text-anchor="middle"
                        class="result-node-text">

                        C

                    </text>


                    <!-- NODE D -->

                    <circle
                        cx="350"
                        cy="450"
                        r="42"
                        class="result-node"
                    />

                    <text
                        x="350"
                        y="460"
                        text-anchor="middle"
                        class="result-node-text">

                        D

                    </text>


                </svg>


                <div class="map-legend">

                    <span>
                        🟢 Lowest Flow
                    </span>

                    <span>
                        🟡 Medium Flow
                    </span>

                    <span>
                        🔴 Highest Flow
                    </span>

                </div>

            </div>



            <!-- TRAFFIC CARDS -->

            <h2 class="section-title">
                Calculated Traffic Flow
            </h2>


            <div class="traffic-results">


                <div class="traffic-card normal-card">

                    <div class="card-top">

                        <span class="road-icon">
                            🚗
                        </span>

                        <span class="road-name">
                            ROAD AB
                        </span>

                    </div>


                    <div class="traffic-number">
                        ${x1}
                    </div>


                    <div class="unit">
                        vehicles / hour
                    </div>


                    <div class="status normal">
                        ● LOW TRAFFIC
                    </div>

                </div>



                <div class="traffic-card moderate-card">

                    <div class="card-top">

                        <span class="road-icon">
                            🚗
                        </span>

                        <span class="road-name">
                            ROAD AC
                        </span>

                    </div>


                    <div class="traffic-number">
                        ${x2}
                    </div>


                    <div class="unit">
                        vehicles / hour
                    </div>


                    <div class="status moderate">
                        ● MEDIUM TRAFFIC
                    </div>

                </div>



                <div class="traffic-card high-card">

                    <div class="card-top">

                        <span class="road-icon">
                            🚗
                        </span>

                        <span class="road-name">
                            ROAD CD
                        </span>

                    </div>


                    <div class="traffic-number">
                        ${x5}
                    </div>


                    <div class="unit">
                        vehicles / hour
                    </div>


                    <div class="status high">
                        ● HIGH TRAFFIC
                    </div>

                </div>


            </div>



            <!-- RECOMMENDATION -->

            <div class="recommendation-card">

                <div class="recommendation-icon">
                    🟢
                </div>


                <div class="recommendation-content">

                    <div class="recommendation-label">

                        RECOMMENDED LOW-TRAFFIC ROAD

                    </div>


                    <h2>
                        ${lowestRoad}
                    </h2>


                    <p>
                        ${lowest} vehicles/hour
                    </p>


                    <div class="recommendation-text">

                        This road has the lowest calculated
                        traffic flow among the analyzed roads.

                        It may be considered when selecting
                        a lower-traffic road option.

                    </div>


                    <button
                        class="choose-road-button"
                        onclick="
                            buttonSound();
                            chooseRoad(
                                '${lowestRoad}',
                                ${lowest}
                            )
                        ">

                        🟢 Choose ${lowestRoad}

                    </button>

                </div>

            </div>



            <!-- ENGINEERING INSIGHT -->

            <div class="insight-card">

                <h3>
                    💡 Engineering Insight
                </h3>


                <p>

                    The traffic flows were calculated by
                    solving the system of linear equations
                    using the Gauss-Jordan elimination method.

                    The road with the lowest calculated flow
                    is highlighted on the network map as the
                    recommended low-traffic option.

                </p>

            </div>



            <!-- ANALYZE AGAIN -->

            <div class="action-buttons">

                <button
                    onclick="
                        buttonSound();
                        startAnalysis()
                    ">

                    🔄 Analyze Again

                </button>

            </div>


            <p class="footer-text">

                Traffic Network Analysis
                • Engineering Mathematics-I

            </p>


        </div>

    `;


    // Play final success sound

    successSound();

}

function chooseRoad(road, flow) {

    document.body.innerHTML = `

        <div class="dashboard">

            <div class="dashboard-header">

                <div class="traffic-icon">
                    🚦
                </div>

                <div>

                    <h1>
                        Road Selected
                    </h1>

                    <p>
                        Traffic route recommendation
                    </p>

                </div>

            </div>


            <div class="selection-success">

                <div class="selection-icon">
                    ✓
                </div>


                <h2>
                    ${road} Selected
                </h2>


                <p class="selected-flow">

                    ${flow} vehicles/hour

                </p>


                <p>

                    You selected the road with the
                    lowest calculated traffic flow
                    in the analyzed network.

                </p>


                <button
                    onclick="
                        buttonSound();
                        startAnalysis()
                    ">

                    🔄 New Analysis

                </button>

            </div>

        </div>

    `;


    successSound();

}

// =====================================================
// PROJECT MEMBER PROFILE
// =====================================================

function showMemberProfile(member) {

    buttonSound();


    let details = {};


    if (member === "nithil") {

        details = {

            name: "S NITHIL",

            register: "1914260044",

            department: "Mechanical Engineering",

            year: "1st",

            email: "sathishkumarnithil@gmail.com",

            contact: "9840002941",

            role: "Team Head"

        };

    }


    else if (member === "chez") {

        details = {

            name: "ELANCHEZHIYAN B",

            register: "1914260007",

            department: "—MECHANICAL ENGINEERING",

            year: "1st",

            email: "—",

            contact: "—",

            role: "—"

        };

    }


    else if (member === "roshan") {

        details = {

            name: "ROSHAN AKKTHAR J",

            register: "1925260014",

            department: "—AI & ML",

            year: "1st",

            email: "—",

            contact: "—",

            role: "—"

        };

    }


    const profile = document.createElement("div");

    profile.className = "profile-overlay";


    profile.innerHTML = `

        <div class="profile-modal">


            <!-- CLOSE -->

            <button
                class="profile-close"
                onclick="
                    buttonSound();
                    this.closest('.profile-overlay').remove();
                ">

                ×

            </button>


            <!-- HEADER -->

            <div class="profile-header">

                <div class="profile-avatar">

                    👤

                </div>


                <div>

                    <h2>

                        ${details.name}

                    </h2>


                    <p>

                        ${details.register}

                    </p>

                </div>

            </div>


            <!-- DETAILS -->

            <div class="profile-details">


                <div class="profile-row">

                    <span>🎓</span>

                    <div>

                        <label>
                            Name
                        </label>

                        <strong>
                            ${details.name}
                        </strong>

                    </div>

                </div>



                <div class="profile-row">

                    <span>🪪</span>

                    <div>

                        <label>
                            Register Number
                        </label>

                        <strong>
                            ${details.register}
                        </strong>

                    </div>

                </div>



                <div class="profile-row">

                    <span>⚙️</span>

                    <div>

                        <label>
                            Department
                        </label>

                        <strong>
                            ${details.department}
                        </strong>

                    </div>

                </div>



                <div class="profile-row">

                    <span>📚</span>

                    <div>

                        <label>
                            Year / Semester
                        </label>

                        <strong>
                            ${details.year}
                        </strong>

                    </div>

                </div>



                <div class="profile-row">

                    <span>✉️</span>

                    <div>

                        <label>
                            Email
                        </label>

                        <strong>
                            ${details.email}
                        </strong>

                    </div>

                </div>



                <div class="profile-row">

                    <span>📞</span>

                    <div>

                        <label>
                            Contact
                        </label>

                        <strong>
                            ${details.contact}
                        </strong>

                    </div>

                </div>



                <div class="profile-row">

                    <span>⭐</span>

                    <div>

                        <label>
                            Role
                        </label>

                        <strong>
                            ${details.role}
                        </strong>

                    </div>

                </div>


            </div>


            <button
                class="profile-done"
                onclick="
                    buttonSound();
                    this.closest('.profile-overlay').remove();
                ">

                ← Close Profile

            </button>


        </div>

    `;


    document.body.appendChild(profile);

}